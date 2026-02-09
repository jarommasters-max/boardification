import React from 'react';

export function Myboards() {
  return (
    <main>
        <h2>My Boards</h2>

        <caption>Glasses of milk</caption>
        <table class="table table-bordered">
            <thead class="thead-dark">
            <tr>
                <th scope="col"  class="small_col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Glasses</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" class="small_col">1</th>
                <td>Bobber78</td>
                <td>15</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">2</th>
                <td>Carl-Sonnet4</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">3</th>
                <td>Texas_red_20</td>
                <td>15</td>
            </tr>
            </tbody>
        </table>
        <form method="get" action="myboards.html">
        <div class="score_sub">
            <span>Submit Score:</span>
            <input type="text" class="form-control" placeholder="Score"/>
        </div>
        <div class="buttons">
        <button type="submit" class="btn btn-outline-primary">Submit Score</button>
        </div>
        </form>

        <hr/>
        <caption>Miles Run in a Week</caption>
        <table class="table table-bordered">
            <thead class="thead-dark">
            <tr>
                <th scope="col" class="small_col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Miles</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" class="small_col">1</th>
                <td>Richard_Tax77</td>
                <td>54</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">2</th>
                <td>OriginateMark</td>
                <td>35</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">3</th>
                <td>AZRanger1</td>
                <td>34</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">4</th>
                <td>LifeInClock60</td>
                <td>30</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">5</th>
                <td>Paper_Folder000</td>
                <td>8</td>
            </tr>
            </tbody>
        </table>
        <form method="get" action="myboards.html">
        <div class="score_sub">
            <span>Submit Score:</span>
            <input type="text" class="form-control" placeholder="Score"/>
        </div>
        <div class="buttons">
        <button type="submit" class="btn btn-outline-primary">Submit Score</button>
        </div>
        </form>

        <hr/>
        <caption>Paper Cranes folded in an hour</caption>
        <table class="table table-bordered">
            <thead class="thead-dark">
            <tr>
                <th scope="col"  class="small_col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Cranes</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" class="small_col">1</th>
                <td>Paper_Folder000</td>
                <td>668</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">2</th>
                <td>C0nstructor40</td>
                <td>71</td>
            </tr>
            <tr>
                <th scope="row" class="small_col">3</th>
                <td>Wilkinson_KING90</td>
                <td>69</td>
            </tr>
            </tbody>
        </table>
        <form method="get" action="myboards.html">
        <div class="score_sub">
            <span>Submit Score:</span>
            <input type="text" class="form-control" placeholder="Score"/>
        </div>
        <div class="buttons">
        <button type="submit" class="btn btn-outline-primary">Submit Score</button>
        </div>
        </form>
    </main>
  );
}