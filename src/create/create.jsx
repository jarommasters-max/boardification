import React from 'react';
import "./create.css";
import {useNavigate} from 'react-router-dom';

export function Create({user, authState}) { //remove all the tempboard stuff. It's no longer needed.
    
    const [category, setCategory] = React.useState('');
    const [scoreType, setScoreType] = React.useState('');

    const navigate = useNavigate();

    if (authState === 'authenticated'){

        function getCategory(txt){
            setCategory(txt.target.value);
            
        }

        function getScoreType(txt){
            setScoreType(txt.target.value);
        }


    async function postNewBoard(){
        const response = await fetch('/api/board', {
            method: 'post',
            body: JSON.stringify({ 
                id: crypto.randomUUID(), 
                title: category, 
                typeScore: scoreType, 
                owner: user, 
                users: [user], 
                scores: {} }),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
            credentials: 'include'
        });
        if (response?.status === 200) {
            const updatedBoards = await response.json();
            console.log("Success! All boards:", updatedBoards);
            navigate('/myboards');
        }
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
                <button type="submit" className="btn btn-primary" onClick={postNewBoard}>Create Board</button>
                </div>
            </main>
    );
}
else {
    function returnToLogin(){
        navigate('/')
    }
    return(
    <main>
    <h1>You must be logged in to access this page</h1>
    <button type="submit" className="btn btn-primary" onClick={returnToLogin}>Click Here to Return to Login</button>
    </main>
    );
    
};
}