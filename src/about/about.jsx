import React from 'react';
import "./about.css";

export function About() {
    //When an API is implemented, this will be very easy to set the author and quote set up.
    const ideaWord = "";

    // async function getWords(){
    //     const otherUrl = "https://fakerapi.it/api/v2/custom?_quantity=5&customfield1=word";
    //     try {
    //         const response = await fetch(otherUrl);
    //         if (!response.ok) throw new Error(`Error: ${response.status}`);
    //             const data = await response.json();
    //             console.log(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    }

    const author = "Jesse Owens";

    const quote = 'Friendships born on the field of athletic strife are the real gold of competition. Awards become corroded, friends gather no dust.';

    getWords();

  return (
    <main>
        <div></div>
        <h2>About Boardification</h2>
        <br/>
        <div id="explanation">
        <p><b>What is Boardification?</b></p>
        <p>
            Boardification is a tool for making anything quantifiable into a competition.
            Do you want to compete with your friends to see who can run the most miles in
            a week? Do you want to see who can fold the highest number of paper cranes in
            thirty minutes? Boardification is the tool to use, and for many other situations
            as well.
        </p>
        <p id="admonition">
            Getting started is easy. Simply create a board, and see who's the best.
        </p>
        </div>
        <div id="quote">
        <p>"{quote}"</p>
        <p>--{author}</p>
        </div>
        <br/>
        <p id="class_explanation">
            **Boardification was created as a class project for Brigham Young University's
            Web Programming (CS 260) class.**
        </p>
        </main>
  );
}