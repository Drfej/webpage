import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Component/Container';
import Header from './Component/Header';
import Contact from './Component/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Container />
    </div>
    
  );
}

export default App;
