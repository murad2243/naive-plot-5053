import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/AllRoutes"
function App() {
  return (

    <BrowserRouter>
    <ChakraProvider>
        <div className="App">
          <Navbar/>
          <AllRoutes/>
        </div>
     </ChakraProvider>
    </BrowserRouter>

     
    
  );
}

export default App;
