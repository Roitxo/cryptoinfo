import './App.css';
import {Link, Routes, Route} from 'react-router-dom'

// Pages
import IndexPage from './pages/indexPage';
import CryptoPage from './pages/crypto';
import NavTopbar from './components/navigation/navTopbar';

function App() {
  return (
    <>
      <NavTopbar />
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/:slug" element={<CryptoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
