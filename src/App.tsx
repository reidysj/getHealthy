import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

//Page imports
import Homepage from './pages/Homepage'
import Signup from './pages/Signup';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Homepage />
        <Signup />
      </div>
    </ChakraProvider>
  );
}

export default App;
