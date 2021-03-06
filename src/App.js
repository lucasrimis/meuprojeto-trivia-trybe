import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="container-fluid vh-100 align-items-center">
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" component={ Settings } />
      <Route path="/game" component={ Game } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />
    </div>
  );
}
