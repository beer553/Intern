import React from 'react';
import './IDP.css';
import { useNavigate } from 'react-router-dom';
import Headmentor from './headmentor';

const Profile = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/Homepage');
  };

  return (
    <>
      <Headmentor />
      <div className="profile-container-1">
        <div className='tegid-'>
          <span className='ID'>ID : 001 - 1230041</span>
          <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" className="backIDP" alt="Back" onClick={Home}/>
        </div>
        <main className="main-content">
          <section className="personal-info">
            <div className='personal-info-1'>
              <img src="https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-1/416585031_3715401108785511_1974351059273852608_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG1wm9EWugBi4MWRHi_m4yUX4nDOcUFac5ficM5xQVpzilf5WCuRzOuL5WEBp8ts0ITrQgmTnN7PkBnBAArQmok&_nc_ohc=e_WHAgkPl_gQ7kNvgEXNjXh&_nc_ht=scontent.furt1-1.fna&oh=00_AYBgsYkS4ds_JI_9PBqxz8taDslbzhKNwVej3cLlEc3zLg&oe=6670376C" alt="Profile" className="profile-picture" />
              <div className="info">
                <div className='dataz'>ข้อมูลส่วนตัว</div>
                <p><strong>ชื่อ - นามสกุล :</strong> นายธีรภัทร วั่นเล่ง</p>
                <p><strong>ชื่อเล่น :</strong> วั่นเล่ง</p>
                <p><strong>อายุ :</strong> 19 ปี</p>
                <p><strong>วันเกิด :</strong> 18 / 06 / 2548</p>
                <p><strong>สัญชาติ :</strong> ไทย ผสม เขมร ผสม พม่า</p>
                <p><strong>เบอร์มือถือ :</strong> 082-337-9677</p>
                <div className="pattern-container">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <div key={index} className="pattern-bar"></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="form-container-1">
            <div className="form-group">
              <label>ตำแหน่งที่สมัคร</label>
              <input type="text" placeholder='โปรดระบุ' className="form-control-1" />
            </div>
            <div className="form-group">
              <label>สถานศึกษาปัจจุบัน</label>
              <input type="text" placeholder='โปรดระบุ' className="form-control-1" />
            </div>
            <div className="form-group gpa-group">
              <label>GPA รวม</label>
              <div className="gpa-display">4.00</div>
            </div>
            <div className="form-group">
              <label>วันเดือนปีเริ่มฝึกงาน</label>
              <input type="date" className="form-control-1" />
            </div>
            <div className="form-group">
              <label>วันเดือนปีฝึกงานวันสุดท้าย</label>
              <input type="date" className="form-control-1" />
            </div>
          </div>
          <div className="form-body">
            <div className="form-left-1">
              <div className="form-section a">
                <a href="#resume">ดู Resume</a><img src="https://cdn-icons-png.flaticon.com/128/11102/11102425.png" className='Resume' alt="Resume" />
              </div>
              <div className="form-section">
                <a href="#transcript">ดู Transcript</a><img src="https://cdn-icons-png.flaticon.com/128/15175/15175732.png" className='Transcript' alt="Transcript" />
              </div>
              <div className="form-section">
                <a href="#additional-info">ดูประวัติส่วนตัวเพิ่มเติม</a><img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className='Profile' alt="Profile" />
              </div>
              <div className="form-section">
                <a href="#project-sample">ตัวอย่าง Project ที่เคยทำมา (โปรดส่งเป็นไฟล์ PDF)</a><img src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" className='Project' alt="Project" />
              </div>
              <div className="form-section">
                <a href="#github-link">ผลงาน link GitHub *ถ้ามี</a><img src="https://cdn-icons-png.flaticon.com/128/5678/5678562.png" className='Github' alt="Github" />
              </div>
            </div>
            <div className="form-right">
              <div className="form-goal">
                  <label className='target'>โปรดกรอกเป้าหมาย</label>
                <div className='please-1'></div>
              </div>
              <div className="form-checkboxes">
                <label>โปรดเลือกงานสายงานที่ถนัด</label>
                <div className='label-check'>
                  <div className='choosejob'>
                    <input type="checkbox" id="frontend" name="frontend" checked={true} readOnly/>
                    <label htmlFor="frontend">Frontend</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="data-analysis" name="data-analysis" checked={true} disabled/>
                    <label htmlFor="data-analysis">Data Analysis</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="backend" name="backend" checked={true} disabled/>
                    <label htmlFor="backend">Backend</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="full-stack" name="full-stack" checked={true} disabled/>
                    <label htmlFor="full-stack">Full Stack</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="data-management" name="data-management" checked={true} disabled/>
                    <label htmlFor="data-management">Data Management</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="other" name="other" checked={true} disabled/>
                    <label htmlFor="other">อื่นๆ</label>
                  </div>
                </div>
              </div>
              <div className="form-checkboxes">
                <label>โปรแกรมหรืองานที่ถนัด (3 อย่างที่ถนัดที่สุด)</label>
                <div className='label-check-2'>
                  <div className='choosejob'>
                    <input type="checkbox" id="figma" name="figma" checked={true} readOnly/>
                    <label htmlFor="figma">Figma </label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="vs-code" name="vs-code" checked={true} readOnly/>
                    <label htmlFor="vs-code">VS Code</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="react" name="react" checked={true} readOnly/>
                    <label htmlFor="react">React</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="sql-server" name="sql-server" checked={true} disabled/>
                    <label htmlFor="sql-server">SQL Server</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="php" name="php" checked={true} disabled/>
                    <label htmlFor="php">PHP</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="docker" name="docker" checked={true} disabled/>
                    <label htmlFor="docker">Docker</label>
                  </div>
                  <div className='choosejob'>
                    <input type="checkbox" id="other-tool" name="other-tool" checked={true} disabled/>
                    <label htmlFor="other-tool">อื่นๆ</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="footer-3">
        <p>ติดต่อสอบถาม DX Manpower Managemant</p>
        <p>คุณสุพรรษา ม. supansak@scg.com</p>
        <p>Digital Transformation Architect (Data Driven-TS)</p>
        <p>Created by Supansa M and Pantakit S & Developed by Phurin C</p>
        <p>©SCG 2024</p>
      </footer>
    </>
  );
};

export default Profile;
