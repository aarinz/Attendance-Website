
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/HomePage';
const Attendance = lazy(() => import('./Components/HomePage/Cards/Attendance'));
const Projects = lazy(() => import('./Components/HomePage/Cards/Projects'));
const Members = lazy(() => import('./Components/HomePage/Cards/Members'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginSignup />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/attendance"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Attendance />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/members"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Members />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
