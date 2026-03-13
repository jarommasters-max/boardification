import React from 'react';
import {useNavigate} from 'react-router-dom';

export function NotLoggedIn({getUser,getPassword,loginUser,register}){
    
    async function loginOrMakeUser(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({
                email: userName,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charser=UTF-8',
            },
        });
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
            <button type="submit" className="btn btn-outline-secondary" onClick={register}>Create Account</button>
            </div>
    </main>
)
};