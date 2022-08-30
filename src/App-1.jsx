import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ChallengeOneInstructions from "./components/ChallengeOneInstructions";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import EmployeeInformation from "./components/EmployeeInformation";

function App() {
  // this is a comment

  return (
    <div className="App">
      <Header />
      {/* <ChallengeOneInstructions /> */}
      {/* <AboutMe /> */}
      {/* 
      Ben - CEO
      Fav Food  - Pizza

      Josh - Senior Dev
      Fav Food - Chicken Salad
      */}
      <EmployeeInformation
        name="Ben Armstrong"
        city="Orlando"
        state="Florida"
        favoriteFood="Pizza"
        position="CEO"
      />
      <EmployeeInformation
        name="Josh Riddler"
        city="Orlando"
        state="Florida"
        favoriteFood="Chicken Salad"
        position="Senior Developer"
      />
      <Footer />
    </div>
  );
}

export default App;
