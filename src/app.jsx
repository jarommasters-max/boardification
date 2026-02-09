import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
    <header>
        <nav className="navbar fixed-top">
            <menu className="nav">
                <li><img src="board_logo.png" height="50"/></li>
                <li><a className="nav-link link-primary" href="index.html">Home</a></li>
                <li><a className="nav-link link-secondary" href="create.html">Create a Board</a></li>
                <li><a className="nav-link link-secondary" href="myboards.html">My Boards</a></li>
                <li><a className="nav-link link-secondary" href="about.html">About</a></li>
            </menu>
        </nav>
        <hr/>
    </header>

    <main>App components go here</main>

    <footer>
            <hr/>
            <span>Jarom Masters</span>
            <span><a href="https://github.com/jarommasters-max/boardification">GitHub Repository</a></span>
        </footer>
    </div>
  );
}