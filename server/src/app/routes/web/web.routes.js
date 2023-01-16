const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Express App</h1>")
    // res.redirect("localhost:3000");
})

module.exports = router;