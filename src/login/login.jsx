import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NotLoggedIn} from './notloggedin.jsx';

export function Login({getInfo}) {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

const navigate = useNavigate();

    function loginUser() {
        localStorage.setItem('username', user);
        localStorage.setItem('password', password);
        getInfo(user);
        navigate('/myboards');
    }

    function getUser(txt) {
        setUser(txt.target.value);
    }

    function getPassword(txt){
        setPassword(txt.target.value);
    }

    // function checkPassword(){

    // }


  return (
    <main>
        {/* <h4>Login:</h4>
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
            </div> */}

        <NotLoggedIn getUser={getUser} getPassword={getPassword} loginUser={loginUser} setUser={setUser} setPassword={setPassword}/>
    </main>
  );
};