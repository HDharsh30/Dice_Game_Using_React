import { useState } from "react";
import SartGame from "./components/startgame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  const toggleGamePlay=()=>{
    setIsGameStarted((prev) => !prev);
  };

  return(
    <div>
      {
        isGameStarted? <GamePlay /> : <SartGame toggle={toggleGamePlay} />

      }
    </div>
  );
}

export default App
