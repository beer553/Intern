import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';
import Navbar from './navbar';

function Welcome() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (checkInDate && checkInTime) {
            const checkInDateTime = new Date(`${checkInDate}T${checkInTime}`).toISOString();
            localStorage.setItem('checkInDateTime', checkInDateTime);
            navigate('/welcome2');
        } else {
            alert('กรุณาระบุวันที่และเวลาที่จะเข้าพัก');
        }
    };

    return (
        <>
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
                <div className='text-3'>
                    <div><h5>เรียน นายพันธกิจ แซ่ลิ้ง</h5></div>
                    <p className='p2'>สวัสดีน้อง ๆ นักศึกษาฝึกงานทุกท่านนะคะ ตามที่น้องได้เข้ามาฝึกงานที่บริษัท ระหว่างวันที่ 4/1/2567 ถึง วันที่ 6/7/2567 พี่มิกช์ขอแจ้งรายละเอียดที่พัก ดังนี้ ค่ะ</p>
                    <p className='p3'>นาย พันธกิจ แซ่ลิ้ง บ้านพัก E122</p>
                    <p className='p2'>กรณีที่พักเป็นบ้าน นักศึกษาจะพักกัน 3 คน ต่อหลัง จะมี 2 ชั้น 2 ห้องนอน (ติดแอร์ในห้องนอนทั้ง 2 ห้อง) 1 ห้องน้ำ 1 ห้องครัว 1 ห้องรับแขก มีพื้นที่สำหรับซักผ้า และ ตากผ้า</p>
                    <p>กรณีที่พักเป็นแฟลต นักศึกษาจะพักกัน 2 คน ต่อห้อง จะมี 1 ห้องนอน (ห้องแอร์) 1 ห้องน้ำ 1 ห้องรับแขก และโซนครัวเล็ก ๆ ไม่มีพื้นที่สำหรับตากผ้า</p>
                    <p>สิ่งที่บริษัทจัดเตรียมไว้ให้ในที่พัก</p>
                    <p>1. ชุดเครื่องนอน (หมอน ผ้าห่ม ผ้าปู) <br /> 2. ไมโครเวฟ <br /> 3. ตู้เย็น <br /> 4. โต๊ะและเก้าอี้สำหรับทำงาน <br /> 5. ไม้แขวนผ้า</p>
                    <p>สำหรับน้องคนไหนไม่อยากซักรีดเอง สามารถจ้างแม่บ้านซักรีดได้ จ่ายเดือนละ 700 บาท ถ้าหากน้อง ๆ จ้าง สามารถแจ้งพี่มาได้เลยนะคะทั้งนี้พี่มิกช์รบกวนน้อง ๆ แจ้ง วันและ เวลา ที่จะเข้าที่พัก เพื่อทางพี่จะได้แจ้งผู้ประสานงานต่อไปค่ะ</p>
                    <p>การเดินทางมายังที่พัก</p>
                    <p>ให้น้อง ๆ เดินทางมาที่ บริษัท ปูนซิเมนต์ไทย (ทุ่งสง) จำกัด เมื่อมาถึงหน้าป้อมยามให้โทรหา พี่กบ 080-539-8822 และแจ้ง รปภ. ว่า เป็นนักศึกษาฝึกงานเข้าพักที่ บ้าน E122 รบกวนพี่รปภ. แนะนำเส้นทาง</p>
                    <p>หากน้อง ๆ มีอะไรสงสัยเพิ่มเติม สามารถถามทางพี่มิกช์ได้เลยนะคะ</p>
                    <p>ขอบคุณค่ะ</p>
                    <p>พี่มิช์</p>
                    <p>062-464-9147</p>
                </div>
                <div><p className="date-3">โปรดระบุวันที่และเวลาที่คุณต้องการเข้าพัก</p></div>
                <div className="input-group">
                    <label htmlFor="checkInDate">วันที่:</label>
                    <input type="date" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                    <label htmlFor="checkInTime">เวลา:</label>
                    <input type="time" id="checkInTime" value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)} />
                </div>
                <div className='button-3'><button className='button-2'  onClick={handleConfirm}>ยืนยัน</button></div>
                <div className='footnotee'>
                <p>ติดต่อสอบถาม New Way Of Work System</p>
                <p>คุณสุพรรษา ม. supansak@scg.com</p>
                <p>Digital Transformation Architect (Data Driven-TS)</p>
                <p>Created by Sunsa M and Pantakit S & Developed by Supanut K</p>
                <p className='p-1'>©SCG 2024</p>
            </div> 
            </div>
        </>
    );
}

export default Welcome;

