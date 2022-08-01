import './App.css';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Product from './pages/product';

function App() {
  return (
    <Container>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default App;
