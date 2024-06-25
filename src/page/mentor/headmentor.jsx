import React, { useState } from 'react';
import './project.css';
import { useNavigate } from 'react-router-dom';

function Headmentor() {
    const navigate = useNavigate();
    const gotoHomepage = () => {
        navigate('/Homepage');
      }
    const [loggedInUser, setLoggedInUser] = useState('สุพรรษา มูลศิริ');

    return (
        <header className="header">
          <div className="header-left">
            <div className="hamburger-menu">
              <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="Menu" />
            </div>
            <img className='scg' src="/src/img/Siam_Cement_Group_Logo.svg.png" alt="SCG  Logo" onClick={gotoHomepage}/>
          </div>
          <div className="header-center">
            <div className="search-container">
              <img src="https://cdn-icons-png.flaticon.com/128/751/751463.png" className="search-icon" />
              <input className='search-' type="text" placeholder="Search" />
            </div>
          </div>
          <div className="mentor">
            <span>Scrum Master<br />{loggedInUser}</span>
            <img src="https://cdn-icons-png.flaticon.com/128/6048/6048462.png" alt="Mentor" className="mentor-img" />
          </div>
        </header>
    );
}

export default Headmentor;
