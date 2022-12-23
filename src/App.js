import Home from "./pages/home/Home";
import Navbar from "./component/navbar/Navbar";
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Payload from "./pages/payload/Payload";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/payload" element={<Payload />} />
      </Routes>

    </div>
  );
}

export default App;
