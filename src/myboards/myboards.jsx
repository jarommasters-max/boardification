import React from 'react';
import "./myboards.css";
import {MakeBoardTables} from './makeboardtables.jsx';

export function Myboards({allBoards}) { //send in some list of all boards a person is a part of.
    // create function to async create a board from an array.
    


  return (
    <main>
        <h2>My Boards</h2>
        {Object.values(allBoards).map((board) => (
          <MakeBoardTables key={board.id} board={board} />
        ))}
    </main>
  );
}