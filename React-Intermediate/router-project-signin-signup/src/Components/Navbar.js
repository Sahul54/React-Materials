import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = ({ isLoggIn, setIsLoggIn }) => {
  return (
    <div className='flex justify-evenly mt-4'>
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
      </Link>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex ml-4 mr-3 gap-3'>
        {!isLoggIn && <Link to="/login"><button>Login</button></Link>}
        {!isLoggIn && <Link to="/signup"><button>Signup</button></Link>}
        {isLoggIn && (
          <>
            <Link to="/">
              <button onClick={() => {
                setIsLoggIn(false);
                toast.success("Logged out");
              }}>Log out</button>
            </Link>
            <Link to="/dashboard"><button>Dashboard</button></Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
