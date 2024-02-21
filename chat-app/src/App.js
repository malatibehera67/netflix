import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import './App.css';
import Router from './router';

function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
