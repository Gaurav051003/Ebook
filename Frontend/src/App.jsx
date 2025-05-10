import React, { useEffect, useState } from 'react';
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Courses from "./courses/Courses";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
