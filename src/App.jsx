import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PresidentVoting from "./components/voting/PresidentVoting";
import ChallengeTwoInstructions from "./components/ChallengeTwoInstructions";
import MovieReview from "./components/movieReview/MovieReview";

function App() {
  // this is a comment

  return (
    <div className="App">
      <Header />
      <PresidentVoting />
      <ChallengeTwoInstructions />
      <MovieReview />
      <Footer />
    </div>
  );
}

export default App;
