import React from 'react';
import "./about.css";

export function About() {
    //When an API is implemented, this will be very easy to set the author and quote set up.
    const [ideaText, setIdeaText] = React.useState("An idea can come from anywhere");
    const [ideaTitle, setIdeaTitle] = React.useState("Idea Generator");

    async function getWords(){
        const otherUrl = "https://fakerapi.it/api/v2/texts?_quantity=1&_characters=30";
        try {
            const response = await fetch(otherUrl);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
                const data = await response.json();
                return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    getWords()

    async function newQuote(){
         const data = await getWords();
         const title = data.data[0].title;
         const content = data.data[0].content;
         setIdeaText(content);
         setIdeaTitle(title);
         
    }

    

  return (
    <main>
        <div></div>
        <h2>About Boardification</h2>
        <div id="explanation">
            <p><b>What is Boardification?</b></p>
            <p>
                Boardification is a tool for making anything quantifiable into a competition.
                Do you want to compete with your friends to see who can run the most miles in
                a week? Do you want to see who can fold the highest number of paper cranes in
                thirty minutes? Boardification is the tool to use, and for many other situations
                as well.
            </p>
            <p>
                Getting started is easy. Simply create a board, and see who's the best.
            </p>
            <div id="quote">The button below generates very abstract sentences. Open your mind to what it leads you to. Anything you think of can be boardificated!</div>
        </div>

        <div id="quote">
        <div>"{ideaText}"</div>
        <div>--{ideaTitle}--</div>
        <button className="btn btn-outline-secondary" onClick={newQuote}>New Abstract Idea</button>
        </div>
        <br/>
        <p id="class_explanation">
            **Boardification was created as a class project for Brigham Young University's
            Web Programming (CS 260) class.**
        </p>
        </main>
  );
}