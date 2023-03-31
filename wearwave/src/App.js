import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
     <ChakraProvider>
        <div className="App">
          <Navbar/>
        </div>
     </ChakraProvider>
    
  );
}

export default App;
