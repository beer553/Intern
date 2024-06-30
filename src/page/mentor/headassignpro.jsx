import React, { useState } from 'react';
import './project.css';
import { useNavigate } from 'react-router-dom';
import SearchComponent from './searchmentor';

function Headmentor1({ profiles, onSearchResults }) {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState('สุพรรษา มูลศิริ');

    const handleSearch = (query) => {
        const results = profiles.filter((profile) =>
            profile.nickname.toLowerCase().includes(query.toLowerCase())
        );
        onSearchResults(results);
    };

    const gotoHomepage = () => {
        navigate('/Homepage');
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="hamburger-menu">
                    <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="Menu" />
                </div>
                <img className='scg' src="/src/img/Siam_Cement_Group_Logo.svg.png" alt="SCG Logo" onClick={gotoHomepage} />
            </div>
            <div className="header-center">
                <SearchComponent onSearch={handleSearch} />
            </div>
            <div className="mentor">
                <span>Scrum Master<br />{loggedInUser}</span>
                <img src="https://cdn-icons-png.flaticon.com/128/6048/6048462.png" alt="Mentor" className="mentor-img" />
            </div>
        </header>
    );
}

export default Headmentor1;
