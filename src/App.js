import './App.css';
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ProtectedRoutes from './pages/ProtectedRoutes';
import AdminDashboard from './pages/admin/AdminDashboard';
import Catogary from './pages/admin/Catogary';
import Product from './pages/admin/Product';

import AdminProtectedRoutes from './pages/AdminProtectedRoutes';
import User from './pages/admin/User';
import CartPage from './pages/CartPage';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<ProtectedRoutes><About /></ProtectedRoutes>} />
        <Route path="/contact" element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
        <Route path="/policy" element={<ProtectedRoutes><Policy /></ProtectedRoutes>} />
        <Route path='/dashboard' element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>} />
        <Route path='/catogary' element={<ProtectedRoutes><Catogary /></ProtectedRoutes>} />
        <Route path='/product' element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
        <Route path='/cart' element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path='/user' element={<ProtectedRoutes><User /></ProtectedRoutes>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>

  );
}

export default App;
