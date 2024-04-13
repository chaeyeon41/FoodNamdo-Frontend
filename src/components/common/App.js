import React from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RstrDetailPage from './pages/RstrDetailPage';
import RstrListPage from './pages/RstrListPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>푸드남도</title>
        {/* <meta name="description" content="설명" /> */}
        {/* <link rel="icon" type="image/png" href="%PUBLIC_URL%/logo.png" /> */}
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/rstr/1" element={<RstrDetailPage />} />
          <Route path="/rstr" element={<RstrListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
