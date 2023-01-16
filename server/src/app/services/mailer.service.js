const mailer = require("../../config/nodemailer/mailer");

// Mail Sample Object
// const mailOptions = {
//     from: 'thapas58@gmail.com',
//     to: 'chris.thapa@riddhasoft.com',
//     subject: 'Hello from Node.js',
//     text: 'This is an email sent from a Node.js backend using Nodemailer.'
// };

const signupSuccessEmail = async (mailOptions) => {
    return mailer.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error")
            console.log(error);
        } else {
            console.log("no error")
            return true;
        }
    });
}

module.exports = { signupSuccessEmail };