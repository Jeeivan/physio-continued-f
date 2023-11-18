import { Link } from "react-router-dom"
import '../../css/Navbar.css'

export default function NavBar() {
    return (
        <div className="NavBar">
            <h1>WaitLessWellness</h1>
        <nav>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/form'>Physio Form</Link>
            &nbsp; | &nbsp;
            <Link to='/response'>Response Page</Link>
            &nbsp; | &nbsp;
            <Link to='/exercise'>Exercises</Link>
            &nbsp; | &nbsp;
            <Link to='/Management'>Management</Link>
            &nbsp; | &nbsp;
            <Link to='/faq'>FAQ</Link>
            &nbsp; | &nbsp;
        </nav>
        </div>
      )
}