const DisplayTableRow = (props) => {
  const { first, last, year, passed } = props.presidentInformation;
  let d = new Date();
  let currentYear = d.getFullYear();
  return (
    <>
      <tr>
        <td>{first}</td>
        <td>{last}</td>
        <td>{year}</td>
        <td>{passed === undefined ? "True" : "False"}</td>
        <td>{passed === undefined ? currentYear - year : passed - year}</td>
      </tr>
    </>
  );
};

export default DisplayTableRow;
