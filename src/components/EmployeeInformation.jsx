const EmployeeInformation = (props) => {
  //  How can I destructure props to get a single variable to use...

  const { name, city, position, favoriteFood } = props;

  return (
    <>
      <h1>{name}</h1>
      <ul style={{ listStyleType: "none", textAlign: "left" }}>
        <li>From: {city}/State</li>
        <li>Position: {position}</li>
        <li>Favorite Food: {favoriteFood}</li>
      </ul>
    </>
  );
};

export default EmployeeInformation;
