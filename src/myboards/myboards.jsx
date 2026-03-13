import React from 'react';
import "./myboards.css";
import {MakeBoardTables} from './makeboardtables.jsx';
import {useNavigate} from 'react-router-dom';

export function Myboards({user, authState}) {
  const navigate = useNavigate();

  // const [scoreToAdd, setScoreToAdd] = React.useState() //I don't know if this should be here, or just in the makeboardtables file. :\ hm...
    const [allBoards, setAllBoards] = React.useState({});


  if (true){
  async function addScore(boardId, user, scoreToAdd){
      const response = await fetch('/api/addScore', {
            method: 'post',
            body: JSON.stringify({bid: boardId, user: user, score: scoreToAdd}),
            headers: {'Content-type': 'application/json; charset=UTF-8',}
        });
        if (response?.status === 200) {
            const updatedBoards = await response.json();
            setAllBoards(updatedBoards);
            console.log("Success! All boards:", updatedBoards);
        }
      
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