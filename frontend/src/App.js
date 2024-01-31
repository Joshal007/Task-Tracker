import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/Header';
import About from './components/page/About';
import Tasks from './components/task/ViewTask';
import AddTask from './components/task/AddTask';
import UpdateTask from './components/task/UpdateTask';
import Login from './components/auth/Login';
import Register1 from './components/auth/Register1';
import Logout from './components/auth/Logout';
import Landing from './components/page/Landing';
import NotFound from './components/page/NotFound';

import './bootstrap.min.css';
import './App.css';

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('token') !== null){
      setIsAuthenticated(true);
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Landing isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signin" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Register1 isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signout" element={<Logout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/todo" element={<Tasks isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/add" element={<AddTask isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/update/:id" element={<UpdateTask isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

