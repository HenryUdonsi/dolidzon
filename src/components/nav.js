import './nav.css';
import logo from '../images/logo.svg';
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
        <header>
            <nav className='Nav'>
                <Link to="/">
                    <img src={logo} alt='logo' className='logo-img' />
                </Link>
                <ul className='Nav-content'>
                    <li className='Nav-links'>
                        <Link to="/contact" className='link'>Contact</Link>
                    </li>
                    <li>
                        <a className='Nav-links btn' href='./contact'>Have a project?</a>
                    </li>
                </ul>
            </nav>
        </header>

        <Outlet />
    </>
  )
};

export default Nav;