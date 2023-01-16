const firebase = require('firebase-admin');

const serviceAccount = require('./admin.json');

const initializeFirebaseAdmin = async () => {
    try {
        return firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.log(error, 'firebaseError')
    }
}

module.exports = { initializeFirebaseAdmin };
