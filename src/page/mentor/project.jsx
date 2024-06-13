import React, { useState } from 'react';
import './project.css';
import { useNavigate } from 'react-router-dom';

function Project() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState({
        startDate: '',
        endDate: '',
        projectName: '',
        manager: '',
        status: '',
        plan: ''
    });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleBack = () => {
        navigate(-1);
    };
    const handleAddProject = () => {
        setShowForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
        setShowForm(false);
        setNewProject({
            startDate: '',
            endDate: '',
            projectName: '',
            manager: '',
            status: '',
            plan: ''
        });
    };
    const handleAssignProject = () => {
        navigate('/assignproject'); 
    };

    return (
        <div className="project-container">
            <div className='menu-logo-container'>
                <button onClick={toggleMenu} className="menu-button"></button>
                <img className='logo-4' src="https://www.builk.com/th/wp-content/uploads/2019/05/scg-logo-n.jpg" alt="" />
                <input type="text" className="search-input" placeholder="Search..." />
                <div className="user-info">
                    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="User Image" className="user-image" />
                    <span className="username-2">Username</span>
                </div>
            </div>
            <nav className={`menu ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </nav>
            <div className='back-button'><button className='back-button-1' onClick={handleBack}><img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" /></button></div>
            <div className='projectadd'>
                    <div className='projectimg'><img className='projectimg-1' src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" alt="" /></div>
                    <div className='projecttext'><h1 className='projecttext-1'>Project</h1></div>
                    <div className='add-button-text'><h3 className='add-button-text-1'>Add Project </h3></div>
                    <div className='add-button'>
                        <button className='add-button-1' onClick={handleAddProject}>
                            <img className='add-button-2' src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="" />
                        </button>
                    </div>  
            </div>
            {showForm && (
                <div className='form-container'>
                    <form onSubmit={handleSubmit} className='project-form'>
                        <div className='form-fields'>
                            <label>
                                วันที่เริ่ม:
                                <input type="date" name="startDate" value={newProject.startDate} onChange={handleInputChange} required />
                            </label>
                            <label>
                                กำหนดรับ:
                                <input type="date" name="endDate" value={newProject.endDate} onChange={handleInputChange} required />
                            </label>
                            <label>
                                ชื่อโปรเจค:
                                <input type="text" name="projectName" value={newProject.projectName} onChange={handleInputChange} required />
                            </label>
                            <label>
                                ผู้ดูแล:
                                <input type="text" name="manager" value={newProject.manager} onChange={handleInputChange} required />
                            </label>
                            <label>
                                สถานะ:
                                <select name="status" value={newProject.status} onChange={handleInputChange} className='status-dropdown' required>
                                    <option value="">โปรดเลือก</option>
                                    <option value="เริ่มต้น">เริ่มต้น</option>
                                    <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
                                    <option value="เสร็จสิ้น">เสร็จสิ้น</option>
                                    <option value="ยกเลิก">ยกเลิก</option>
                                </select> 
                            </label>
                            <label>
                                แผนงาน:
                                <input type="text" name="plan" value={newProject.plan} onChange={handleInputChange} required />
                            </label>
                        </div>
                        <button type="submit" className='form-submit-button'>เพิ่มโปรเจค</button>
                    </form>
                </div>
            )}
            <div className='project-details-1'>
                <table className='project-table'>
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>วันที่เริ่ม</th>
                            <th>กำหนดรับ</th>
                            <th>ชื่อโปรเจค</th>
                            <th>ผู้ดูแล</th>
                            <th>สถานะ</th>
                            <th>แผนงาน</th>
                            <th>มอบหมายผู้รับผิดชอบ</th>
                        </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>{project.projectName}</td>
                                <td>{project.manager}</td>
                                <td style={{ color: project.status === 'เริ่มต้น' ? 'blue' : project.status === 'กำลังดำเนินการ' ? 'orange' : project.status === 'เสร็จสิ้น' ? 'green' : project.status === 'ยกเลิก' ? 'red' : 'inherit' }}>{project.status}</td>
                                <td>{project.plan}</td>
                                <td><button onClick={handleAssignProject} className='assign-responsible-button'><img src="https://cdn-icons-png.flaticon.com/128/12105/12105258.png" alt="Assign" /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <div className='footnote'>
                    <p>ติดต่อสอบถาม New Way Of Work System</p>
                    <p>คุณสุพรรษา ม. supansak@scg.com</p>
                    <p>Digital Transformation Architect (Data Driven-TS)</p>
                    <p>Created by Sunsa M and Pantakit S & Developed by Supanut K</p>
                    <p className='p-1'>©SCG 2024</p>
                </div>
        </div>
    );
}

export default Project;
