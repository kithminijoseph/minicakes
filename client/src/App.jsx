import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Cake from './pages/Cake';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </Router>
  );
}

export default App;
