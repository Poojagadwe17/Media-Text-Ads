import React from 'react';
import { createRoot } from 'react-dom';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAdPage from './components/CreateAdPage';
import Dashboard from './components/Dashboard';
import TextAdForm from './components/TextAdForm';
import MediaAdForm from './components/MediaAdForm';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ad" element={<CreateAdPage />} />
          <Route path="/text-ad-form" element={<TextAdForm />} />
          <Route path="/media-ad-form" element={<MediaAdForm />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
