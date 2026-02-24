import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import DriverDashboard from './components/DriverDashboard';
import ClientBooking from './components/ClientBooking';
import DriverLogin from './components/DriverLogin';
import DriverRegister from './components/DriverRegister';
import PendingApproval from './components/PendingApproval';
import AdminDashboard from './components/AdminDashboard';
import RideStatus from './components/RideStatus';

function App() {
  const { user, role, approved, booting } = useAuth();

  if (booting) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Starting CabConnect…
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900">
      <Routes>
        {/* Public passenger booking page */}
        <Route path="/" element={<ClientBooking />} />

        {/* Ride status — public, no auth required */}
        <Route path="/ride/:requestId" element={<RideStatus />} />

        {/* Driver login — redirect if already authenticated */}
        <Route
          path="/driver/login"
          element={
            user && role === 'admin'
              ? <Navigate to="/admin" replace />
              : user && role === 'driver' && approved === false
                ? <Navigate to="/pending" replace />
                : user && role === 'driver'
                  ? <Navigate to="/driver" replace />
                  : <DriverLogin />
          }
        />

        {/* Driver registration — redirect logged-in users */}
        <Route
          path="/driver/register"
          element={user ? <Navigate to="/" replace /> : <DriverRegister />}
        />

        {/* Driver dashboard — requires auth + driver role + approved */}
        <Route
          path="/driver"
          element={
            !user
              ? <Navigate to="/driver/login" replace />
              : role !== 'driver'
                ? <Navigate to="/" replace />
                : approved === false
                  ? <Navigate to="/pending" replace />
                  : <DriverDashboard />
          }
        />

        {/* Pending approval screen */}
        <Route
          path="/pending"
          element={
            !user
              ? <Navigate to="/driver/login" replace />
              : approved !== false
                ? <Navigate to="/" replace />
                : <PendingApproval />
          }
        />

        {/* Admin dashboard — requires auth + admin role */}
        <Route
          path="/admin"
          element={
            !user
              ? <Navigate to="/driver/login" replace />
              : role !== 'admin'
                ? <Navigate to="/" replace />
                : <AdminDashboard />
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
