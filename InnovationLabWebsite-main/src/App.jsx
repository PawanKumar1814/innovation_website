import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Facilities from './pages/facilities';
import LogRegistration from './pages/log_registration';
import TASchedule from './pages/ta_schedule';
import ExternalUserRegistration from './pages/external_user_register';
import Projects from './pages/projects';
import ReadMore from './pages/read_more';
import AdminConfig from './components/adminconfig';
import AdminLoginPage from './pages/admin_login_page';
import AdminDashboard from "./pages/admin_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/facilities" element={<Facilities />} /> 
        <Route path="/log_registration" element={<LogRegistration />} /> 
        <Route path="/ta_schedule" element={<TASchedule />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/read-more/:projectId" element={<ReadMore />} />
        <Route path="/external_user_register" element={<ExternalUserRegistration />} /> 
        <Route path="/adminconfig" element={<AdminConfig />} /> 
        <Route path="/admin_login_page" element={<AdminLoginPage />} /> 
        <Route path="/admin_page" element={<AdminDashboard />} />

        
      </Routes>
    </Router>
  );
}

export default App;
