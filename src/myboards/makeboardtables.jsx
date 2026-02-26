import React from 'react';

export function MakeBoardTables({user, board, addScore}) {
    
    const boardScores = Object.entries(board.scores || {}).sort((a, b) => b[1] - a[1]);;
    const [scoreToAdd, setScoreToAdd] = React.useState()
    
    function getUserAddedScore(txt){
        setScoreToAdd(txt.target.value)
    }

    function preAddScore(allBoards){
        const boardId = board.id;
        addScore(boardId, user, scoreToAdd)
        //handle the scoreToAdd, call and pass it to addScore
    }

    return (
        <main>
        <div>{board.title}</div>
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th scope="col"  className="small_col">#</th>
                <th scope="col">Name</th>
                <th scope="col">{board.typeScore}</th>
            </tr>
            </thead>
            <tbody>
                {
                    boardScores.map(([scrUser, scr], i) => (
                        <tr key={scrUser}>
                            <th scope="row" className="small_col">{i}</th>
                            <td>{scrUser}</td>
                            <td>{scr}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <form method="get">
        <div className="score_sub">
            <span>Submit Score:</span>
            <input type="text" className="form-control" placeholder="Score" onChange={getUserAddedScore}/>
        </div>
        <div className="buttons">
        <button type="submit" className="btn btn-outline-primary" onClick={preAddScore}>Submit Score</button>
        </div>
        </form>
        </main>
    );
}