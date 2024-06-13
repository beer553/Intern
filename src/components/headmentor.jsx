import React, { useState } from 'react';
import './project.css';
import { useNavigate } from 'react-router-dom';

function Project1() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="project-container">
            <div className='menu-logo-container'>
                <button onClick={toggleMenu} className="menu-button"></button>
                <img className='logo-4' src="https://www.builk.com/th/wp-content/uploads/2019/05/scg-logo-n.jpg" alt="" />
                <input type="text" className="search-input" placeholder="Search..." />
                <div className="user-info">
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="User Image" className="user-image" />
                    <span className="username-2">Username</span>
                </div>
            </div>
            <nav className={`menu ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </nav>
        </div>
    );
}

export default Project1;
