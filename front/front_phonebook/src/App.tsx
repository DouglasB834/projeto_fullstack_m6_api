import { ChakraProvider } from "@chakra-ui/react";
// import viteLogo from '/vite.svg'
import "./App.css";
import { MainRouter } from "./Routes";
import { ContextUserProvider } from "./contexts/contextUser";

function App() {
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
