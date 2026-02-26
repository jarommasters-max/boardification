import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Myboards } from './myboards/myboards';
import { About } from './about/about';

export default function App() {
  const [user, getInfo] = React.useState(localStorage.getItem('username') || null);
  const [tempBoard, setTempBoard] = React.useState(); //Seems unnecessary now
  const [allBoards, setAllBoards] = React.useState(JSON.parse(localStorage.getItem('allBoards')) || {});
  const [allUsers, setAllUsers] = React.useState(JSON.parse(localStorage.getItem('allUsers')) || {});
  const [loggedInUser, setLoggedInUser] = React.useState(JSON.parse(localStorage.getItem('loggedInUser')) || false);

  React.useEffect(() => {
      localStorage.setItem('allUsers', JSON.stringify(allUsers));
  }, [allUsers]);
  React.useEffect(() =>{
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  // In the future, I will have the user data also associated with the boards they have. An object with the username, password,
  // and a list of IDs for the boards they are a part of, so that create.jsx could easily assemble a user-specific list of boards.


  return (
    <BrowserRouter>
    <div className="body text-light">
    <header>
        <nav className="navbar">
            <menu className="nav">
                <span className="image"><img src="board_logo.png" height="40vh"/></span>
                <li className="nav-item"><NavLink className="nav-link link-primary" to="">Home</NavLink></li>
                {user && <li className="nav-item"><NavLink className="nav-link link-secondary" to="create">Create a Board</NavLink></li>}
                {user && <li className="nav-item"><NavLink className="nav-link link-secondary" to="myboards">My Boards</NavLink></li>}
                <li className="nav-item"><NavLink className="nav-link link-secondary" to="about">About</NavLink></li>
            </menu>
        </nav>
        <hr/>
    </header>

    <Routes>
    <Route path='/' element={<Login getInfo={getInfo} setAllUsers={setAllUsers} allUsers={allUsers} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} exact />
    <Route path='/create' element={<Create user={user} setTempBoard={setTempBoard} setAllBoards={setAllBoards} allBoards={allBoards} setAllUsers={setAllUsers} allUsers={allUsers} loggedInUser={loggedInUser}/>} />
    <Route path='/myboards' element={<Myboards user={user} allBoards={allBoards} setAllBoards={setAllBoards} loggedInUser={loggedInUser}/>} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
    </Routes>

    <footer>
            <hr/>
            <span>Jarom Masters</span>
            <span><a href="https://github.com/jarommasters-max/boardification">GitHub Repository</a></span>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}