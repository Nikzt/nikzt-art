import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommissionsPage from './Pages/CommissionsPage';
import GalleryPage from './Pages/GalleryPage';
import HomePage from './Pages/HomePage';
import './index.css/app.css'
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/commissions">
            <CommissionsPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
