import React from 'react';

export function LoggedIn({signOut}){
    return(
        <main>
        <h2>Welcome {localStorage.getItem('username')}. You are currently logged in.</h2>
        <button type="submit" className="btn btn-outline-secondary" onClick={signOut}>Sign Out</button>
        </main>
    )
}