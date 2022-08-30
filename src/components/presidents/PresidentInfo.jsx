import DisplayTable from "./DisplayTable";
import { presidentsArray } from "./presidents.constant";
const PresidentInfo = (props) => {
  const livingPresidents = presidentsArray.filter(
    (president) => president.passed === undefined
  );

  const deadPresidents = presidentsArray.filter(
    (president) => president.passed !== undefined
  );
  // ! Challenge Time
  // Create a filtered list for the presidents that are dead and create a new DisplayTable for that list of data.
  return (
    <>
      <h2>Hello from PresidentInfo</h2>
      <DisplayTable presidentData={deadPresidents} title="Dead Presidents" />
      <DisplayTable
        presidentData={livingPresidents}
        title="Living Presidents"
      />
      <DisplayTable presidentData={presidentsArray} title="All Presidents" />
    </>
  );
};

export default PresidentInfo;
