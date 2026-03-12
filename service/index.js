const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

//Service Port
const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.use(express.static('public'));


//service endpoint router
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//endpoint for registering a new user


//endpoint for authenticating a user
    //takes email and password
    // returns cookie containing auth token.
    //returns 401 (unauth) if email/password is incorrect


//endpoint for logout
    //Takes a cookie with an auth token
    //marks token invalid
    //return 200


//Endpoint for getting user (GetMe)
    //takes a cookie with auth token
    //returns authenticated user
    //if token invalid
        //return 401