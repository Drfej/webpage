import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Container from './Component/Container';
import Header from './Component/Header'
import Blinks from './Component/Blinks';
import Social from './Component/Social';
import Contact from './Component/Contact';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Blinks />
        <Social />
        <Container />
        <Routes>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
