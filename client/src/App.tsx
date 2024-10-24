import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RepoDetailPage from './pages/RepoDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:repoName" element={<RepoDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
