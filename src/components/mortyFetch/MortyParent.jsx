import { useState, useEffect } from "react";
import MortyCard from "./MortyCard";
import { CardColumns } from "reactstrap";
import { useParams } from "react-router-dom";
const MortyParent = (props) => {
  const [results, setResults] = useState([]);
  const { id } = useParams();

  async function mortyFetch() {
    if (id) {
      let url = `https://rickandmortyapi.com/api/character/${id}`;

      let response = await fetch(url);
      let responseData = await response.json();
      console.log([responseData]);
      setResults([responseData]);
      // setResults(responseData.results);
    } else {
      let url = `https://rickandmortyapi.com/api/character/`;

      let response = await fetch(url);
      let responseData = await response.json();
      console.log(responseData.results);
      setResults(responseData.results);
    }
  }

  useEffect(() => {
    mortyFetch();
  }, []);
  return (
    <>
      <h2>Hello from morty parent</h2>
      <CardColumns
        style={{
          width: "18rem",
        }}
      >
        {results.map((character, index) => (
          <MortyCard key={index} character={character} />
        ))}
      </CardColumns>
    </>
  );
};

export default MortyParent;
