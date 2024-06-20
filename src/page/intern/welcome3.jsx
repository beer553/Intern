import React from 'react';
import './welcome.css'
import { useNavigate } from 'react-router-dom';

function Welcome3() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const message = "OT Dashboard ";
    const projectData = {
        description: "โปรเจค A เป็นโปรเจคที่เกี่ยวกับการพัฒนาระบบการจัดการทรัพยากรบุคคลในองค์กร",
        startDate: "01/07/2024",
        endDate: "31/12/2024",
        team: ["John Doe", "Jane Smith", "David Brown"],
        imageUrl: "https://via.placeholder.com/150"
    };
    return (
        <div>
            <div className='head'>
                <div className='back'>
                    <img src="https://www.builk.com/th/wp-content/uploads/2019/05/scg-logo-n.jpg" alt="" className='logo-3' />
                </div>
                <div className='me'>
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="" className='me' />
                    <p className='myname'>My name</p>
                </div>
            </div>
            <div className='navbar'>
                <ul className='ul'>
                    <li><a href="">หน้าหลัก</a></li>
                    <li><a href="">สมัครฝึกงาน/สหกิจ</a></li>
                    <li><a href="">แก้ไขข้อมูลส่วนตัว</a></li>
                    <li><a href="">ออกจากระบบ</a></li>
                </ul>
            </div>
            <div className='back-button'>
                <button className='back-button-1' onClick={handleBack}>
                    <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
                </button>
            </div>
            <div className='project'>
                <button className='project-1' onClick={() => navigate('/welcome3')}>
                    Project
                </button>
            </div>
            <div className="message-container">
                <p className="message-project">{message}</p>
            </div>
            <div className="diamond-container-1">
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
            </div>
            <div className='project-details'>
                <div className='description-1'><h3>รายละเอียด Project</h3></div>
                    <div className='details-1'>
                        <p> {projectData.description}</p>
                        <p><strong>Start Date:</strong> {projectData.startDate}</p>
                        <p><strong>End Date:</strong> {projectData.endDate}</p>
                        <p><strong>Team:</strong> {projectData.team.join(', ')}</p>
                    </div>
            </div>
            <div className='project-details'>
                <div className='description-1'><h3>ภาพตัวอย่าง</h3></div>
                    <div className='details-2'>
                    <img src={projectData.imageUrl} alt={projectData.title} className='project-image' />
                    </div>
            </div>
            <div className='footnotee'>
                <p>ติดต่อสอบถาม New Way Of Work System</p>
                <p>คุณสุพรรษา ม. supansak@scg.com</p>
                <p>Digital Transformation Architect (Data Driven-TS)</p>
                <p>Created by Sunsa M and Pantakit S & Developed by Supanut K</p>
                <p className='p-1'>©SCG 2024</p>
            </div>
        </div>
    );
}

export default Welcome3;
