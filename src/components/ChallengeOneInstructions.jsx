function ChallengeOneInstructions() {
  let ulStyle = { textAlign: "left", color: "red" };

  return (
    <>
      <h3>Create the Following</h3>
      <ul style={ulStyle}>
        <li>Create a new component called AboutMe.jsx</li>
        <li>create an h1 tag with your full name</li>
        <li>
          create a p tag with where you grew up (city/state) - use variables for
          city and state
        </li>
        <li>
          an unordered list with the last 3 places you have visited (target,
          alaska..etc)
        </li>
      </ul>
    </>
  );
}

export default ChallengeOneInstructions;
