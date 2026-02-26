import React from 'react';
import "./create.css";
import {useNavigate} from 'react-router-dom';

export function Create({user,setTempBoard,setAllBoards,allBoards}) { //remove all the tempboard stuff. It's no longer needed.
    const [category, setCategory] = React.useState('');
    const [scoreType, setScoreType] = React.useState('');

    const navigate = useNavigate();

    function makeNewBoard(cat, scr, user){
        const newBoard = {
            id: crypto.randomUUID(),
            title: cat,
            typeScore: scr,
            owner: user,
            users: [user],
            scores: {}
        }
        return (newBoard);
    }


    function createBoard(){
        const newBoard = makeNewBoard(category, scoreType, user);
        setTempBoard(newBoard);
        const updatedBoardSet = {...allBoards, [newBoard.id]: newBoard}
        setAllBoards(updatedBoardSet);
        localStorage.setItem('allBoards', JSON.stringify(updatedBoardSet));
        navigate('/myboards');
    }

    function getCategory(txt){
        setCategory(txt.target.value);
        
    }

    function getScoreType(txt){
        setScoreType(txt.target.value);
    }

  return (
    <main>
    {user && <p>Logged in as: {user}</p>}
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