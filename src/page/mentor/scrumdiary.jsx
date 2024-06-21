import React, { useState, useEffect } from 'react';
import './srcum.css'; 
import Headmentor from './headmentor'; 
import { useNavigate } from 'react-router-dom'; 

const ScrumDiary = ({ scrumData }) => {
  const navigate = useNavigate();

  const [targetdoing, setTargetdoing] = useState([
    { id: 1, answer: true },
    { id: 2, answer: false },
    { id: 3, answer: true }
  ]);

  const renderIcon = (answer) => {
    if (answer) {
      return <span style={{ color: 'rgb(118, 197, 0)' }}>&#10004;</span>; // ไอคอนถูก สีเขียว
    } else {
      return <span style={{ color: 'red' }}>&#10006;</span>; // ไอคอนผิด สีแดง
    }
  };

  const intern = [
    { firstName: 'Phurin', lastName: 'Chairoek', id: '0001-123005', status: 'กำลังฝึกงาน', position: 'Fullstack', trainingPeriod: '01/01/2024 - 31/12/2025', AssignedProject: 'Intern', backlog: 'Project A' },
  ];

  const handleBack = () => {
    navigate(-1); 
  };

  const getPreviousDayDate = () => {
    const today = new Date();
    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);
    return previousDay.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <>
      <Headmentor />
      <div className='srcun-container'>
        <div className='back-button'>
          <button className='back-button-1' onClick={handleBack}>
            <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
          </button>
        </div>
        1/16
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
              {intern.map((item, index) => (
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
            <div><p>Doing <br />(เมื่อวานได้ตามเป้ามั๊ย/รายละเอียดที่ทำ)</p></div>
            <div><p>Done <br />(เหตุผลที่เสร็จ-ไม่เสร็จ /จุดเรียนรู้)</p></div>
            <div><p>Need Support <br />(ต้องการความช่วยเหลือ)</p></div>
            <div><p>To do <br />(วันนี้ทำอะไร)</p></div>
          </div>
          <div className='srcum-detail'>
            <div className='srcum-date-1'>
              <p className='datesrcum-1'>{getPreviousDayDate()}</p>
            </div>
            <div className='doing'>
              <div className='doing-1'></div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '60px', height: '60px' }} alt="" />
                <div className='badshowscrum'>ฮาโรย !!!</div>
              </div>
              <div className='doing-3'></div>
            </div>
            <div className='doing'>
              <div className='doing-1'></div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '55px', height: '60px' }} alt="" />
                <div className='goodshowscrum'>ดีมาก</div>
              </div>
              <div className='doing-3'></div>
            </div>
            <div className='doing'>
              <div className='doing-1'></div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '60px', height: '60px' }} alt="" />
                <div className='verygoodshowscrum'>สุดยอด</div>
              </div>
              <div className='doing-3'></div>
            </div>
            <div className='todo'>
              <div className='todo-1-1'>
                <select disabled className='todoscrum'>
                  <option value="1">1. Dev Fronend 3 หน้า</option>
                </select>
                <select disabled className='todoscrum'>
                  <option value="1">2. ออกแบบหน้า Fronend</option>
                </select>
                <select disabled className='todoscrum'>
                  <option value="1">3. ส่งมอบงาน Fronend</option>
                </select>
              </div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '60px', height: '60px' }} alt="" />
                <div className='verygoodshowscrum'>สุดยอด</div>
              </div>
              <div className='todo-3'></div>
            </div>
            <div className='srcum-date'>
              <p className='datesrcum'>{currentDate}</p>
            </div>
            <div className='todo'>
              <div className='todo-1'>
                <select disabled className='todoscrumtext'>
                  <option className='todoscrumtext' value="1">1. Dev Fronend 3 หน้า</option>
                </select>
                &nbsp;{renderIcon(targetdoing[2].answer)}
                <select disabled className='todoscrumtext'>
                  <option className='todoscrumtext' value="1">2. ออกแบบหน้า Fronend</option>
                </select>
                &nbsp;{renderIcon(targetdoing[1].answer)}
                <select disabled className='todoscrum'>
                  <option className='todoscrumtext' value="1">3. ส่งมอบงาน Fronend</option>
                </select>
                &nbsp;{renderIcon(targetdoing[2].answer)}
                <option className='donecrum-4' value="1">4. อื่นๆ</option>
              </div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '55px', height: '60px' }} alt="" />
                <div className='goodshowscrum'>ดีมาก</div>
              </div>
              <div className='todo-3'>
                <p className='mentorcomment-1'>Ok ค่ะ</p>
              </div>
            </div>  
            <div className='todo'>
              <div className='todo-1'>
                <option className='donecrum-1' value="1">1. ได้พี่เอกสุดหล่อสอนครับ</option>                
                <option className='donecrum-2' value="1">2. ไม่มี Inspiration</option>
                <option className='donecrum-3' value="1">3. โปรดระบุ</option>
                <div className='donecrum-5' value="1">4. อื่นๆ</div>
              </div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '60px', height: '60px' }} alt="" />
                <div className='badshowscrum'>ฮาโรย !!!</div>
              </div>
              <div className='todo-3'>
              <p className='mentorcomment-1'>Ok ค่ะ</p>
              </div>
            </div>  
            <div className='doing'>
              <div className='needsupport'>
                <h5 disabled className='needsupport-1'>
                  <option className='needsupport-2' value="1"> อยากให้พี่ดาวช่วยดูหน้าที่ Dev เสร็จแล้ว <br /></option>
                </h5>
              </div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '55px', height: '60px' }} alt="" />
                <div className='goodshowscrum'>ดีมาก</div>
              </div>
              <div className='doing-3'>
              <p className='mentorcomment-1'>Ok ค่ะ</p>
              </div>
            </div> 
            <div className='todo'>
              <div className='todo-1'>
                <select disabled className='todoscrum'>
                  <option value="1">1. Dev Fronend 3 หน้า</option>
                </select>
                <select disabled className='todoscrum'>
                  <option value="1">2. ออกแบบหน้า Fronend</option>
                </select>
                <select disabled className='todoscrum'>
                  <option value="1"></option>
                </select>
                  <option className='todoscrumnone' value="1"></option>
              </div>
              <div className='doinshow'>
                <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '60px', height: '60px' }} alt="" />
                <div className='verygoodshowscrum'>สุดยอด</div>
              </div>
              <div className='todo-3'>
              <p className='mentorcomment-1'>Ok ค่ะ</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className='nextprojectscrum'>
        <p className='nextprojectscrum-1'>Next Project</p>
        <button className='nextprojectscrumb-2' > <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" style={{ width: '40px', height: '40px' }} alt="" /></button></div>
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
