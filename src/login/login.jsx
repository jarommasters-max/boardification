import React from 'react';

export function Login() {
  return (
    <main>
        <h4>Login:</h4>
        <form method="get" action="myboards.html">
            <div>
                <span>Email</span>
                <input class="form-control" type="text" placeholder="exampleemail@examplemail.com"/>
            </div>
            <div>
                <span>Password</span>
                <input class="form-control" type="test" placeholder="***********"/>
            </div>
            <div class="buttons">
            <button type="submit" class="btn btn-primary">Login</button>
            <button type="submit" class="btn btn-outline-secondary">Create Account</button>
            </div>
        </form>
    </main>
  );
}