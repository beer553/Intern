import React from 'react';
import './consider.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Interview() {
  const considerationStatus = "ยินดีด้วย";
  let CSSClass = '';
  let iconUrl = '';
  let additionalMessage = '';
  let borderColor = ''; 

  if (considerationStatus === "กำลังพิจารณาการสัมภาษณ์") {
    CSSClass = 'consideration';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/1288/1288278.png';
    additionalMessage = 'โปรดติดตามและรอการพิจารณา';
    borderColor = 'yellow';
  } else if (considerationStatus === "เสียใจด้วย") {
    CSSClass = 'under-review';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/10621/10621089.png';
    additionalMessage = 'คุณไม่ผ่านการสัมภาษณ์';
    borderColor = 'red';
  } else if (considerationStatus === "ยินดีด้วย") {
    CSSClass = 'approved';
    iconUrl = 'https://cdn-icons-png.flaticon.com/128/9426/9426997.png';
    additionalMessage = 'คุณผ่านการสัมภาษณ์';
    borderColor = 'rgb(0, 231, 0)';
  } else {
    CSSClass = 'default';
    borderColor = 'gray';
  }
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate('/doc'); 
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>ผลการสัมภาษณ์</h1>
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
                <button className='confirm-button' onClick={handleConfirm}>
                    <img src="https://cdn-icons-png.flaticon.com/128/6276/6276686.png" alt="Confirm Icon" className='button-icon' />
                     <br /> ยืนยันสิทธิ์
                  </button>
                  <button className='decline-button'>
                    <img src="https://cdn-icons-png.flaticon.com/128/10621/10621089.png" alt="Decline Icon" className='button-icon' />
                     <br /> สละสิทธิ์
                  </button>
            </div>)}
        <div className='underline'></div>
      </div>
    </>
  );
}

export default Interview;
