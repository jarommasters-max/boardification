import React from 'react';
import {useNavigate} from 'react-router-dom';

export function NotLoggedIn(props){
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

        function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
        console.log(txt.target.value);
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
                email: user,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('username', user);
            props.onLogin(user);
        }
        else {
        const body = await response.json();
        // setDisplayError(`Error: ${body.msg}`);
    }
    }



return(
<main>
        <h4>Login:</h4>
            <div>
                <span>Email</span>
                <input className="form-control" type="text" placeholder="exampleemail@examplemail.com" onChange={getUser}/>
            </div>
            <div>
                <span>Password</span>
                <input className="form-control" type="text" placeholder="***********" onChange={getPassword}/>
            </div>
            <div className="buttons">
            <button type="submit" className="btn btn-primary" onClick={() => loginUser()}>Login</button>
            <button type="submit" className="btn btn-outline-secondary" onClick={() => makeUser()}>Create Account</button>
            </div>
    </main>
)
};