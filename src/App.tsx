import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import PokemonCardList from "./components/PokemonCardList";
import PokemonDetailPage from "./components/PokemonDetailPage";

function App() {
  return (
    <div>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<PokemonCardList />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        </Routes>
      </Body>
    </div>
  );
}

export default App;
