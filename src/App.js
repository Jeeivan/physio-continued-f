import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsePage from './pages/ResponsePage/ResponsePage';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PhysioForm from './pages/PhysioForm/PhysioForm';
import Exercise from './pages/Exercise/Exercise';
import Faq from './pages/Faq/Faq';
import Management from './pages/Management/Management';
// import Home from "./components/home";
import { Navigation } from "./components/navigation";
import { Logout } from "./components/logout";
import { Login } from "./components/login";
import Signup from "./components/signup";
import './App.css'

export default function App() {
  return (

    <main className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/form' element={<PhysioForm />} />
        <Route path='/response' element={<ResponsePage />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/management' element={<Management />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </main>
  );
}
