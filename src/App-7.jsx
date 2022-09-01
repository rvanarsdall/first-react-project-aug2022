import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // this is a comment
  const [fetchedData, setFetchedData] = useState("");
  const [userSelection, setUserSelection] = useState("");

  async function fetchData() {
    const url = `https://jsonplaceholder.typicode.com/posts/${userSelection}`;

    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    setFetchedData(responseData);
  }

  useEffect(() => {
    if (userSelection) {
      fetchData();
    }
  }, [userSelection]);

  function handleSubmit(e) {
    e.preventDefault();
    setUserSelection(e.target.postNumber.value);
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Select a numerical value</h2>
        <input type="text" name="postNumber" />
        <button type="submit">Click to Submit</button>
      </form>
      <h2>{fetchedData.title}</h2>
      <div>{fetchedData.body}</div>
      <Footer />
    </div>
  );
}

export default App;
