import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";

import Review from "./Pages/Review";


function App() {
  return (
    <div className="App px-20 ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
