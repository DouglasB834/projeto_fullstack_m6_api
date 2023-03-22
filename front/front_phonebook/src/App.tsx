import { useState } from "react";
// import viteLogo from '/vite.svg'
import "./App.css";
import { MainRouter } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
