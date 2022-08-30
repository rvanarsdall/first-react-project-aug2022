const DisplayVoteTotals = (props) => {
  const { name, count } = props.vote;
  return (
    <>
      <p>
        {name} had a total vote count of {count}
      </p>
    </>
  );
};

export default DisplayVoteTotals;
