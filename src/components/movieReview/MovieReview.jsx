import MovieReviewComment from "./MovieReviewComment";

const MovieReview = (props) => {
  const movieReviewArray = [
    {
      movieTitle: "Top Gun 2",
      starReview: 5,
      comment: "This movie was really good! I love Tom Cruse!",
    },
    {
      movieTitle: "Batman",
      starReview: 1,
      comment: "Movie was kind of old and dated",
    },

    {
      movieTitle: "Lion King",
      starReview: 5,
      comment: "I know Simba's dad died but movie was pretty good",
    },
  ];
  return (
    <>
      <h2>Hello from Movie Review</h2>
      {/* <MovieReviewComment review={movieReviewArray[0]} />
      <MovieReviewComment review={movieReviewArray[1]} />
      <MovieReviewComment review={movieReviewArray[2]} /> */}

      {movieReviewArray.map((review, index) => (
        <MovieReviewComment key={index} review={review} />
      ))}
    </>
  );
};

export default MovieReview;
