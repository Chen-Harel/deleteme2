import React from 'react'
import { teachersList } from '../data/teachData'
import {Link} from 'react-router-dom'

const Teacher = () => {
  return (
    <div>
        <h1>Teacher List</h1>
        <ul>
        {teachersList().map(teach=><li>{teach.name} | {teach.class} | <Link to="#">Picture</Link></li>)}
        </ul>

    </div>
  )
}

export default Teacher