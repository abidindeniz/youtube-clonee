import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';


function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
   </Router>
  );
}

export default App;
