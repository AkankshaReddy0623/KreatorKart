import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Index from './pages/index';
import Campaigns from './pages/Campaigns';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:26:48
 * Main App component with routing and authentication configuration
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;