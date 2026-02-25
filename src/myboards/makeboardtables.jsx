import React from 'react';

export function MakeBoardTables({board}) {
    
    const boardScores = Object.entries(board.scores);

    return (
        <main>
        <div>{board.title}</div>
        <table class="table table-bordered">
            <thead class="thead-dark">
            <tr>
                <th scope="col"  class="small_col">#</th>
                <th scope="col">{board.title}</th>
                <th scope="col">{board.typeScore}</th>
            </tr>
            </thead>
            <tbody>
                {
                    boardScores.map(([scrUser, scr]) => (
                        <tr>
                            <th scope="row" class="small_col">1</th>
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