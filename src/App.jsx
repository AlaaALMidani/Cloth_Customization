<<<<<<< HEAD

import Canvas from './canvas/CanvasModel';
import Customizer from './pages/Customizer';
=======
// import Canvas from './canvas/CanvasModel';
// import Customizer from './pages/Customizer';
// import Home from './pages/Home';

// function App() {
//   return (
//     <main className="app transition-all ease-in">
//       <Home />
//       <Canvas />
//       <Customizer />
//     </main>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
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

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
