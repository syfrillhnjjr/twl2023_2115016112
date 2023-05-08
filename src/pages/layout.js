import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
                Syafrillah Najjar
            </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;