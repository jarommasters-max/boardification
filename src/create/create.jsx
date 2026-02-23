import React from 'react';
import "./create.css";

export function Create({user}) {
  return (
    <main>
        <h2>Create New Leaderboard:</h2>
        
        <form method="get" action="myboards.html">
            <div>
                <span>Board Title:</span>
                <input type="text" className="form-control" placeholder="ex: Milk Drinking"/>
            </div>
            <div>
                <span>Score Type:</span>
                <input type="text" className="form-control" placeholder="ex: Litres of Milk"/>
            </div>
            <div className="buttons">
            <button type="submit" className="btn btn-outline-primary">Create Board</button>
            </div>
        </form>
        </main>
  );
}