import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './routes/Student';
import StudentImage from './routes/StudentImage';
import Teacher from './routes/Teacher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>

      <Route path="students" element={<Student />}>
        <Route path="studentimage" element={<StudentImage />} />
      </Route>
      <Route path="teachers" element={<Teacher />} />

    </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

