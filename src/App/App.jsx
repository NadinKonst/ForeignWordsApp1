import "./App.scss";
import Header from "../сomponents/Header/Header";
import Footer from "../сomponents/Footer/Footer";
import WordList from "../сomponents/WordList/WordList";
import WordCardSlider from "../сomponents/WordCardSlider/WordCardSlider";
import { words } from "../dataWords";
import Menu from "../сomponents/Menu/Menu";
import Page404 from "../сomponents/Page404/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
    <Menu/>
    <div className="header-content">
        <Header />
    </div>
    <Routes>
      <Route path="/" element={<WordList words={words} />}/>
      <Route path="slider" element={<WordCardSlider words={words} />}/>
      <Route path="*" element={<Page404 />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
