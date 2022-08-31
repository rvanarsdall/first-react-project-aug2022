import { useState, useEffect } from "react";

const ChuckFetch = (props) => {
  let url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState("");
  const [firstName, setFirstName] = useState("");
  const [jokeHistory, setJokeHistory] = useState([]);

  async function checkFunk() {
    console.log("click worked");
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
    // joke = data.value;
    setJoke(data.value);
    console.log("JOKE VARIABLE", joke);
  }

  //   checkFunk();

  useEffect(() => {
    checkFunk();
  }, []);

  useEffect(() => {
    if (joke) {
      addToJokeHistory();
    }
  }, [joke]);
  //   ! CHALLENGE
  //  * Create a new useState that will initialize to an empty Array call the useState jokeHistory
  // * Your function will "Push" the joke that is most recently fetched into that new array
  // * The function addToJokeHistory should be called in a useEffect and only when "joke" has changed.
  function addToJokeHistory() {
    console.log("Add to Joke History was called");
    // let jokeHistoryClone = jokeHistory;

    // jokeHistoryClone.push(joke)

    // setJokeHistory(jokeHistoryClone)

    // Alternate Way

    setJokeHistory([joke, ...jokeHistory]);
  }

  function displayHistory() {
    return jokeHistory.map((joke, index) => <li key={index}>{joke}</li>);
  }

  //   Empty Square brackets means only run this effect once and that is on Page Mount.
  return (
    <>
      <h2>Hello from Chuck Fetch</h2>
      <p>Joke: {joke}</p>
      {/* We want the button to call a function to get a new joke when clicked */}
      <button onClick={checkFunk}>Get New Joke</button>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h3>Joke History</h3>
      <ul>{displayHistory()}</ul>
    </>
  );
};

export default ChuckFetch;
