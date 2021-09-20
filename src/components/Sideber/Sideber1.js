import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaRegHeart, FaRegQuestionCircle, FaWrench } from "react-icons/fa";
import './Sideber1.css'


const Sideber1 = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link style={{textDecoration: 'none'}}to='/'><span ><FaUsers />Admin</span></Link>
                </li>
                <li>
                    <Link  style={{textDecoration: 'none'}}to='/'> <FaRegHeart/>Products</Link>
                </li>
               
                        <li>
                            <Link  style={{textDecoration: 'none'}}to=''><FaRegQuestionCircle/>Settings</Link>
                        </li>
                        <li>
                            <Link  style={{textDecoration: 'none'}} to='/'><FaWrench/>Helps</Link>
                        </li>
            </ul>
        </div>
    );
};

export default Sideber1;