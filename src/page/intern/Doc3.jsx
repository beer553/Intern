import React, { useState } from 'react';
import './consider.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Doc3() {
  const [correctionFiles, setCorrectionFiles] = useState({});
  const navigate = useNavigate(); 

  const considerationStatus = "เอกสารครบถ้วนถูกต้อง";
  let CSSClass = '';
  let iconUrl = '';
  let additionalMessage = '';
  let borderColor = ''; 

  if (considerationStatus === "กำลังตรวจเอกสาร") {
    CSSClass = 'consideration';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/1288/1288278.png';
    additionalMessage = 'โปรดติดตามและรอการพิจารณา';
    borderColor = 'yellow';
  } else if (considerationStatus === "โปรดแก้ไขเอกสาร") {
    CSSClass = 'under-review';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/7068/7068033.png';
    additionalMessage = 'โปรดแก้ไขเอกสารภายในเวลาที่กำหนด';
    borderColor = 'red';
  } else if (considerationStatus === "เอกสารครบถ้วนถูกต้อง") {
    CSSClass = 'approved';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/9426/9426997.png';
    additionalMessage = 'ยินดีต้อนรับสู่ครอบครัว SCG';
    borderColor = 'rgb(0, 231, 0)';
    
    setTimeout(() => {
      navigate('/welcome'); 
    }, 5000); 
  } else {
    CSSClass = 'default';
    borderColor = 'gray';
  }

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      setCorrectionFiles(prevFiles => ({ ...prevFiles, [fieldName]: file }));
    }
  };

  const handleSubmit = () => {
    console.log("Files to be submitted:", correctionFiles);
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>ตรวจสอบเอกสาร</h1>
        <div className='status'>
          <div className={CSSClass}>
            <p>{considerationStatus}</p>
            <div className='status-2' style={{ borderLeft: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}`, borderBottom: `2px solid ${borderColor}` }}>
              <img className='wait' src={iconUrl} alt="Icon" />
              <p>{additionalMessage}</p>
            </div>
          </div>
        </div>
        {considerationStatus === "โปรดแก้ไขเอกสาร" && (
          <div className='editdoc'>
            <div className='head-4'><h3>เอกสารที่ต้องแก้ไข</h3></div>
            <p>รายละเอียดที่ต้องแก้ไข : <span className='red'>โปรดเซ็นสำเนาตามแบบฟอร์มที่ถูกต้อง</span></p>
            <div>
              <p>สำเนาบัตรประชาชนพร้อมรับรองสำเนาถูกต้อง</p>
              <div><input type="file" onChange={(event) => handleFileChange(event, 'correctionFile1')} /></div>
            </div>
            <div className='button-4'><button className='button-2' onClick={handleSubmit}>ยืนยันการส่ง</button></div>
            <div><p className='red'>หมายเหตุ</p></div>
            <p>ส่งไฟล์ภายในวันที่ 1 มิถุนายน 2567</p>
          </div>
        )}
        {considerationStatus === "เอกสารครบถ้วนถูกต้อง" && (
          <div>
            โปรดรอกำหนดการเดินทาง / บ้านพัก เราจะแจ้งท่านผ่านทาง Email และ โปรดยืนยันวันการเดินทางในระบบอีกครั้ง
            <img src="https://loading.io/assets/mod/spinner/default/lg.gif" alt="Loading" />
          </div>
        )}
        <div className='underline'></div>
      </div>
    </>
  );
}

export default Doc3;
