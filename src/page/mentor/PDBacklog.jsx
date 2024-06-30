import React, { useState } from 'react';
import './PDBacklog.css';
import { useNavigate } from 'react-router-dom';
import Headmentor from './headmentor';

const ProductBacklog = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const projects = [
    {
      number: 1,
      projectName: 'KM Self-Learning',
      startDate: '01/01/2024',
      pickUpDate: '31/03/2024',
      scrumMaster: 'สุพรรษา มูลศิริ',
      status: 'เริ่มต้น',
      teamDeveloper: 'น้องเจ, น้องณเดช, น้องไนท์'
    },
    {
      number: 2,
      projectName: 'Dashboard License',
      startDate: '01/01/2024',
      pickUpDate: '31/03/2024',
      scrumMaster: 'สุพรรษา มูลศิริ',
      status: 'กำลังดำเนินการ',
      teamDeveloper: 'น้องเจ, น้องณเดช, น้องไนท์'
    },
    {
      number: 3,
      projectName: 'OT',
      startDate: '01/04/2024',
      pickUpDate: '30/06/2024',
      scrumMaster: 'สุพรรษา มูลศิริ',
      status: 'กำลังดำเนินการ',
      teamDeveloper: 'น้องซัน'
    },
    {
      number: 4,
      projectName: 'Intern',
      startDate: '01/07/2024',
      pickUpDate: '30/09/2024',
      scrumMaster: 'สุพรรษา มูลศิริ',
      status: 'เริ่มต้น',
      teamDeveloper: 'ยังไม่มอบหมายผู้รับผิดชอบ'
    }
  ];

  const gotoKM = () => {
    navigate('/BLProject');
  };

  const Homepage = () => {
    navigate('/Homepage');
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const displayedProjects = searchResults.length > 0 ? searchResults : projects;

  return (
    <>
      <Headmentor projects={projects} onSearchResults={handleSearchResults} />
      <div className="product-backlog">
        <button>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/130/130882.png"
              alt="ย้อนกลับ"
              className="back"
              onClick={Homepage}
            />
          </div>
        </button>
        <main className="main-1">
          <div className="BL-img">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5084/5084624.png"
              alt="ProductBacklog<"
              className="BL"
            />
            <div className="BL-1">ProductBacklog</div>
          </div>
          <table className="table-1">
            <thead>
              <tr className="table-2">
                <th className="th-1">No.</th>
                <th className="th-1">Project Name</th>
                <th className="th-1">Backlog</th>
                <th className="th-1">Start Date</th>
                <th className="th-1">End Date</th>
                <th className="th-1">Scrum Master</th>
                <th className="th-1">Status</th>
                <th className="th-1">Team Developer</th>
              </tr>
            </thead>
            <tbody>
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <tr key={project.number}>
                    <td className="td-1">{project.number}</td>
                    <td className="td-1">{project.projectName}</td>
                    <td className="td-2">
                      <span className="backlog-icon" onClick={gotoKM}></span>
                    </td>
                    <td className="td-1">{project.startDate}</td>
                    <td className="td-1">{project.pickUpDate}</td>
                    <td className="td-1">{project.scrumMaster}</td>
                    <td className={`td-1 status-${project.status === 'เริ่มต้น' ? 'active-B' : project.status === 'กำลังดำเนินการ' ? 'active-G' : 'inactive'}`}>
                      {project.status}
                    </td>
                    <td className="td-1">{project.teamDeveloper}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">ไม่มีชื่อนี้</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
        <footer className="footer-2">
          <p>ติดต่อสอบถาม DX Manpower Managemant</p>
          <p>คุณสุพรรษา ม. supansak@scg.com</p>
          <p>Digital Transformation Architect (Data Driven-TS)</p>
          <p>Created by Supansa M and Pantakit S & Developed by Phurin C</p>
          <p>©SCG 2024</p>
        </footer>
      </div>
    </>
  );
}

export default ProductBacklog;
