function AboutMe() {
  const city = "Fort Wayne";
  const state = "Indiana";
  return (
    <>
      <h1 style={{ color: "red" }}>Rob Vanarsdall</h1>
      <p>
        The city I grew up in was {city} {state}
      </p>
      <ul style={{ listStyleType: "none" }}>
        <li>Kroger</li>
        <li>Target</li>
        <li>Mall</li>
      </ul>
    </>
  );
}

export default AboutMe;
