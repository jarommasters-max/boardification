import React from 'react';

export function MakeBoardTables({board}) {
    
    const boardScores = Object.entries(board.scores || [["No scores yet!", "0" ]]);

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
                    boardScores.map(([scrUser, scr]) => (
                        <tr key={scrUser}>
                            <th scope="row" className="small_col">1</th>
                            <td>{scrUser}</td>
                            <td>{scr}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </main>
    );
}