import React from 'react';
import "./myboards.css";
import {MakeBoardTables} from './makeboardtables.jsx';

export function Myboards({allBoards}) {
  const [scoreToAdd, setScoreToAdd] = React.useState() //I don't know if this should be here, or just in the makeboardtables file. :\ hm...

  function addScore(allBoards, scoreToAdd){
    //create function that will update the allBoards score entry for the board this is called in.
    
  }

  return (
    <main>
        <h2>My Boards</h2>
        {Object.values(allBoards).map((board) => (
          <MakeBoardTables key={board.id} board={board} addScore={addScore}/>
        ))}
    </main>
  );
}