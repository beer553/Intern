import React from 'react';
import './consider.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Doc3() {
  const considerationStatus = "โปรดแก้ไขเอกสาร";
  let CSSClass = '';
  let iconUrl = '';
  let additionalMessage = '';
  let borderColor = ''; 
  let correctionDetails = '';

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
  } else {
    CSSClass = 'default';
    borderColor = 'gray';
  }

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
                {considerationStatus === "โปรดแก้ไขเอกสาร" && (
                    <div className='correction-details'>
                    <p>{correctionDetails}</p>
                  </div>
                )}
            </div>
          </div>
        </div>
                {considerationStatus === "เอกสารครบถ้วนถูกต้อง" && (
                    <div>
                        โปรดรอกำหนดการเดินทาง / บ้านพัก เราจะแจ้งท่านผ่านทาง Email และ โปรดยืนยันวันการเดินทางในระบบอีกครั้ง
                        <img src="https://loading.io/assets/mod/spinner/default/lg.gif" alt="" />
                    </div>)}
        <div className='underline'></div>
      </div>
    </>
  );
}

export default Doc3;
