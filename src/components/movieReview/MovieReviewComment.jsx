const MovieReviewComment = (props) => {
  const { movieTitle, starReview, comment } = props.review;
  return (
    <>
      <p>
        The movie that was reviewed was {movieTitle}. It was given a{" "}
        {starReview} star review. The comment that was made is the following:{" "}
        {comment}
      </p>
    </>
  );
};

export default MovieReviewComment;
