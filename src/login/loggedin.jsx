import React from 'react';

export function LoggedIn(props){

    function logout() {
        fetch(`/api/auth/logout`, {
        method: 'delete',
        })
        .catch(() => {
            // Logout failed. Assuming offline
        })
        .finally(() => {
            localStorage.removeItem('username');
            props.onLogout();
        });
    }

    return(
        <main>
        <h2>Welcome {localStorage.getItem('username')}. You are currently logged in.</h2>
        <button type="submit" className="btn btn-outline-secondary" onClick={logout}>Sign Out</button>
        </main>
    )
}