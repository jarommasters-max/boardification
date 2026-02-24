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
  const [tempBoard, setTempBoard] = React.useState(localStorage.getItem('newboard') || null);
  const allBoards = {}
  //This may not need to be there
  function makeNewBoard(cat, scr, user){
        const newBoard = {
            title: cat,
            typeScore: scr,
            owner: user,
            users: [user],
            scores: {}
        }
        return (newBoard);
    }
  return (
    <BrowserRouter>
    <div className="body text-light">
    <header>
        <nav className="navbar">
            <menu className="nav">
                <li className="nav-item"><img src="board_logo.png" height="50"/></li>
                <li className="nav-item"><NavLink className="nav-link link-primary" to="">Home</NavLink></li>
                {user && <li className="nav-item"><NavLink className="nav-link link-secondary" to="create">Create a Board</NavLink></li>}
                {user && <li className="nav-item"><NavLink className="nav-link link-secondary" to="myboards">My Boards</NavLink></li>}
                <li className="nav-item"><NavLink className="nav-link link-secondary" to="about">About</NavLink></li>
            </menu>
        </nav>
        <hr/>
    </header>
    {user && <p>Logged in as: {user}</p>}

    <Routes>
    <Route path='/' element={<Login getInfo={getInfo}/>} exact />
    <Route path='/create' element={<Create user={user} setTempBoard={setTempBoard}/>} />
    <Route path='/myboards' element={<Myboards/>} />
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