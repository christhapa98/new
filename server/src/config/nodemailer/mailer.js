require('dotenv').config();
const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE,
    auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
    }
});

module.exports = { mailer };
