import React from 'react';

export function Login() {
    function loginUser() {
        console.log('login')
    }


  return (
    <main>
        <h4>Login:</h4>
            <div>
                <span>Email</span>
                <input className="form-control" type="text" placeholder="exampleemail@examplemail.com"/>
            </div>
            <div>
                <span>Password</span>
                <input className="form-control" type="text" placeholder="***********"/>
            </div>
            <div className="buttons">
            <button className="btn btn-primary" onClick={loginUser}>Login</button>
            <button type="submit" className="btn btn-outline-secondary">Create Account</button>
            </div>
    </main>
  );
}