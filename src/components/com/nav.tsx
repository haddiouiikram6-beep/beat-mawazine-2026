import { Link } from "react-router-dom";

export const Nav = () => {
    return (
       
        <ul className= " flex gap-50 justify-center">
            <li  className="hover:text-pink-400"> 
                <Link  to="/Accueil">Accueil </Link>
            </li>
            <li  className="hover:text-pink-400">
                <Link to="/programme">Programme</Link>
            </li>
           
            <li className=" hover:text-pink-400">
             <Link to="/Mon Planning">Mon Planning</Link>
             </li>
            <li className=" hover:text-pink-400">
                <Link  to="/passeport">passeport</Link>
            </li>
        </ul>

    );
}