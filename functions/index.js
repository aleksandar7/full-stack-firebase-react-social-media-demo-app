const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbauth');

const { getAllScreams, postOneScream, getScream, commentOnScream } = require('./handlers/screams');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
// TODO: delete scream
// TODO: like a scream
// TODO: unlike a scream
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/users/image', FBAuth, uploadImage)
app.post('/users', FBAuth, addUserDetails)
app.get('/users', FBAuth, getAuthenticatedUser)

exports.api = functions.region('europe-west3').https.onRequest(app);