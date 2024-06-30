import React, { useState } from 'react';
import './assignproject.css';
import Headmentor1 from './headassignpro';
import { useNavigate, useLocation } from 'react-router-dom';

function AssignProject() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const project = location.state.project;

    const handleSelectUser = () => {
        const selectedProfiles = (searchResults.length > 0 ? searchResults : profiles).filter(profile => {
            const checkbox = document.getElementById(`profile-${profile.id}`);
            return checkbox && checkbox.checked;
        });

        navigate('/project', { state: { ...location.state, selectedProfiles } });
    };

    const handleBack = () => {
        navigate(-1);
    };

    const profiles = [
        { id: 1, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/434044043_920899162962057_7924796063787313870_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=INqmy2FVwjAQ7kNvgGkqk3a&_nc_ht=scontent.furt1-1.fna&oh=00_AYBMFGYiodffcUDYAbqqGrux4NA7BOqLawwAcECkPbgqUw&oe=6684518F', nickname: 'น้องซัน', fullName: 'นายภูริทร์ ชัยฤทธิ์', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 2, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/288216849_534827318235912_4852723493314106390_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=FO3cns717rkQ7kNvgFlYPG3&_nc_ht=scontent.furt1-1.fna&oh=00_AYAYi2Q-G_fPq9gqh0kJ2X99insLXY3S6G6DrcoQMwMU9g&oe=66845525', nickname: 'น้องแดน', fullName: 'นายธีรภัทร วั่นเล่ง', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 3, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8wS1ARgZPGIQ7kNvgHv3DpX&_nc_ht=scontent.furt1-1.fna&oh=00_AYCtQ4sUXXEpWdSz31Kc3SJIEHPo9HqanU6ywAw8HSmuHg&oe=66842C15', nickname: 'น้องการ์ฟิว', fullName: 'นายธนภัทร รัตนสุคนธ์', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 4, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องกุ้ง', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 5, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องปลา', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 6, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องปู', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 7, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องหมึก', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 8, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องหอย', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 9, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องฉลาม', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 10, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องม้าน้ำ', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 11, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องสิงโตทะเล', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 12, profileImage: 'https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png', nickname: 'น้องปะกาลัง', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 13, profileImage: '/src/img/9ad34271-4231-4579-b713-cae5f88455cc.jpg', nickname: 'น้องซันนี่', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
    ];

    const displayedProfiles = searchResults.length > 0 ? searchResults : profiles;

    return (
        <>
            <Headmentor1 profiles={profiles} onSearchResults={setSearchResults} />
            <div className="assign-project-container">
                <div className="headeradd">
                    <div className='back-button-2'>
                        <button className='back-button-3' onClick={handleBack}>
                            <img className='back-button-3' src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
                        </button>
                    </div>
                    <div className='assignpro'>
                        <h1 className='p3'>Select Team Develop for Project {project.projectName}</h1>
                    </div>
                </div>
                <div className='confimeintren'>
                    <button className='button-2' onClick={handleSelectUser}>ยืนยัน</button>
                </div>
                <div className="addprofile">
                    {displayedProfiles.length > 0 ? (
                        displayedProfiles.map(profile => (
                            <div key={profile.id} className="profile-container">
                                <img src={profile.profileImage} alt="Profile" className="profile-image" />
                                <div className="profile-details">
                                    <div className='addproject-profile'>
                                        <p className='nickname-profile'>{profile.nickname}</p>
                                        <button className='watchprofile-1' onClick={() => handleProfileEdit(profile.id)}>
                                            <img className='watchprofile' src="https://cdn-icons-png.flaticon.com/128/2997/2997954.png" alt="View Profile" />
                                        </button>
                                        <input
                                            type="checkbox"
                                            id={`profile-${profile.id}`}
                                            name={`profile-${profile.id}`}
                                        />
                                    </div>
                                    <p>ชื่อ - นามสกุล: {profile.fullName}</p>
                                    <p>สถานศึกษา: {profile.school}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>ไม่มีชื่อนี้</p>
                    )}
                </div>
            </div>
            <div className='footnote'>
                <p>ติดต่อสอบถาม New Way Of Work System</p>
                <p>คุณสุพรรษา ม. supansak@scg.com</p>
                <p>Digital Transformation Architect (Data Driven-TS)</p>
                <p>Created by Sunsa M and Pantakit S & Developed by Supanut K</p>
                <p className='p-1'>©SCG 2024</p>
            </div>
        </>
    );
}

export default AssignProject;
