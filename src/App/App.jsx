import "./App.scss";
import Header from "../сomponents/Header/Header";
import Footer from "../сomponents/Footer/Footer";
import WordCard from "../сomponents/WordCard/WordCard";
import WordList from "../сomponents/WordList/WordList";
import { words } from "../dataWords";

export default function App() {
  return (
    <div className="wrapper">
      <div className="header-content">
        <Header />
      </div>
      <WordCard
        word="hello"
        transcription="[həˈləʊ]"
        translation="привет"
        theme="приветствие"
      />
      <WordList words={words} />
      <Footer />
    </div>
  );
}
