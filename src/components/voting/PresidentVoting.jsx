import DisplayVoteTotals from "./DisplayVoteTotals";

const PresidentVoting = (props) => {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];
  return (
    <>
      <p>Hello from President Voting</p>
      {/* <DisplayVoteTotals vote={votes[0]} />
      <DisplayVoteTotals vote={votes[1]} /> */}

      {votes.map((vote, index) => (
        <DisplayVoteTotals key={index} vote={vote} />
      ))}
    </>
  );
};

export default PresidentVoting;
