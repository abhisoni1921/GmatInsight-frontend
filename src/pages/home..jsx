import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import GMATCourseFeatures from '../components/gmatcoursesfeature';
import Reviews from '../components/reviews';
import GMATInterface from '../components/gmatInterface';
import Footer from '../components/footer';
import CoursesSection from '../components/courses';
import Stats from '../components/stats';
import FoundersComponent from '../components/founders';





// Demo Component with dummy content
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <GMATCourseFeatures/>

      {/* Reviews */}
      <Reviews/>

      {/* Gmat Interface */}
      <GMATInterface/>

      {/* stats  */}
      <Stats/>

      {/* Courses Section */}
      <CoursesSection/>
      

      {/* founders Section */}
      <FoundersComponent/>
      

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;