const mongoose = require("mongoose");

async function mongooseConnect(url) {
    mongoose.set('strictQuery', true)
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).
        then((_) => { console.log("DB connection Successfull") }
        );
}

module.exports = { mongooseConnect };