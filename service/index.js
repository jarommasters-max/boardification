const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';


//User List
let users = [];

//Service Port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));


//service endpoint router
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//createAuth
//endpoint for registering a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await getUser('email', req.body.email)) {
        res.status(409).send( {msg: 'This User Already Exists'} );
    }
    else{
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({email: user.email});
    }
});

//GetAuth
//endpoint for authenticating a user
    //takes email and password
    // returns cookie containing auth token.
    //returns 401 (unauth) if email/password is incorrect


//DeleteAuth
//endpoint for logout
    //Takes a cookie with an auth token
    //marks token invalid
    //return 200



//Endpoint for getting user (GetMe)
    //takes a cookie with auth token
    //returns authenticated user
    //if token invalid
        //return 401


        
//Testing endpoint

// var testdata = {test:"testdata "};
// apiRouter.get('/test', (_req, res) => {
//     console.log('In Test')
//     res.send(testdata);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});