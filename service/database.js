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

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({email: user.email}, {$set: user});
}

async function updateUserDeauthenticate(user){
    await userCollection.updateOne({email: user.email}, {$unset:{token:1}});
}

async function getSingleBoard(bid){
    return boardCollection.findOne({id: bid})
}

async function addScoreToBoard(boardID, user, score) {
    await boardCollection.updateOne({id: boardID}, {$set: {[`scores.${user}`]: score }})
}

//Some function to return all boards
async function getAllBoards(){
    return boardCollection.find().toArray();
}


module.exports = {
    addBoard,
    getUser,
    getUserWithToken,
    addUser,
    updateUser,
    updateUserDeauthenticate,
    getSingleBoard,
    addScoreToBoard,
    getAllBoards,
    
}