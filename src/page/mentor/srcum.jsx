 import React, { useState } from 'react';
import './srcum.css';
import Headmentor from './headmentor';
import { useNavigate } from 'react-router-dom';
import ScrumDiary from './scrumdiary';

const Scrum = () => {
  const [targetdoing, setargetdoing] = useState([
    { id: 1, answer: true },
    { id: 2, answer: false },
    { id: 3, answer: true }
  ]);

  const renderIcon = (answer) => {
    if (answer) {
      return <span style={{ color: 'rgb(118, 197, 0)' }}>&#10004;</span>; // ไอคอนถูก
    } else {
      return <span style={{ color: 'red' }}>&#10006;</span>; // ไอคอนผิด
    }
  };
  const navigate = useNavigate();

  const data = [
    { firstName: 'Phurin', lastName: 'Chairoek', id: '0001-123005', nickname: 'Sun',status: 'กำลังฝึกงาน', position: 'Fullstack', trainingPeriod: '01/01/2024 - 31/12/2025', AssignedProject: 'Intern', backlog: 'Project A' },
  ];
  const [doing, setDoing] = useState('');
  const [done, setDone] = useState('');
  const [needSupport, setNeedSupport] = useState('');
  const [toDo, setToDo] = useState('');
  const [doingScore, setDoingScore] = useState('');
  const [doneScore, setDoneScore] = useState('');
  const [needSupportScore, setNeedSupportScore] = useState('');
  const [toDoScore, setToDoScore] = useState('');

  const [isDoingScored, setIsDoingScored] = useState(false);
  const [isDoneScored, setIsDoneScored] = useState(false);
  const [isNeedSupportScored, setIsNeedSupportScored] = useState(false);
  const [isToDoScored, setIsToDoScored] = useState(false);

  const [scrumData, setScrumData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSave = () => {
    const scrumData = {
      doing,
      done,
      needSupport,
      toDo,
      doingScore,
      doneScore,
      needSupportScore,
      toDoScore
    };
    console.log(scrumData);
    setScrumData(scrumData);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDoingScore = (score) => {
    setDoingScore(score);
    setIsDoingScored(true);
  };

  const handleDoneScore = (score) => {
    setDoneScore(score);
    setIsDoneScored(true);
  };

  const handleNeedSupportScore = (score) => {
    setNeedSupportScore(score);
    setIsNeedSupportScored(true);
  };

  const handleToDoScore = (score) => {
    setToDoScore(score);
    setIsToDoScored(true);
  };
  const gotoProductBacklog = () => {
    navigate('/BLProject');
  };


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
                <th>Nickname</th>
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
                  <td>{item.nickname}</td>
                  <td>{item.status}</td>
                  <td>{item.position}</td>
                  <td>{item.trainingPeriod}</td>
                  <td>{item.AssignedProject}</td>
                  <td>
                    <button className='backlogclick' onClick={gotoProductBacklog}>
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
              <div className='doing-1'>
              </div>
              <div className='doing-2'>
                <div>
                  <button className='badscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className='goodscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className='gladsrcum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='doing-3'></textarea>
            </div>
            <div className='doing'>
              <div className='doing-1'>
              </div>
              <div className='doing-2'>
                <div>
                  <button className='badscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className='goodscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className='gladsrcum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='doing-3'></textarea>
            </div>
            <div className='doing'>
              <div className='doing-1'></div>
              <div className='doing-2'>
                <div>
                  <button className='badscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className='goodscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className='gladsrcum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='doing-3'></textarea>
            </div>
            <div className='todo'>
              <div className='todo-1-1'>
                <select disabled className='todoscrum' >
                  <option value="1">1. Dev Fronend 3 หน้า</option>
                </select>
                <select disabled className='todoscrum' >
                  <option value="1">2. ออกแบบหน้า Fronend</option>
                </select>
                <select disabled className='todoscrum'  >
                  <option value="1">3. ส่งมอบงาน Fronend</option>
                </select>
              </div>
              <div className='todo-2' >
                <div>
                  <button className='badscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className='goodscrum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className='gladsrcum'>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='todo-3'></textarea>
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
                <div className='donecrum-4' value="1">4. อื่นๆ</div>
              </div>
              <div className='todo-2'>
                <div>
                  <button className={`badscrum ${isDoingScored && doingScore === 'ฮาโรย !!!' ? 'active' : ''}`} onClick={() => handleDoingScore('ฮาโรย !!!')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className={`goodscrum ${isDoingScored && doingScore === 'ดีมาก' ? 'active' : ''}`} onClick={() => handleDoingScore('ดีมาก')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className={`gladsrcum ${isDoingScored && doingScore === 'สุดยอด' ? 'active' : ''}`} onClick={() => handleDoingScore('สุดยอด')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='todo-3' value={doing} onChange={(e) => setDoing(e.target.value)}></textarea>
            </div>
            <div className='todo'>
              <div className='todo-1'>
                <option className='donecrum-1' value="1" >1. ได้พี่เอกสุดหล่อสอนครับ</option>
                <option className='donecrum-2' value="1">2. ไม่มี Inspiration</option>
                <option className='donecrum-3' value="1">3. โปรดระบุ</option>
                <div className='donecrum-5' value="1">ไม่ได้ตามเป้าที่จะทำ Dropdown ในส่วนของกราฟให้เสร็จ ครับ ทำไปได้เเค่ 80% เพราะยังทำให้กราฟเชื่อมกับ dropdown วันที่ไม่ได้ครับ ผมจึงเเบ่งเวลาไปทำอีกส่วนครับ คือ dropdown ของการเลือก ส่วน แผนก เเละเจ้าของสัญญาครับ ผมก็ได้ทำเสร็จไปแล้วครับ เเต่การเชื่อมต่อ dropdown กับกราฟนี้อาจจะนานเเน่นอนครับ

                </div>
              </div>
              <div className='todo-2'>
                <div>
                  <button className={`badscrum ${isDoneScored && doneScore === 'ฮาโรย !!!' ? 'active' : ''}`} onClick={() => handleDoneScore('ฮาโรย !!!')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className={`goodscrum ${isDoneScored && doneScore === 'ดีมาก' ? 'active' : ''}`} onClick={() => handleDoneScore('ดีมาก')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className={`gladsrcum ${isDoneScored && doneScore === 'สุดยอด' ? 'active' : ''}`} onClick={() => handleDoneScore('สุดยอด')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='todo-3' value={done} onChange={(e) => setDone(e.target.value)}></textarea>
            </div>
            <div className='doing'>
              <div className='needsupport'>
                <h5 disabled className='needsupport-1'>
                  <option className='needsupport-2' value="1" > อยากให้พี่ดาวช่วยดูหน้าที่ Dev เสร็จแล้ว <br /></option>
                </h5>
              </div>
              <div className='doing-2'>
                <div>
                  <button className={`badscrum ${isNeedSupportScored && needSupportScore === 'ฮาโรย !!!' ? 'active' : ''}`} onClick={() => handleNeedSupportScore('ฮาโรย !!!')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className={`goodscrum ${isNeedSupportScored && needSupportScore === 'ดีมาก' ? 'active' : ''}`} onClick={() => handleNeedSupportScore('ดีมาก')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className={`gladsrcum ${isNeedSupportScored && needSupportScore === 'สุดยอด' ? 'active' : ''}`} onClick={() => handleNeedSupportScore('สุดยอด')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='doing-3' value={needSupport} onChange={(e) => setNeedSupport(e.target.value)}></textarea>
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
              <div className='todo-2'>
                <div>
                  <button className={`badscrum ${isToDoScored && toDoScore === 'ฮาโรย !!!' ? 'active' : ''}`} onClick={() => handleToDoScore('ฮาโรย !!!')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4252/4252037.png" style={{ width: '40px', height: '40px' }} />
                    <p className='badscrum-1'>ฮาโรย !!!</p>
                  </button>
                </div>
                <div>
                  <button className={`goodscrum ${isToDoScored && toDoScore === 'ดีมาก' ? 'active' : ''}`} onClick={() => handleToDoScore('ดีมาก')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2717/2717365.png" style={{ width: '40px', height: '40px' }} />
                    <p className='goodscrum-1'>ดีมาก</p>
                  </button>
                </div>
                <div>
                  <button className={`gladsrcum ${isToDoScored && toDoScore === 'สุดยอด' ? 'active' : ''}`} onClick={() => handleToDoScore('สุดยอด')}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7938/7938341.png" style={{ width: '40px', height: '40px' }} />
                    <p className='gladsrcum-1'>สุดยอด</p>
                  </button>
                </div>
              </div>
              <textarea className='todo-3' value={toDo} onChange={(e) => setToDo(e.target.value)}></textarea>
            </div>
          </div>
        </div>
      <div className='savescrum' onClick={handleSave}>
         <h3>บันทึก</h3>
          <img className='savescrum-1' src="https://cdn-icons-png.flaticon.com/128/6276/6276686.png" alt="" />
        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h2>บันทึกสำเร็จ!</h2>
            </div>
          </div>
        )}
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

export default Scrum;
