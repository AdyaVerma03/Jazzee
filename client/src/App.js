import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Employers from './pages/Employers';
import Universities from './pages/Universities';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/universities" element={<Universities />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;