import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentCreates from './pages/students/StudentCreates';
import AllStudent from './pages/students/AllStudent';
import Signup from './pages/auth/Signup';
import StudentDetailes from './pages/students/StudentsDetailes';
import AttendedStudents from './pages/students/AttendedStudents';
import NavBar from './component/NavBar';
import NotShow from './component/NotShow';
import Login from './pages/auth/Login';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './component/PrivateRoute';
import NotFound from './component/NotFound';


function App() {
  return (
      <Router>
        <NotShow>
          <NavBar />
        </NotShow>
        {/* Define your Routes */}
        <Routes>
          {/* Protected Routes */}
          <Route path="/private" element={<PrivateRoute />}>
            <Route path="allstudent" element={<StudentDetailes title="Student Details" />}  />
            <Route path="student/create" element={<StudentCreates title="Student Create" />} />
            <Route path="student/attendence" element={<AllStudent title="All Student" />} />
            <Route path="student/attendencedetailes" element={<AttendedStudents title="Student Attendance" />} />
          </Route>
          {/* Public Routes */}
          <Route path='/' element={<LandingPage />} />
          <Route path="/signup" element={<Signup title="Signup" />} />
          <Route path="/login" element={<Login title="Login" />} />
          <Route path='*' element={<NotFound title="Page Not Found"/>} />
        </Routes>
      </Router>
  );
}

export default App;
