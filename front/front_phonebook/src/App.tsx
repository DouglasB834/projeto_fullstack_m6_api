import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { MainRouter } from "./Routes";
import { ContextRequestUserProvider } from "./contexts/contextRequestUser";
import { DataProvider } from "./contexts/ContextData";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ContextRequestUserProvider>
          <DataProvider>
            <MainRouter />
          </DataProvider>
        </ContextRequestUserProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
