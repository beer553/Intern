import React, { useState } from 'react';
import './assignproject.css';
import { useNavigate } from 'react-router-dom';
import Headmentor from './headmentor';

function assignproject() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const [profileData, setProfileData] = useState({
        profileImage: 'https://mpics.mgronline.com/pics/Images/566000011666302.JPEG', 
        nickname: 'น้องไนซ์',
        fullName: 'ดร.น้องไนซ์', 
        school: 'มหาวิทยาลัยดาวลงกร',
    });

 
    const handleProfileEdit = () => {
        
    };

    return (
        <>
            <Headmentor />
            <div className="assign-project-container">
                <div className="headeradd">
                    <div className='back-button-2'><button className='back-button-3' onClick={handleBack}><img className='back-button-3' src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" /></button></div>
                    <div className='assignpro'><h1 className='p3' >มอบหมายผู้รับผิดชอบ</h1></div>
                </div>
                <div className="addprofile">
                    <div className="profile-container">
                    <img src={profileData.profileImage} alt="Profile" className="profile-image" />
                        <div className="profile-details">
                            <div className='addproject-profile'>
                                <p className='nickname-profile'> {profileData.nickname}</p>
                                <button className='watchprofile-1' onClick={handleProfileEdit}><img className='watchprofile' src="https://cdn-icons-png.flaticon.com/128/2997/2997954.png" alt="" /></button>
                                <input type="checkbox" id="check" name="check" />
                            </div>
                            <p>ชื่อ - นามสกุล : {profileData.fullName}</p>
                            <p>สถานศึกษา : {profileData.school}</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}

export default assignproject;