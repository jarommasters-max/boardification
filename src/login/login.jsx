import React from 'react';

export function Login() {
    const [userName, getUser] = React.useState("");
    cost [password, getPassword] = React.useState("");

    function loginUser() {
        getUser()
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
            <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
            <button type="submit" className="btn btn-outline-secondary">Create Account</button>
            </div>
    </main>
  );
}