//initializing dontenv form accesing env variables in our file
require('dotenv').config();

const express = require("express");
const server = express();

const cors = require("cors");

//Connection to the database
const db = require("../config/db/connect");
//declaring routes
const routes = require("../app/routes/routes")

//Initializing FireaseAdmin
const firebase = require("../config/fcm/fcm")

//Middleware to handle POST request
server.use(express.json({ limit: "200mb" }));
server.use(express.urlencoded({ extended: true }));

//Middleware to handle request from any source
server.use(cors());

//Middleware to server static file
server.use("/public", express.static("public"));

//initializing routes
server.use(routes.apiRoutes);
server.use(routes.webRoutes);

//setting up the connection to the database and the server
const port = process.env.SERVER_PORT || 42000
const start = async () => {
    try {
        //making our server alive in the port provided above,
        //if the server is live then it will try to connect with database
        //initialize firebase admin
        server.listen(port, async () => {
            console.log(`The server is up and running on PORT: ${port}`);
            await db.mongooseConnect(process.env.LOCAL_MONGODB_CONNECTION_URL);
            await firebase.initializeFirebaseAdmin();
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { start };