
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customizer from './pages/Customizer';

function App() {
  return (
    <Router>
      <main className="app transition-all ease-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customizer" element={<Customizer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
