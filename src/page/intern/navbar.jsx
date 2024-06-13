import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
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
                    <li><a href="/apply">สมัครฝึกงาน/สหกิจ</a></li>
                    <li><a href="">แก้ไขข้อมูลส่วนตัว</a></li>
                    <li><a href="">ออกจากระบบ</a></li>
                </ul>
            <div className='ma-1'></div>
            <div className='ma'></div>
            <div className='ma'></div>
            <div className='ma'></div>
            <div className='ma'></div>
            <div className='ma'></div>
            <div className='manubar'>
                <div className='manu-1'><Link to="/benefit"><h3>รายละเอียดสวัสดิการ</h3></Link></div>
                <div className='manu-2'><Link to="/apply"><h3>กรอกข้อมูลการสมัคร</h3></Link></div>
                <div className='manu-3'><Link to="/consider"><h3>พิจารณาการสมัคร</h3></Link></div>
                <div className='manu-4'><Link to="/interview"><h3>การสัมภาษณ์</h3></Link></div>
                <div className='manu-5'><Link to="/doc"><h3>ส่งเอกสารเพิ่มเติม</h3></Link></div>
                <div className='manu-6'><Link to="/doc3"><h3>ยินดีต้อนรับ</h3></Link></div>
            </div>
            <div className='manu-7'></div>
            </div>
        </>
    );
}

export default Navbar;
