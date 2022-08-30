import DisplayTableRow from "./DisplayTableRow";

const DisplayTable = (props) => {
  const { presidentData, title } = props;
  return (
    <>
      <h2>{title}</h2>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birth Year</th>
          <th>Currently Living</th>
          <th>Age Died</th>
        </tr>
        {/* <DisplayTableRow presidentInformation={presidentData[0]} />
        <DisplayTableRow presidentInformation={presidentData[1]} /> */}
        {presidentData.map((president, index) => (
          <DisplayTableRow presidentInformation={president} key={index} />
        ))}
      </table>
    </>
  );
};

export default DisplayTable;
