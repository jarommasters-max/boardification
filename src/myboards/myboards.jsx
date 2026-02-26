import React from 'react';
import "./myboards.css";
import {MakeBoardTables} from './makeboardtables.jsx';

export function Myboards({user, allBoards, setAllBoards}) {
  const [scoreToAdd, setScoreToAdd] = React.useState() //I don't know if this should be here, or just in the makeboardtables file. :\ hm...

  function addScore(boardId, user, scoreToAdd){
    //Note for the future, this will eventually need to be a promise once this is pulling from a shared database.
    setAllBoards(prev => {
      const updatedBoards = {...prev};
      updatedBoards[boardId].scores = {
        ...updatedBoards[boardId].scores,
        [user]: scoreToAdd
      };
      localStorage.setItem('allBoards', JSON.stringify(updatedBoards));
        return updatedBoards;
    });
  };

  return (
    <main>
      {user && <p>Logged in as: {user}</p>}
        <h2>My Boards</h2>
        {Object.values(allBoards).map((board) => (
          <MakeBoardTables key={board.id} user={user} board={board} addScore={addScore}/>
        ))}
    </main>
  );
}