import React from 'react';
import { Link } from 'react-router-dom';
import './Sideber1.css'

const Sideber2 = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link style={{textDecoration: 'none'}}to='/'>Manage Users</Link>
            </li>
           
                    <li>
                        <Link style={{textDecoration: 'none'}}to='/addService'>Manage Groups</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none'}}to='/delete'>Manage Roles</Link>
                    </li>
        </ul>
    </div>
    );
};

export default Sideber2;