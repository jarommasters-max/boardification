const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('boardificaton');
const userCollection = db.collection('user');
const boardCollection = db.collection('board');

async function addBoard(board) {
    await boardCollection.insertOne(board);
}

// async function updateBoard(board) {
//     await
// }


async function getUser(email) {
    return userCollection.findOne({email: email});
}

async function getUserWithToken(token) {
    return userCollection.findOne({token: token});
}

// async function addUser(user) {
// }

// async function updateUser(user) {
// }

// async function updateUserDeauthenticate{
// }

// async function addScoreToBoard() {
// }

//Some function to return all boards


module.exports = {
    addBoard,
    getUser,
    
}