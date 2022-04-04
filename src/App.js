import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Prices from "./Pages/Prices";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/prices" element={<Prices/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
