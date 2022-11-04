import './App.css';
import Container from './Component/Container';
import Header from './Component/Header';
import Blinks from './Component/Blinks';
import Social from './Component/Social';

function App() {
  return (
    <div className="App">
      <Header />
      <Blinks />
      <Social />
      <Container />
    </div>
    
  );
}

export default App;
