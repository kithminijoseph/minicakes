import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
		<div>
      <Navbar />
			<Home />
      <Router>
        <Routes>
        <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
