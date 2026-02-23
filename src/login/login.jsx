import React from 'react';

export function Login() {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [userName, getUser] = React.useState("");
    // cost [password, getPassword] = React.useState("");

    function loginUser() {
        localStorage.setItem('username', user)
        localStorage.setItem('password', password)
    }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }


  return (
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
            <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
            <button type="submit" className="btn btn-outline-secondary">Create Account</button>
            </div>
    </main>
  );
}