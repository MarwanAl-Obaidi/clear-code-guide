import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home/home';
import NavBar from './components/navBar/navBar';
import ReactJs from './views/reactJs/reactJsMain/reactJsMain';
import ReactRouter from './views/reactJs/reactRouter/reactRouter';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<p>Page not found</p>} />
        <Route path="/React-JS" element={<ReactJs />} />
        <Route path="/React-JS/react-router" element={<ReactRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
