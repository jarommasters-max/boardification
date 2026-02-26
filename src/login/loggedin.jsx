import React from 'react';

export function LoggedIn({}){
    return(
        <main>
        <h2>Welcome {localStorage.getItem('username')}. You are currently logged in.</h2>
        <button type="submit" className="btn btn-outline-secondary" onClick={}>Logout</button>
        </main>
    )
}