import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx';
// import { AuthState } from './authState';


export function Login({username, authState, onAuthChange}) {
    const [username, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);


    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }


    async function loginUser() {
    loginOrMakeUser(`/api/auth/login`);
  }

  async function makeUser() {
    loginOrMakeUser(`/api/auth/create`);
  }
    
    async function loginOrMakeUser(endpoint) {
        const response = await fetch(endpoint, {
            method: 'POST',
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
            // props.onLogin(username);
        }
        else {
      const body = await response.json();
      setDisplayError(`Error: ${body.msg}`);
    }
    }




    {authState === 'authenticated' && (
        <LoggedIn userName={user}/>
    );
    }

    {authState === 'unauthenticated' && (
        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser} makeUser={makeUser}/>
    );
    }

    if (loggedInUser === true){
        return (
            <main>
                <LoggedIn signOut={signOut}/>
            </main>
        )
  };
};