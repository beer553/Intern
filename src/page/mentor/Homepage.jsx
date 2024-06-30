import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Headmentor1 from './headassignpro';

function HomePage() {
  const navigate = useNavigate();
  const [loggedInUser] = useState('สุพรรษา มูลศิริ');
  const [manpowerData, setManpowerData] = useState([
    { id: '001-12345', name: 'Panidnat Saeng', nickname: 'Sun', status: 'รอฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12346', name: 'Nattapon Intarak', nickname: 'Nat', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'Internship' },
    { id: '001-12347', name: 'Saeng Ploenchit', nickname: 'Saeng', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12348', name: 'Patchara Srisuwan', nickname: 'PS', status: 'กำลังฝึกงาน', startDate: '2024-01-01', endDate: '2024-12-31', project: 'Internship' },
    { id: '001-12349', name: 'Panny Intharachit', nickname: 'Panny', status: 'ฝึกงานเสร็จสิ้น', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
    { id: '001-12350', name: 'Natty Pattharawong', nickname: 'Natty', status: 'ฝึกงานเสร็จสิ้น', startDate: '2024-01-01', endDate: '2024-12-31', project: 'OT Dashboard' },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newManpower, setNewManpower] = useState({
    id: '',
    name: '',
    nickname: '',
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
    const newId = `001-${String(manpowerData.length + 12345).padStart(5, '0')}`;
    const newManpowerWithDefaults = {
      ...newManpower,
      id: newId,
      status: 'รอฝึกงาน',
      project: 'ยังไม่มอบหมายโปรเจค'
    };
    setManpowerData((prev) => [
      ...prev,
      newManpowerWithDefaults
    ]);
    setNewManpower({ id: '', name: '', nickname: '', status: '', startDate: new Date(), endDate: new Date(), project: '' });
    setIsFormVisible(false);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const displayedManpower = searchResults.length > 0 ? searchResults : manpowerData;

  return (
    <>
      <Headmentor1 profiles={manpowerData} onSearchResults={handleSearchResults} />
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
              <div className="number6">10</div>
              <img src="https://cdn-icons-png.flaticon.com/128/1478/1478951.png" className='Team' />
            </div>
            <div className="devterm">Developer Team (TTL)</div>
            <div className="blue-line"></div>
          </div>
          <div className="card">
            <div className='developthisyear'>
              <div className="number3-1">6</div>
              <img src="https://cdn-icons-png.flaticon.com/128/1320/1320909.png" className='Team-1' />
            </div>
            <div className="label-2-">Developer This Year</div>
            <div className="orange-line"></div>
          </div>
          <div className="card-2">
            <div className="project-card">
              <div className="number2">
                <div >5</div>
              </div>
              <div className="project-homepage">
                <div className="project-item" onClick={gotoProjectpage}>
                  <>Project</>
                </div>
                <div className="project-item-1-" onClick={gotoDairyscrumpage}>
                  <span>Daily Scrum</span>
                </div>
              </div>
            </div>
              <div className='pj-1-'><span>Project This Year (Items)</span></div>
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
                Product Backlog
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
            <form onSubmit={handleFormSubmit} className="manpower-form">
              <div className="form-row-1">
                <label className='id-3'>
                  ID:
                  <input
                    type="text"
                    name="id"
                    value={newManpower.id}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </label>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={newManpower.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </label>
                <label>
                  Nick Name:
                  <input
                    type="text"
                    name="nickname"
                    value={newManpower.nickname}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </label>
              </div>
              <div className="form-row">
                <label className='staratdate-3'>
                  Start Date:
                  <DatePicker
                    selected={newManpower.startDate}
                    onChange={handleStartDateChange}
                    dateFormat="dd-MM-yyyy"
                    className="input-field date-picker"
                  />
                </label>
                <label>
                  End Date:
                  <DatePicker
                    selected={newManpower.endDate}
                    onChange={handleEndDateChange}
                    dateFormat="dd-MM-yyyy"
                    className="input-field date-picker"
                  />
                </label>
              </div>
              <div className="form-rowbutton">
                <button type="submit" className="addmanpowerbutton">Add</button>
                <button type="button" onClick={() => setIsFormVisible(false)} className="cancelmanpowerbutton">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
          <div className='manpower-table-1'>
            <table className='manpower-table'>
              <thead>
                <tr>
                  <th>No.</th>
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
                {displayedManpower.length > 0 ? (
                  displayedManpower.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="align-left">{`${row.id} ${row.name} (${row.nickname})`}</td>
                      <td className={row.status.toLowerCase()}>{row.status}</td>
                      <td>{`${new Date(row.startDate).toLocaleDateString()} - ${new Date(row.endDate).toLocaleDateString()}`}</td>
                      <td>{row.project}</td>
                      <td> <img className='file' src="https://cdn-icons-png.flaticon.com/128/1157/1157026.png" alt="Profile" onClick={goToPofilePage} /></td>
                      <td><img className='sprint' src="https://cdn-icons-png.flaticon.com/128/4727/4727519.png" alt="Sprint Review" onClick={gotoscrumpage} /></td>
                      <td><img className='Eva' src="https://cdn-icons-png.flaticon.com/128/334/334345.png" alt="Evaluate" /></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">ไม่มีชื่อนี้</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer-3">
        <p>ติดต่อสอบถาม DX Manpower Managemant</p>
        <p>คุณสุพรรษา ม. supansak@scg.com</p>
        <p>Digital Transformation Architect (Data Driven-TS)</p>
        <p>Created by Supansa M and Pantakit S & Developed by Phurin C</p>
        <p>©SCG 2024</p>
      </div>
    </>
  );
}

export default HomePage;
