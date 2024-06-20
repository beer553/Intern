import React, { useState } from 'react';
import './assignproject.css';
import Headmentor from './headmentor';
import { useNavigate, useLocation } from 'react-router-dom';

function AssignProject() {
    const navigate = useNavigate();
    const location = useLocation();
    const project = location.state.project;

    const handleSelectUser = () => {
        // เก็บข้อมูลโปรไฟล์ที่เลือกใน state
        const selectedProfiles = profiles.filter(profile => {
            const checkbox = document.getElementById(`profile-${profile.id}`);
            return checkbox && checkbox.checked;
        });
    
        // ส่งข้อมูลที่ต้องการไปยังหน้า /project
        navigate('/project', { state: { ...location.state, selectedProfiles } });
    };
    
    const handleBack = () => {
        navigate(-1);
    };

    const profiles = [
        { id: 3, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/434044043_920899162962057_7924796063787313870_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8eoj0twKaw5DvsoW0W3JFhdJ7wsHR9j6F0nvCwdH2PvUErRxliUXFtCXA7y7Hv2-j1QbSPtA4ahRMqiMlxBXA&_nc_ohc=Xys6tSDgz4kQ7kNvgF-6rC0&_nc_ht=scontent.furt1-1.fna&oh=00_AYCcsGQwVENWvWhA64sknI24N4onmu48u7r__LPQvnzazg&oe=66708B0F', nickname: 'น้องซัน', fullName: 'นายภูริทร์ ชัยฤทธิ์', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 1, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/288216849_534827318235912_4852723493314106390_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEB0vRP_Xymq5DzoznKibzkqXN6WOMK4_Gpc3pY4wrj8fQbCIIz82R9w6RTxv93lf9Sk21oqz2yvs6THizNTmmm&_nc_ohc=a5R7t1WJy5kQ7kNvgFUfG0D&_nc_ht=scontent.furt1-1.fna&oh=00_AYDU2cuSA8zgO2vmEfZghnci1m_jeppieS8zrqRlxODfpQ&oe=66708EA5', nickname: 'น้องแดน', fullName: 'นายธีรภัทร วั่นเล่ง', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 2, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'น้องการ์ฟิว', fullName: 'นายธนภัทร รัตนสุคนธ์', school: 'วิทยาลัยเทนิคทุ่งสง' },
        { id: 4, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 5, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 6, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 7, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 8, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 9, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 10, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        { id: 11, profileImage: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/419770044_1424527298420555_3849569547122236407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH4oWIDszTud-zV5dBzNT0oKJd6mNPF1HIol3qY08XUcrG19G2_nlU44RzENYkTFWASPWJniSTfaz31gwpm2lO_&_nc_ohc=6g1w1iHXscUQ7kNvgEbW45U&_nc_ht=scontent.furt1-1.fna&oh=00_AYABakjKRaDoPkStPYGrTSkWFHbL9Y2_uq7PcDU0yrtZ_w&oe=66702D55', nickname: 'โพก้า', fullName: 'ดร.โพก้า', school: 'มหาวิทยาลัยมหิดล' },
        
    ];


    

    return (
        <>
            <Headmentor />
            <div className="assign-project-container">
                <div className="headeradd">
                    <div className='back-button-2'>
                        <button className='back-button-3' onClick={handleBack}>
                            <img className='back-button-3' src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
                        </button>
                    </div>
                    <div className='assignpro'>
                        <h1 className='p3'>Select Team Davelop for Project {project.projectName}</h1>
                    </div>
                </div>
                <div className="addprofile">
                    {profiles.map(profile => (
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
                    ))}
                </div>

                <div className='confimeintren'>
                    <button className='button-2' onClick={handleSelectUser}>ยืนยัน</button>
                </div>
                {/* <div className="selected-profiles-1">
                    <h2>โปรไฟล์ที่เลือก</h2>
                    <ul className='choose-Intern'>
                        {selectedProfiles.map(id => (
                            <li key={id} className='choose-Intern-1'>
                                {profiles.find(profile => profile.id === id)?.nickname} - {profiles.find(profile => profile.id === id)?.fullName}
                            </li>
                        ))}
                    </ul>
                </div> */}
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
