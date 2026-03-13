const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';


//User List
let users = [];
let boards = {};

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
apiRouter.post('/board', verifyAuth, (req, res) => {
  boards = updateBoardList(req.body);
  res.send(boards);
});

//function to add new boards to the boards array.
function updateBoardList(newBoard){
    boards[newBoard.id] = newBoard;
    return boards;
};


//addScoreToBoard
api.Router.post('/addScore', verifyAuth, (req, res) => {
    const { boardId, user, score } = req.body;
  if (boards[boardId]) {
    boards[boardId].scores[user] = score;
    res.send(boards);
  } else {
    res.status(404).send({ msg: "Board not found" });
  }
});

// //function to add scores to a specific board
//     //insert code here
// function addToBoard(boardInfo){
//     const boarid = boardInfo.id;
//     const user = boardInfo.user;
//     const scoreToAdd = boardInfo.score;
//     const boardToAddTo = boards[0];
//     for (let i = 0; i < boards.length; i++){
//         if (boards[i].id === boarid){
//             boardToAddTo = boards[i];
//             break;
//         }
//     }
// }

//function to send boards
apiRouter.get('/getBoards', verifyAuth, (_req, res) => {
  res.send(boards);
});


//function to create a user
async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}


async function getUser(field, value){
    if (!value) return null;
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