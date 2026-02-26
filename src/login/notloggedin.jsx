import React from 'react';
import {useNavigate} from 'react-router-dom';

export function NotLoggedIn({getUser,getPassword,loginUser,register}){
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