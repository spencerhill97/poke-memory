import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import WinningModal from "./components/WinningModal";
import { useGlobalContext } from "./context/GlobalContext";
import LosingModal from "./components/LosingModal";
import Footer from "./components/Footer";

function App() {
  const { isGameOver, isLevelUpdated } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Scoreboard />
      <Gameboard />
      <Footer />
      {!isLevelUpdated && <WinningModal />}
      {isGameOver && <LosingModal />}
    </main>
  );
}

export default App;
