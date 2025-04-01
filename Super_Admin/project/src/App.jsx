import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Hospitals from './pages/Hospitals';
import { HospitalProvider } from './context/HospitalContext';
import { Menu } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <HospitalProvider>
        <div className="flex min-h-screen bg-gray-50">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-emerald-500 text-white"
          >
            <Menu size={24} />
          </button>

          {/* Sidebar */}
          <div className={`
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 fixed lg:relative z-40 transition-transform duration-300
          `}>
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>

          {/* Main content */}
          <main className="flex-1 lg:ml-64">
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/hospitals" element={<Hospitals />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </HospitalProvider>
    </Router>
  );
}

export default App;