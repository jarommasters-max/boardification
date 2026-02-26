import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx'

export function Login({getInfo, setAllUsers, allUsers}) {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

const navigate = useNavigate();

    function loginUser() {
        localStorage.setItem('username', user);
        localStorage.setItem('password', password); //remove this soon
        getInfo(user);
        navigate('/myboards');
    }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }

    function passwordChecks(user, password){
        if(allUsers[user].pswrd = password){
            return true;
        };
        return false;
    }

    function buildUser(user, password){
        const newUser = {
            username: user,
            pswrd: password,
            ownedBoards: [],
            participatingBoards: []
        };
        return newUser;
    }

    function addNewUser(){
        const newUser = buildUser(user, password);
        const updatedUserSet = {...allUsers, [user]: newUser};
        setAllUsers(updatedUserSet);
        localStorage.setItem('allUsers', JSON.stringify(updatedUserSet));
    }

    function register(){
        addNewUser();
        loginUser();
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

        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser} register={register}/>
    </main>

    
  );
  };
    if (false){
        return (
            <main>
                <LoggedIn/>
            </main>
        )
  }
};