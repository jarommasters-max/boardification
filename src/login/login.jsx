import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx'

export function Login({getInfo, setAllUsers, allUsers, loggedInUser, setLoggedInUser}) {
    const [username, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

// const navigate = useNavigate();

//     function loginUser(usersToSearch = null) {
//         const list = usersToSearch || allUsers;
//         if (passwordChecks(list)){
//         localStorage.setItem('username', user);
//         localStorage.setItem('password', password); //remove this soon
//         getInfo(user);
//         setLoggedInUser(true)
//         navigate('/myboards');
//         return;
//         };
//         alert("Username or password are incorrect");
//         return;
//     }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }

//     function passwordChecks(usersToSearch){
//         if (Object.keys(usersToSearch).includes(user)){
//             if(usersToSearch[user].pswrd === password){
//             return true;
//             };
//         };
//         return false;
//     }

//     function buildUser(user, password){
//         const newUser = {
//             username: user,
//             pswrd: password,
//             ownedBoards: [],
//             participatingBoards: []
//         };
//         return newUser;
//     }

//     function addNewUser(){
//         const newUser = buildUser(user, password);
//         const updatedUserSet = {...allUsers, [user]: newUser};
//         setAllUsers(updatedUserSet);
//         return updatedUserSet;
//     }

//     function register(){
//         const newUserList = addNewUser();
//         loginUser(newUserList);
//     }

//     function signOut(){
//         localStorage.removeItem('username');
//         localStorage.removeItem('password')
//         setLoggedInUser(false)
//     }


    async function loginUser() {
    loginOrMakeUser(`/api/auth/login`);
  }

  async function makeUser() {
    loginOrMakeUser(`/api/auth/create`);
  }
    
    async function loginOrMakeUser(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({
                email: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('username', username);
            props.onLogin(username);
        }
        else {
      const body = await response.json();
      setDisplayError(`Error: ${body.msg}`);
    }
    }

    if (loggedInUser === false){
    return (
    <main>
        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser} makeUser={makeUser}/>
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