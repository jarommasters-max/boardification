import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';
import {LoggedIn} from './loggedin.jsx';
// import { AuthState } from './authState';


export function Login({username, authState, onAuthChange}) {
    // const [user, setUser] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [displayError, setDisplayError] = React.useState(null);



return(
    <main>
    {authState === 'authenticated' && (
        <LoggedIn username={username} onLogout={()=>onAuthChange(username, 'unauthenticated')}/>
    )}

    {authState === 'unauthenticated' && (
        <NotLoggedIn username={username} onLogin={(loginUserName) => {
              onAuthChange(loginUserName, 'authenticated');}}/>
    )}
</main>);
};