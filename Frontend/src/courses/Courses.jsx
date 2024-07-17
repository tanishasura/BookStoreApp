import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Course from '../components/Course';
import Contact from '../components/Contact';

export default function Courses() {
  return (
    <>
     <Navbar/> 
    <div className='min-h-screen'> <Course/> </div>
     <Footer/>
    </>
  );
}
