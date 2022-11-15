import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SeniorsPage from "./Components/SeniorsPage";
import VolunteerPage from "./Components/VolunteerPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/volunteers" element={ <VolunteerPage /> } />
          <Route path="/seniors" element={ <SeniorsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;