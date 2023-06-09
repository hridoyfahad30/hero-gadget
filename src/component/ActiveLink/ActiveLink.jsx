import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;