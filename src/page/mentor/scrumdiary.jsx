import React from 'react';
import './srcum.css'; 
import Headmentor from './headmentor'; 
import { useNavigate } from 'react-router-dom'; 

const ScrumDiary = ({ scrumData }) => {
  console.log(scrumData);

  const data = [
    { firstName: 'Phurin', lastName: 'Chairoek', id: '0001-123005', status: 'กำลังฝึกงาน', position: 'Fullstack', trainingPeriod: '01/01/2564 - 31/12/2564', AssignedProject: 'Intern', backlog: 'Project A' },
  ];

  const handleBack = () => {
    navigate(-1); 
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <Headmentor />
      <div className='srcun-container'>
        <div className='back-button'>
          <button className='back-button-1' onClick={handleBack}>
            <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
          </button>
        </div>
        <div className='srcum-table'>
          <table className='srcum-table-1'>
            <thead>
              <tr>
                <th>No.</th>
                <th>ID Name Lastname</th>
                <th>Status</th>
                <th>Position</th>
                <th>Training Time</th>
                <th>Assigned Project</th>
                <th>backlog</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${item.id} ${item.firstName} ${item.lastName}`}</td>
                  <td>{item.status}</td>
                  <td>{item.position}</td>
                  <td>{item.trainingPeriod}</td>
                  <td>{item.AssignedProject}</td>
                  <td>
                    <button className='backlogclick' onClick={() => alert(`Clicked ${item.backlog}`)}>
                      <img src="https://cdn-icons-png.flaticon.com/128/5084/5084624.png" alt={item.backlog} style={{ width: '40px', height: '40px' }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='srcum-diary'>
          <div className='srcum-head'>
            <div></div>
            <div><p cl>Doing <br />(เมื่อวานได้ตามเป้ามั๊ย/รายละเอียดที่ทำ)</p></div>
            <div><p>Done <br />(เหตุผลที่เสร็จ-ไม่เสร็จ /จุดเรียนรู้)</p></div>
            <div><p>Need Support <br />(ต้องการความช่วยเหลือ)</p></div>
            <div><p>To do <br />(วันนี้ทำอะไร)</p></div>
          </div>
          <div className='srcum-detail'>
            <div className='srcum-date'>
              <p className='datesrcum'>{currentDate}</p>
            </div>
            <div className='doing'>
                    <div className='doing-1'></div>
                    <div className='doing-2'>
                      <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                    </div>
                    <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                  <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>
            <div className='srcum-date'>
              <p className='datesrcum'>{currentDate}</p>
            </div>
            <div className='doing'>
                    <div className='doing-1'></div>
                    <div className='doing-2'>
                    <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                    </div>
                    <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' title="ดีเยี่ยม">
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>
            <div className='doing'>
                <div className='doing-1'></div>
                <div className='doing-2'>
                <div>
                        <button className='badscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                          <p className='badscrum-1'>แย่</p>
                        </button>
                      </div>
                      <div>
                        <button className='goodscrum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                          <p className='goodscrum-1'>ดีมาก</p>
                        </button>
                      </div>
                      <div>
                        <button className='gladsrcum' >
                          <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                          <p className='gladsrcum-1'>ดีเยี่ยม</p>
                        </button>
                      </div>
                </div>
                <div className='doing-3'></div>
            </div>   
          </div>
        </div>
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
};
export default ScrumDiary;
