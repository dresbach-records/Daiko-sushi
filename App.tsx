
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './pages/PublicLanding';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminMenu from './pages/AdminMenu';
import AdminEditHome from './pages/AdminEditHome';
import AdminExperience from './pages/AdminExperience';
import AdminReviews from './pages/AdminReviews';
import AdminIdentity from './pages/AdminIdentity';
import AdminContact from './pages/AdminContact';
import AdminUsers from './pages/AdminUsers';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HashRouter>
      <Routes>
        {/* Público */}
        <Route path="/" element={<PublicLanding />} />
        <Route path="/login" element={<AdminLogin onLogin={() => setIsAuthenticated(true)} />} />

        {/* Admin (Protegido Simulado) */}
        <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/menu" element={isAuthenticated ? <AdminMenu /> : <Navigate to="/login" />} />
        <Route path="/admin/home" element={isAuthenticated ? <AdminEditHome /> : <Navigate to="/login" />} />
        <Route path="/admin/experience" element={isAuthenticated ? <AdminExperience /> : <Navigate to="/login" />} />
        <Route path="/admin/reviews" element={isAuthenticated ? <AdminReviews /> : <Navigate to="/login" />} />
        <Route path="/admin/identity" element={isAuthenticated ? <AdminIdentity /> : <Navigate to="/login" />} />
        <Route path="/admin/contact" element={isAuthenticated ? <AdminContact /> : <Navigate to="/login" />} />
        <Route path="/admin/users" element={isAuthenticated ? <AdminUsers /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
