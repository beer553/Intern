import React, { useState } from 'react';
import './Doc.css'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Doc() {
    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate('/doc2'); 
      };

    return (
        <>
        <Navbar />
        <div className='docconterler'>
            <div className='head-2'>
                <h3 className='head-3'>รายละเอียดและสวัสดิการตามที่บริษัทกำหนด</h3>
            </div>
            <div className='benefit-1'>
                <div><p>1.เบี้ยเลี้ยง</p></div>
                <div><p>2.ค่าเดินทาง</p></div>
                <div><p>3.ที่พัก</p></div>
                <div><p>4.ประกันอุบัติเหตุ วงเงิน400,000บาท</p></div>
                <div><p>5.สวัสดิการด้านการรักษาพยาบาลในสถานพยาบาลปูนทุ่งสง</p></div>
            </div>       
            <div className='redline'></div>   
            <div className='head-4'><h3>รายละเอียดเอกสารเพิ่มเติม</h3></div>
            <div className='text-text'>
                <p> 1.หนังสือขอความอนุเคราะห์เข้าฝึกงาน (หนังสือ เรียน กรรมการผู้จัดการ) <br /></p>
                <p> 2.สำเนาทะเบียนบ้าน พร้อมรับรองสำเนาถูกต้อง <br /></p>
                <p> 3.สำเนาบัตรประชาชน พร้อมรับรองสำเนาถูกต้อง <br /></p>
                <p> 4.สำเนาบัญชีธนาคารสำหรับโอนเงินเบี้ยเลี้ยง พร้อมรับรองสำเนาถูกต้อง<br /></p>
                <p> 5.สัญญาฝึกงาน ฝึกงาน2 <br /></p>
                <p> 6.เอกสารสัญญารักษาความลับ <br /></p>
                <p> 7.เอกสารใบแต่งตั้งผู้รับผลประโยชน์ <br /></p>
                <p> 8.รูปถ่ายหน้าตรง สำหรับทำบัตรนักศึกษาฝึกงาน <br /></p>
                <p> 9.โปรดกรอกฟอร์มตาม Link : https://forms.office.com/r/BDRYhZkxPR <br /> </p>
                <p> 10.เอกสารข้อ 5-7 สามารถ Download ได้จาก Link : https://drive.google.com/drive/folders/1_BiD_f1s_QCTkUUnZaFkaQ2P-mSb5SbB?usp=sharing </p>     
            </div>
            <div className='head-4'><h3>หมายเหตุ</h3></div>
            <p> <b>เอกสารทุกฉบับ สามารถใช้การลงนามแบบอิเล็กทรอนิกส์ได้และส่งไฟล์ภายในวันที่ 16 ตุลาคม 2566 </b></p>      
            <button className='next' onClick={handleConfirm}>
                    <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="next-page" className='nextpage-1' />
            </button>
        </div>
        </>
    );
}

export default Doc;