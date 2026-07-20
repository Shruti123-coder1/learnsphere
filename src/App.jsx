﻿import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseDetailsModal from "./components/CourseDetailsModal";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MyLearning from "./pages/MyLearning";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home onViewDetails={setSelectedCourse} />}
          />

          <Route
            path="/explore"
            element={<Explore onViewDetails={setSelectedCourse} />}
          />

          <Route
            path="/mylearning"
            element={<MyLearning onViewDetails={setSelectedCourse} />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </main>

      <Footer />

      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}

export default App;