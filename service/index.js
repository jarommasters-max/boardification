const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

//Service Port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));


//service endpoint router
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


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
apiRouter.post('/auth/login', async (req, res) => {
    const user = await getUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token);
            res.send({email: user.email});
            return;
        }
    }
    res.status(401).send({msg: 'Incorrect Username/Password. Login Unsuccessful.'})
});


//DeleteAuth
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await getUser('token', req.cookies[authCookieName]);
    if (user) {
        await DB.updateUserDeauthenticate(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//newBoard
apiRouter.post('/board', verifyAuth, async (req, res) => { //This will need to be changed as well
  newBoard = req.body;
  await DB.addBoard(newBoard)
  allBoards = await DB.getAllBoards();
  res.send(allBoards);
});

//addScoreToBoard
apiRouter.post('/addScore', verifyAuth, async (req, res) => { //This will need to be modified.
    const { bid, user, score } = req.body;
    try {
    const board = await DB.getSingleBoard(bid); //possibly just move to the if statement
  if (board) {
    return await DB.addScoreToBoard(bid, user, score)
  } else {
    res.status(404).send({ msg: "Board not found" });
  }
  }
  catch (error){
    res.status(500).send({msg: "DB error"})
  }
});


//function to send boards
apiRouter.get('/boards', async (req, res) => {
    const boards = await DB.getAllBoards();
    res.send(boards);
})


//function to create a user
async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    await DB.addUser(user);
    return user;
}

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function getUser(field, value){
    if (!value) return null;
    //SIMON calls a DB.getUserByToken(value) here within an if statement, for if the field is a token.
    if (field === 'token') {
        return DB.getUserWithToken(value)
    }
    //then it returns a call to the DB.getUser(value)
    return DB.getUser(value);
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


peerProxy(httpService);