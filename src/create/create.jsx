import React from 'react';
import "./create.css";

export function Create({user}) {
    const [category, setCategory] = React.useState('');
    const [scoreType, setScoreType] = React.useState('');


    function createBoard(){
        console.log(category);
        console.log(scoreType);
        console.log(Object.keys(board));
    }

    function getCategory(txt){
        setCategory(txt.target.value);
        
    }

    function getScoreType(txt){
        setScoreType(txt.target.value);
    }

  return (
    <main>
        <h2>Create New Leaderboard:</h2>
        
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
        </main>
  );
}