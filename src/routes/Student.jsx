import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { studentsList } from '../data/stuData';
const Student = () => {
  const students=studentsList()
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {students.map(stu=><li>{stu.name} | {stu.age} | <Link to="studentImage">Picture</Link></li>)} 
            {/* <li>Student 1 <Link to="student1image">Picture</Link></li>
            <li>Student 2 <Link to="#">Picture</Link></li>
            <li>Student 3 <Link to="#">Picture</Link></li> */}
        </ul>
        <Outlet />
    </div>
  )
}

export default Student