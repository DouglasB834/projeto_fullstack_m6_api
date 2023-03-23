import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import viteLogo from '/vite.svg'
import "./App.css";
import { MainRouter } from "./Routes";
import { ContextUserProvider } from "./contexts/contextUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChakraProvider>
        <ContextUserProvider>
          <MainRouter />
        </ContextUserProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
