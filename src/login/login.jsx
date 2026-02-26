import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx'

export function Login({getInfo, setAllUsers, allUsers, loggedInUser, setLoggedInUser}) {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

const navigate = useNavigate();

    function loginUser(usersToSearch = null) {
        const list = usersToSearch || allUsers;
        if (passwordChecks(list)){
        localStorage.setItem('username', user);
        localStorage.setItem('password', password); //remove this soon
        getInfo(user);
        setLoggedInUser(true)
        localStorage.setItem('loggedInUser', JSON.stringify(true))
        navigate('/myboards');
        return;
        };
        // setUser(null);
        alert("Username or password are incorrect");
        return;
    }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }

    function passwordChecks(usersToSearch){
        if (Object.keys(usersToSearch).includes(user)){
            if(usersToSearch[user].pswrd === password){
            return true;
            };
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
        return updatedUserSet;
    }

    function register(){
        const newUserList = addNewUser();
        loginUser(newUserList);
    }

    function signOut(){
        localStorage.removeItem('username');
        localStorage.removeItem('password')
        setLoggedInUser(false)
        localStorage.setItem('loggedInUser', JSON.stringify(false))
    }

    if (loggedInUser === false){
    return (
    <main>
        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser} register={register}/>
    </main>

    
  );
  };
    if (loggedInUser === true){
        return (
            <main>
                <LoggedIn signOut={signOut}/>
            </main>
        )
  };
};