import React from 'react';
import "./about.css";

export function About() {
  return (
    <main>
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
        <p>"Friendships born on the field of athletic strife are the real gold of competition. Awards become corroded, friends gather no dust."</p>
        <p>--Jesse Owens</p>
        </div>
        <br/>
        <p id="class_explanation">
            **Boardification was created as a class project for Brigham Young University's
            Web Programming (CS 260) class.**
        </p>
        </main>
  );
}