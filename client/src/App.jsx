// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
		<div>
      <Navbar />
			<Home />
      <Router>
        <Routes>
        <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
