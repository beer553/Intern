import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Headmentor from './headmentor';

function HomePage() {
  const navigate = useNavigate();
  const [loggedInUser] = useState('สุพรรษา มูลศิริ');
  const [manpowerData, setManpowerData] = useState([
    { id: '001-12345', name: 'Panidnat Saeng', status: 'รอฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12346', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'Internship' },
    { id: '001-12347', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12348', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'Internship' },
    { id: '001-12349', name: 'Panidnat Saeng', status: 'ฝึกงานเสร็จสิ้น', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12350', name: 'Panidnat Saeng', status: 'ฝึกงานเสร็จสิ้น', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newManpower, setNewManpower] = useState({
    id: '',
    name: '',
    status: '',
    startDate: new Date(),
    endDate: new Date(),
    project: ''
  });

  const handleStartDateChange = (date) => {
    setNewManpower((prev) => ({
      ...prev,
      startDate: date
    }));
  };

  const handleEndDateChange = (date) => {
    setNewManpower((prev) => ({
      ...prev,
      endDate: date
    }));
  };

  const goToPofilePage = () => {
    navigate('/IDP');
  };

  const gotoProductBacklog = () => {
    navigate('/PDBacklog');
  };

  const gotoProjectpage = () => {
    navigate('/project');
  };

  const gotoDairyscrumpage = () => {
    navigate('/scrumdiary');
  };

  const gotoscrumpage = () => {
    navigate('/scrum');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewManpower((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newManpowerWithDefaults = {
      ...newManpower,
      status: 'รอฝึกงาน',
      project: 'ยังไม่มอบหมายโปรเจค'
    };
    setManpowerData((prev) => [
      ...prev,
      newManpowerWithDefaults
    ]);
    setNewManpower({ id: '', name: '', status: '', startDate: new Date(), endDate: new Date(), project: '' });
    setIsFormVisible(false);
  };

  return (
    <>
      <Headmentor />
      <div className="dashboard">
        <div className="welcome">
          <img src="\src\img\447852194_1172009427274611_5710036352369826661_n.png" className="profile-img" alt="Profile" />
          <div className="welcome-text">
            <h2 className='DX'>DX Manpower Management</h2>
            <p className='SC'>Hello, Scrum Master STAR 👋</p>
          </div>
        </div>
        <div className="dashboard-1">
          <div className="card">
            <div className='developteamcard'>
              <div className="number6">6</div>
              <img src="https://cdn-icons-png.flaticon.com/128/1478/1478951.png" className='Team' />
            </div>
            <div className="devterm">Developer Team (TTL)</div>
            <div className="blue-line"></div>
          </div>
          <div className="card">
            <div className='developthisyear'>
              <div className="number3-1">3</div>
              <img src="https://cdn-icons-png.flaticon.com/128/1320/1320909.png" className='Team-1' />
            </div>
            <div className="label-2-">Developer This Year</div>
            <div className="orange-line"></div>
          </div>
          <div className="card-2">
            <div className="project-card">
              <div className="number2">
                <span>2</span>
              </div>
              <div className="project-details">
                <div className="project-item" onClick={gotoProjectpage}>
                  <img src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" alt="Project" className='PJZ' />
                  <span>Project</span>
                </div>
                <div className="project-item-1-" onClick={gotoDairyscrumpage}>
                  <img src="https://cdn-icons-png.flaticon.com/128/15189/15189145.png" alt="Scrum" className='Sc-1' />
                  <span>Daily Scrum</span>
                </div>
              </div>
              <div className='pj-1-'><span>Project This Year (Items)</span></div>
            </div>
            <div className="cyan-line"></div>
          </div>
          <div className="card-1">
            <div className="item">
              <div className="number3">3</div>
              <div className="labelz-1">Sprint</div>
            </div>
            <div className="item">
              <div className="number10">10</div>
              <div className="labelz" onClick={gotoProductBacklog}>
                <div className="icon-1" >
                  <img src="https://cdn-icons-png.flaticon.com/128/5084/5084624.png" alt="Product Backlog Icon" className='BLZ' />
                </div>
                <div>Product Backlog</div>
              </div>
            </div>
            <div className="PI">Product Increment (Items)</div>
            <div className="Green"></div>
          </div>
        </div>
        <div className="manpower">
          <div className='add-manpower'>
            <h3 className='manpower-center'>Manpower</h3>
            <div><img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="Add" className='add-1' onClick={() => setIsFormVisible(true)} /></div>
          </div>
          {isFormVisible && (
            <div className="form-overlay">
              <div className="form-container-manpower">
                <form onSubmit={handleFormSubmit} className='manpowerfrom'>
                  <div>
                    <label>
                      ID:
                      <input type="text" name="id" value={newManpower.id} onChange={handleInputChange} required />
                    </label>
                    <label>
                      Name:
                      <input type="text" name="name" value={newManpower.name} onChange={handleInputChange} required />
                    </label>
                    <label>
                      Start Date:
                      <DatePicker
                        selected={newManpower.startDate}
                        onChange={handleStartDateChange}
                        dateFormat="dd-MM-yyyy"
                        className="date-picker"
                      />
                    </label>
                    <label>
                      End Date:
                      <DatePicker
                        selected={newManpower.endDate}
                        onChange={handleEndDateChange}
                        dateFormat="dd-MM-yyyy"
                        className="date-picker"
                      />
                    </label>
                  </div>
                  <button className='addmanpowerbutton' type="submit">Add</button>
                  <button className='cancelmanpowerbutton' type="button" onClick={() => setIsFormVisible(false)}>Cancel</button>
                </form>
              </div>
            </div>
          )}
          <div className='manpower-table-1'>
            <table className='manpower-table'>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>ID Name</th>
                  <th>Status</th>
                  <th>Timeline</th>
                  <th>Project</th>
                  <th>Profile</th>
                  <th>Sprint Review</th>
                  <th>Evaluate</th>
                </tr>
              </thead>
              <tbody>
                {manpowerData.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{`${row.id} ${row.name}`}</td>
                    <td className={row.status.toLowerCase()}>{row.status}</td>
                    <td>{`${new Date(row.startDate).toLocaleDateString()} - ${new Date(row.endDate).toLocaleDateString()}`}</td>
                    <td>{row.project}</td>
                    <td> <img className='file' src="https://cdn-icons-png.flaticon.com/128/1157/1157026.png" alt="Profile" onClick={goToPofilePage} /></td>
                    <td><img className='sprint' src="https://cdn-icons-png.flaticon.com/128/4727/4727519.png" alt="Sprint Review" onClick={gotoscrumpage} /></td>
                    <td><img className='Eva' src="https://cdn-icons-png.flaticon.com/128/334/334345.png" alt="Evaluate" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer-3">
        <p>ติดต่อสอบถาม DX Manpower Managemant</p>
        <p>คุณสุพรรษา ม. supansak@scg.com</p>
        <p>Digital Transformation Architect (Data Driven-TS)</p>
        <p>Created by Sunsa M and Pantakit S & Developed by Phurin C</p>
        <p>©SCG 2024</p>
      </div>
    </>
  );
}

export default HomePage;
