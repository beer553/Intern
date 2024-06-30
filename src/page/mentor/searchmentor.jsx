import React, { useState } from 'react';

function SearchComponent({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // ป้องกันการส่งฟอร์ม
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="search..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // เรียกใช้ handleKeyPress เมื่อกดปุ่ม
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                ค้นหา
            </button>
        </div>
    );
}

export default SearchComponent;
