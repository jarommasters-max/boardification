import React from 'react';
import "./myboards.css";
import {MakeBoardTables} from './makeboardtables.jsx';
import {useNavigate} from 'react-router-dom';

export function Myboards({user, authState}) {
  const navigate = useNavigate();

  // const [scoreToAdd, setScoreToAdd] = React.useState() //I don't know if this should be here, or just in the makeboardtables file. :\ hm...
    const [allBoards, setAllBoards] = React.useState([]);


  if (true){
  function addScore(boardId, user, scoreToAdd){
    // setAllBoards(prev => {
    //   const updatedBoards = {...prev};
    //   updatedBoards[boardId].scores = {
    //     ...updatedBoards[boardId].scores,
    //     [user]: scoreToAdd
    //   };
    //   localStorage.setItem('allBoards', JSON.stringify(updatedBoards));
    //     return updatedBoards;
      
    };


    //FUNCTION TO GET ALL BOARDS FROM SERVER
    React.useEffect(() => {
    fetch('/api/getBoards')
      .then((response) => response.json())
      .then((boards) => {
        setAllBoards(boards);
      });
  }, []);

  return (
    <main>
      {user && <p>Logged in as: {user}</p>}
        <h2>My Boards</h2>
        {Object.values(allBoards).map((board) => (
          <MakeBoardTables key={board.id} user={user} board={board} addScore={addScore}/>
        ))}
    </main>
  );
  };
}
// else {
//     function returnToLogin(){
//         navigate('/')
//     }
//     return(
//     <main>
//     <h1>You must be logged in to access this page</h1>
//     <button type="submit" className="btn btn-outline-primary" onClick={returnToLogin}>Click Here to Return to Login</button>
//     </main>
//     );
    
// };