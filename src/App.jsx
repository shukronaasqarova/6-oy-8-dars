import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Details from './Pages/Details';
import ErrorPage from './Pages/ErrorPage';
import Register from './Pages/Register';
import Login from './Pages/Login';

export default function App() {
    return (
        <div>
            <header className="bg-white shadow-md py-4">
                <nav className="flex justify-center gap-8">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition duration-200">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium transition duration-200">About</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition duration-200">Contact</Link>
                    <Link to="/register" className="text-gray-700 hover:text-gray-900 font-medium transition duration-200">Register</Link>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details" element={<Details />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}
