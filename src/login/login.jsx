import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';

export function Login({getInfo, setAllUsers}) {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

const navigate = useNavigate();

    function loginUser() {
        localStorage.setItem('username', user);
        localStorage.setItem('password', password);
        getInfo(user);
        navigate('/myboards');
    }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }

    function passwordChecks(){
        //check password to see if it is valid and associated with that user.
    }

    function buildUser(user, password){
        newUser = {
            username: user,
            pswrd: password,
            ownedBoards: [],
            participatingBoards: []
        };
        return newUser;
    }

    function addNewUser(){
        //creates user data, complete with username, passwords, boards they own, and boards they are a part of.
    }

    if (true){
  return (
    <main>
        {/* <h4>Login:</h4>
            <div>
                <span>Email</span>
                <input className="form-control" type="text" placeholder="exampleemail@examplemail.com" onChange={getUser}/>
            </div>
            <div>
                <span>Password</span>
                <input className="form-control" type="text" placeholder="***********" onChange={getPassword}/>
            </div>
            <div className="buttons">
            <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
            <button type="submit" className="btn btn-outline-secondary">Create Account</button>
            </div> */}

        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser}/>
    </main>
    
  );
  };
};