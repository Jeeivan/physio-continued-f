import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/form'>Physio Form</Link>
            &nbsp; | &nbsp;
            <Link to='/response'>Response Page</Link>
            &nbsp; | &nbsp;
            <Link to='/exercise'>Exercises</Link>
            &nbsp; | &nbsp;
            <Link to='/faq'>FAQ</Link>
            &nbsp; | &nbsp;
        </nav>
      )
}