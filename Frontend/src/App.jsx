import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
        </div>
    </>
  );
}
