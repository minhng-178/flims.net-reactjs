import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Detail from "./components/Detail";
import DetailFlims from "./components/DetailFlims";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/detailflims/:id" element={<DetailFlims />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
