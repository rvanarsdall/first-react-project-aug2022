import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/loginExample/Login";
import Signup from "./components/loginExample/Signup";

function App() {
  // this is a comment

  const [showLogin, setShowLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function toggleLogin() {
    setShowLogin(!showLogin);
  }

  return (
    <div className="App">
      <Header />
      {showLogin ? (
        <Login
          toggleLogin={toggleLogin}
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
        />
      ) : (
        <Signup
          toggleLogin={toggleLogin}
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
        />
      )}

      <button onClick={toggleLogin}>Parent App.jsx Button</button>

      <Footer />
    </div>
  );
}

export default App;
