import React from 'react';

export function Create() {
  return (
    <main>
        <h2>Create New Leaderboard:</h2>
        
        <form method="get" action="myboards.html">
            <div>
                <span>Board Title:</span>
                <input type="text" class="form-control" placeholder="ex: Milk Drinking"/>
            </div>
            <div>
                <span>Score Type:</span>
                <input type="text" class="form-control" placeholder="ex: Litres of Milk"/>
            </div>
            <div class="buttons">
            <button type="submit" class="btn btn-outline-primary">Create Board</button>
            </div>
        </form>
        </main>
  );
}