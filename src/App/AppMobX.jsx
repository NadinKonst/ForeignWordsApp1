import "./App.scss";
import Header from "../сomponents/Header/Header";
import Footer from "../сomponents/Footer/Footer";
import WordList from "../сomponents/WordList/WordListMobX";
import WordCardSlider from "../сomponents/WordCardSlider/WordCardSliderMobX";
import Menu from "../сomponents/Menu/Menu";
import Page404 from "../сomponents/Page404/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WordContext } from "../context/Provider";
import { useContext } from "react";

export default function App() {
  const { words } = useContext(WordContext);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Menu />
        <div className="header-content">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<WordList words={words} />} />
          <Route path="slider" element={<WordCardSlider words={words} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
