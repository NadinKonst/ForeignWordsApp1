import "./App.css";
import Header from "./сomponents/Header";
import Footer from "./сomponents/Footer";
import WordCard from "./сomponents/WordCard";

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
      <Footer />
    </div>
  );
}
