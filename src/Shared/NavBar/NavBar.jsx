import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
const NavBar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  },[]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative')
    }
  }
  return (
  <>
  <div className={`w-full flex justify-center ${stickyClass}`}>
  <div className="navbar h-24 max-w-screen-xl animate-pulse fixed z-50 bg-gray-200 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link>Service</Link>
              <ul className="p-2">
              <li>
                  <Link to="/globalrecruitment" className='w-60'>Global Recruitment Services </Link>
                </li>
                <li className='w-60'>
                  <Link to="/immigrationVisa">Visa services & Immigration </Link>
                </li>
                <li className='w-60'>
                  <Link to="/airTicket">Air Ticket </Link>
                </li>
                <li className='w-72'>
                  <Link to="/outSourcing">Outsourcing payroll compliance services</Link>
                </li>
                <li className='w-60'>
                  <Link to="/sdcoverseas">Skill Development Center</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Industry We Serve</Link>
            </li>
            <li>
              <Link to="/countryWeServe">Countries We Serve</Link>
            </li>
            <li>
              <Link>Available Jobs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-full' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className='' tabIndex={0}>
            <details className=''>
              <summary className='text-orange-500 font-bold'>Service</summary>
              <ul className="p-2 ">
                <li>
                  <Link to="/globalrecruitment" className='w-60'>Global Recruitment Services </Link>
                </li>
                <li className='w-60'>
                  <Link to="/immigrationVisa">Visa services & Immigration</Link>
                </li>
                <li className='w-60'>
                  <Link to="/airTicket">Air Ticket </Link>
                </li>
                <li className='w-72'>
                  <Link to="/outSourcing">Outsourcing payroll compliance services</Link>
                </li>
                <li className='w-60'>
                  <Link to="/sdcoverseas">Skill Development Center</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
              <Link>Industry We Serve</Link>
            </li>
            <li>
              <Link to="/countryWeServe">Countries We Serve</Link>
            </li>
            <li>
              <Link>Available Jobs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn btn-warning">Get Start</a>
      </div> */}
    </div>
  </div>
  
  </>
  );
};

export default NavBar;
