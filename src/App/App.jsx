import "./App.scss";
import Header from "../сomponents/Header/Header";
import Footer from "../сomponents/Footer/Footer";
import WordList from "../сomponents/WordList/WordList";
import WordCardSlider from "../сomponents/WordCardSlider/WordCardSlider";
import { words } from "../dataWords";

export default function App() {
  return (
    <div className="wrapper">
      <div className="header-content">
        <Header />
      </div>
      <WordCardSlider words={words} />
      <WordList words={words} />
      <Footer />
    </div>
  );
}
