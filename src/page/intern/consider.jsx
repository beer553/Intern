import React from 'react';
import './consider.css';
import Navbar from './navbar';

function Consider() {
  const considerationStatus = "เสียใจด้วย";
  let CSSClass = '';
  let iconUrl = '';
  let additionalMessage = '';
  let borderColor = ''; 

  if (considerationStatus === "กำลังพิจารณาเบื้องต้น") {
    CSSClass = 'consideration';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/1288/1288278.png';
    additionalMessage = 'โปรดติดตามและรอการพิจารณา';
    borderColor = 'yellow';
  } else if (considerationStatus === "เสียใจด้วย") {
    CSSClass = 'under-review';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/10621/10621089.png';
    additionalMessage = 'คุณไม่ผ่านการพิจารณาเบื้องต้น';
    borderColor = 'red';
  } else if (considerationStatus === "ยินดีด้วย") {
    CSSClass = 'approved';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/9426/9426997.png';
    additionalMessage = 'คุณผ่านการพิจารณาเบื้องต้น';
    borderColor = 'rgb(0, 231, 0)';
  } else {
    CSSClass = 'default';
    borderColor = 'gray';
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>ผลการสมัคร</h1>
        <div className='status'>
          <div className={CSSClass}>
            <p>{considerationStatus}</p>
            <div className='status-2' style={{ borderLeft: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}`, borderBottom: `2px solid ${borderColor}` }}>
                <img className='wait' src={iconUrl} alt="Icon" />
                <p>{additionalMessage}</p>
            </div>
          </div>
        </div>
        {considerationStatus === "ยินดีด้วย" && (
            <div>
                <h3 className='special-message'>กำหนดสัมภาษณ์การฝึกงาน</h3>
                <p className='additional-info'>ขอนัดสัมภาษณ์การฝึกงงาน <br /><b>ตำแหน่ง Full Stack Developer</b> โดยขอนัดวัน และเวลาที่จะสัมภาษณ์ ดังนี้คะ <br /><u>วันที่สัมภาษณ์</u> : วันที่ 25 กันยายน 2566 <br /><u>เวลาที่สัมภาษณ์</u> : 14:00 - 14:20x</p>
            </div>)}
        <div className='underline'></div>
      </div>
    </>
  );
}

export default Consider;
