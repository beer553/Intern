import React, { useEffect, useState } from 'react';
import './welcome.css';
import { useNavigate } from 'react-router-dom';

function Welcome2() {
    const [timeLeft, setTimeLeft] = useState({});
    const targetDate = new Date(localStorage.getItem('checkInDateTime')).getTime();
    const navigate = useNavigate();

    const message = "OT Dashboard ";

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const handleEditDateTime = () => {
        navigate('/welcome');
    };


    return (
        <div className="container">
            <div className='head'>
                <div className='back'>
                    <img src="https://www.builk.com/th/wp-content/uploads/2019/05/scg-logo-n.jpg" alt="" className='logo-3' />
                </div>
                <div className='me'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="" className='me' />
                    <p className='myname'>My name</p>
                </div>
            </div>
            <div className='navbar'>
                <ul className='ul'>
                    <li><a href="">หน้าหลัก</a></li>
                    <li><a href="">สมัครฝึกงาน/สหกิจ</a></li>
                    <li><a href="">แก้ไขข้อมูลส่วนตัว</a></li>
                    <li><a href="">ออกจากระบบ</a></li>
                </ul>
            </div>
            <div className="countdown-container">
                <div className="edit-button-container">
                    <button className="edit-button" onClick={handleEditDateTime}>
                        <img src="https://cdn-icons-png.flaticon.com/128/15733/15733828.png" alt="Edit Icon" className="edit-icon" /> 
                    </button>
                    <div><p>แก้ไขวันที่เวลาและเวลาเข้าพัก</p></div>
                </div>
                <div className='countdown-head'><h2 >Welcome <br />พบกันในอีก</h2></div>
                <div className="countdown">
                    <div className="time-section">
                        <p className="time">{timeLeft.days}</p>
                        <p className="label-3">วัน</p>
                    </div>
                    <div className="time-section">
                        <p className="time">{timeLeft.hours}</p>
                        <p className="label-3">ชั่วโมง</p>
                    </div>
                    <div className="time-section">
                        <p className="time">{timeLeft.minutes}</p>
                        <p className="label-3">นาที</p>
                    </div>
                    <div className="time-section">
                        <p className="time">{timeLeft.seconds}</p>
                        <p className="label-3">วินาที</p>
                    </div>
                </div>
            </div>
            <div className='countdown-head'><h3> โปรเจคที่คาดว่าจะได้รับ</h3></div>
            <div className='project'><button className='project-1' onClick={() => navigate('/welcome3')}>Project</button></div>
            <div className="message-container">
                <p className="message-project">{message}</p>
            </div>
            <div className="diamond-container">
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
            </div>
            <div className='footnotee'>
                <p>ติดต่อสอบถาม New Way Of Work System</p>
                <p>คุณสุพรรษา ม. supansak@scg.com</p>
                <p>Digital Transformation Architect (Data Driven-TS)</p>
                <p>Created by Sunsa M and Pantakit S & Developed by Supanut K</p>
                <p>©SCG 2024</p>
            </div>
        </div>
    );
}

export default Welcome2;
