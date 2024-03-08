import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
import RstrDetail from './pages/RstrDetailPage';
import RstrListPage from './pages/RstrListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rstr/detail" element={<RstrDetail />} />
          <Route path="/rstr" element={<RstrListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
