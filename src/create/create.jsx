import React from 'react';
import "./create.css";

export function Create({user}) {
    const [catrgory, setCategory] = React.useState('');
    const [scoreType, setScoreType] = React.useState('');


    function createBoard(){
        
    }

    function getCategory(){
        setCategory(txt.target.value);
        
    }

    function getScoreType(){
        setScoreType(txt.target.value);
    }

  return (
    <main>
        <h2>Create New Leaderboard:</h2>
        
        <form method="get" action="myboards.html">
            <div>
                <span>Board Title:</span>
                <input type="text" className="form-control" placeholder="ex: Milk Drinking" onChange={getCategory}/>
            </div>
            <div>
                <span>Score Type:</span>
                <input type="text" className="form-control" placeholder="ex: Litres of Milk" onChange={getScoreType}/>
            </div>
            <div className="buttons">
            <button type="submit" className="btn btn-outline-primary" onClick={createBoard}>Create Board</button>
            </div>
        </form>
        </main>
  );
}