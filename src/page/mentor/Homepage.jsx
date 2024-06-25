import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('สุพรรษา มูลศิริ');
  const [manpowerData, setManpowerData] = useState([
    { id: 'G001-12345', name: 'Panidnat Saeng', status: 'รอฝึกงาน', timeline: '01/01/2024 - 31/12/2024', project: 'OT Dashboard' },
    { id: 'G001-12346', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', timeline: '01/01/2024 - 31/12/2024', project: 'Internship' },
    { id: 'G001-12347', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', timeline: '01/01/2024 - 31/12/2024', project: 'OT Dashboard' },
    { id: 'G001-12348', name: 'Panidnat Saeng', status: 'กำลังฝึกงาน', timeline: '01/01/2024 - 31/12/2024', project: 'Internship' },
    { id: 'G001-12349', name: 'Panidnat Saeng', status: 'ฝึกงานเสร็จสิ้น', timeline: '01/01/2024 - 31/12/2024', project: 'OT Dashboard' },
    { id: 'G001-12350', name: 'Panidnat Saeng', status: 'ฝึกงานเสร็จสิ้น', timeline: '01/01/2024 - 31/12/2024', project: 'OT Dashboard' },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newManpower, setNewManpower] = useState({
    id: '',
    name: '',
    status: '',
    timeline: '',
    project: ''
  });
  const [timelineOptions] = useState([
    '01/01/2024 - 31/12/2024',
    '01/07/2024 - 31/12/2024',
    '01/01/2025 - 31/12/2025',
  ]);

  const goToPofilePage = () => {
    navigate('/IDP');
  }
  const gotoProductBacklog = () => {
    navigate('/PDBacklog');
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
    setManpowerData((prev) => [
      ...prev,
      newManpower
    ]);
    setNewManpower({ id: '', name: '', status: '', timeline: '', project: '' });
    setIsFormVisible(false);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <div className="hamburger-menu">
            <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="Menu" />
          </div>
          <img className='scg' src="https://www.watsadupedia.com/images/2/2c/Scg.png" alt="SCG  Logo" />
        </div>
        <div className="header-center">
          <div className="search-container">
            <img src="https://cdn-icons-png.flaticon.com/128/751/751463.png" className="search-icon" />
            <input className='search-' type="text" placeholder="Search" />
          </div>
        </div>
        <div className="mentor">
          <span>Scrum Master<br />{loggedInUser}</span>
          <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Mentor" className="mentor-img" />
        </div>
      </header>

      <div className="dashboard">
        <div className="welcome">
          <img src="/src/img/star.png" className="profile-img" alt="Profile" />
          <div className="welcome-text">
            <h2 className='DX'>DX Manpower Management</h2>
            <p className='SC'>Hello, Scrum Master STAR 👋</p>
          </div>
        </div>
        <div className="dashboard-1">
          <div className="card">
            <div className="number6">6</div>
            <img src="https://cdn-icons-png.flaticon.com/128/1478/1478951.png" className='Team' />
            <div className="label-1-">Developer Team (TTL)</div>
            <div className="blue-line"></div>
          </div>
          <div className="card">
            <div className="number3-1">3</div>
            <div><img src="https://cdn-icons-png.flaticon.com/128/1320/1320909.png" className='Team-1' /></div>
            <div className="label-2-">Developer This Year</div>
            <div className="orange-line"></div>
          </div>
          <div className="card-2">
            <div className="project-card">
              <div className="number2">
                <span>2</span>
              </div>
              <div className="project-details">
                <div className="project-item">
                  <img src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" alt="Project" className='PJZ' />
                  <span>Project</span>
                </div>
                <div className="project-item-1-">
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
              <div className="labelz">
                <div className="icon-1" onClick={gotoProductBacklog}>
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
          <table>
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
                  <td>{row.timeline}</td>
                  <td>{row.project}</td>
                  <td><button> <img className='file' src="https://cdn-icons-png.flaticon.com/128/1157/1157026.png" alt="Profile" onClick={goToPofilePage} /></button></td>
                  <td><img className='sprint' src="https://cdn-icons-png.flaticon.com/128/4727/4727519.png" alt="Sprint Review" /></td>
                  <td><img className='Eva' src="https://cdn-icons-png.flaticon.com/128/334/334345.png" alt="Evaluate" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isFormVisible && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Add New Manpower</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                ID:
                <input type="text" name="id" value={newManpower.id} onChange={handleInputChange} required />
              </label>
              <label>
                Name:
                <input type="text" name="name" value={newManpower.name} onChange={handleInputChange} required />
              </label>
              <label>
                Timeline:
                <select name="timeline" value={newManpower.timeline} onChange={handleInputChange} required>
                  <option value="">Select Timeline</option>
                  {timelineOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setIsFormVisible(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer-3">
        <p>ติดต่อสอบถาม DX Manpower Managemant</p>
        <p>คุณสุพรรษา ม. supansak@scg.com</p>
        <p>Digital Transformation Architect (Data Driven-TS)</p>
        <p>Created by Sunsa M and Pantakit S & Developed by Phurin C</p>
        <p>©SCG 2024</p>
      </footer>
    </div>
  );
}

export default HomePage;
