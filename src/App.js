import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>School</h1>
      <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/students">Students</Link> |{" "}
      <Link to="/teachers">Teachers</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
