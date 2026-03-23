const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';


//User List
// let users = [];
// let boards = {};

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
apiRouter.post('/auth/login', async (req, res) => {
    const user = await getUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({email: user.email});
            return;
        }
    }
    res.status(401).send({msg: 'Incorrect Username/Password. Login Unsuccessful.'})
})


//DeleteAuth
//endpoint for logout
    //Takes a cookie with an auth token
    //marks token invalid
    //return 200
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});


//checking user authentication
const verifyAuth = async (req, res, next) => {
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    }
    else {
        res.status(401).send({msg: 'Authorization Failed'});
    }
};


        
//Testing endpoint

// var testdata = {test:"testdata "};
// apiRouter.get('/test', (_req, res) => {
//     console.log('In Test')
//     res.send(testdata);
// });

//newBoard
apiRouter.post('/board', verifyAuth, (req, res) => { //This will need to be changed as well
  boards = updateBoardList(req.body);
  res.send(boards);
});

//function to add new boards to the boards array.
function updateBoardList(newBoard){
    //in the SIMON updateScores(newScore) (which is similar to this), it does this:
    boards[newBoard.id] = newBoard; //await DB.addScore(newScore);
    return boards; //return DB.getHighScores();
};

//get all boards
apiRouter.get('/boards', async (req, res) => {
    const boards = await DB.getAllBoards();
    res.send(boards);
})


//addScoreToBoard
apiRouter.post('/addScore', verifyAuth, async (req, res) => { //This will need to be modified.
    const { bid, user, score } = req.body;
    try {
    const board = await DB.getSingleBoard(bid); //possibly just move to the if statement
  if (board) {
    await DB.addScoreToBoard(bid, user, score)
  } else {
    res.status(404).send({ msg: "Board not found" });
  }
  }
  catch (error){
    res.status(500).send({msg: "DB error"})
  }
});


//function to send boards
apiRouter.get('/getBoards', verifyAuth, (_req, res) => {
  res.send(boards); //I will need to replace this will a call to a DB function to get all boards from the DB.
});


//function to create a user
async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);//in SIMON, this is replaced by an await DB.addUser(user) to send the user to the DB.

    return user;
}

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function getUser(field, value){
    if (!value) return null;
    //SIMON calls a DB.getUserByToken(value) here within an if statement, for if the field is a token.
    //then it returns a call to the DB.getUser(value)
    return users.find((u) => u[field] === value);
}

//setAuthCookie
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});