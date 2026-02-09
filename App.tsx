
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './pages/PublicLanding.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import AdminMenu from './pages/AdminMenu.tsx';
import AdminEditHome from './pages/AdminEditHome.tsx';
import AdminExperience from './pages/AdminExperience.tsx';
import AdminReviews from './pages/AdminReviews.tsx';
import AdminIdentity from './pages/AdminIdentity.tsx';
import AdminContact from './pages/AdminContact.tsx';
import AdminUsers from './pages/AdminUsers.tsx';

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