import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx';
// import { AuthState } from './authState';


export function Login({username, authState, onAuthChange}) {
    // const [user, setUser] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [displayError, setDisplayError] = React.useState(null);


    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }




    {authState === 'authenticated' && (
        <LoggedIn userName={username}/>
    );
    }

    {authState === 'unauthenticated' && (
        <NotLoggedIn username={username} onLogin={(loginUserName) => {
              onAuthChange(loginUserName, 'authenticated');}}/>
    );
    }

};