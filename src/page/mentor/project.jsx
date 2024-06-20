import React, { useState, useEffect } from 'react';
import './project.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Headmentor from './headmentor';

function Project() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedProject = location.state ? location.state.project : null;
    const [showMenu, setShowMenu] = useState(false);
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('สุพรรษา มูลศิริ');
    const [editProjectId, setEditProjectId] = useState(null);
    const [selectedProfiles, setSelectedProfiles] = useState([]);

    const [newProject, setNewProject] = useState({
        startDate: '',
        endDate: '',
        projectName: '',
        manager: loggedInUser,
        status: '',
        plan: ''
    });

    useEffect(() => {
        const initialProjects = [
            { id: 1, startDate: '2024-01-01', endDate: '2024-06-01', projectName: 'Alpha', manager: 'สุพรรษา มูลศิริ', status: 'เริ่มต้น', plan: 'Plan A' },
            { id: 2, startDate: '2024-02-01', endDate: '2024-07-01', projectName: 'Beta', manager: 'สุพรรษา มูลศิริ', status: 'กำลังดำเนินการ', plan: 'Plan B' },
            { id: 3, startDate: '2024-03-01', endDate: '2024-08-01', projectName: 'Gamma', manager: 'สุพรรษา มูลศิริ', status: 'เสร็จสิ้น', plan: 'Plan C' },
            { id: 4, startDate: '2024-04-01', endDate: '2024-09-01', projectName: 'Delta', manager: 'สุพรรษา มูลศิริ', status: 'ยกเลิก', plan: 'Plan D' },
            { id: 5, startDate: '2024-05-01', endDate: '2024-10-01', projectName: 'Intern', manager: 'สุพรรษา มูลศิริ', status: 'เริ่มต้น', plan: 'Plan E' }
        ];

        if (location.state && location.state.selectedProfiles) {
            setSelectedProfiles(location.state.selectedProfiles);
        }else {
            setSelectedProfiles([]); // ถ้าไม่มี selectedProfiles ที่ส่งมากับ location.state ให้ตั้งค่าเป็น []
        }

        setProjects(initialProjects);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleAddProject = () => {
        setShowForm(true);
    };

    const handleEditProject = (projectId) => {
        const projectToEdit = projects.find(project => project.id === projectId);
        
        setNewProject({
            startDate: projectToEdit.startDate,
            endDate: projectToEdit.endDate,
            projectName: projectToEdit.projectName,
            manager: projectToEdit.manager,
            status: projectToEdit.status,
            plan: projectToEdit.plan
        });
        
        setEditProjectId(projectId);
        setShowForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (editProjectId !== null) {
            const updatedProjects = projects.map(project => {
                if (project.id === editProjectId) {
                    return {
                        ...project,
                        startDate: newProject.startDate,
                        endDate: newProject.endDate,
                        projectName: newProject.projectName,
                        status: newProject.status,
                        plan: newProject.plan
                    };
                }
                return project;
            });
            setProjects(updatedProjects);
        } else {
            setProjects([...projects, { ...newProject, id: projects.length + 1, manager: loggedInUser }]);
        }
        
        setNewProject({
            startDate: '',
            endDate: '',
            projectName: '',
            manager: loggedInUser, 
            status: '',
            plan: ''
        });
        setEditProjectId(null);
        setShowForm(false);
    };

    const handleAssignProject = (projectId) => {
        const project = projects.find(project => project.id === projectId);
        navigate('/assignproject', { state: { project, selectedProfiles } });
    };
    
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('th-TH', options);
    };

    return (
        <>
            <Headmentor />
            <div className="project-container">
                <div className='back-button'>
                    <button className='back-button-1' onClick={handleBack}>
                        <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" />
                    </button>
                </div>
                <div className='projectadd'>
                    <div className='add-button'>
                        <button className='add-button-1' onClick={handleAddProject}>
                            <img className='add-button-2' src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="" />
                        </button>
                    </div>  
                    <div className='add-button-text'>
                        <h3 className='add-button-text-1'>Add Project</h3>
                    </div>
                    <div className='projecttext'>
                        <h1 className='projecttext-1'>My Project</h1>
                    </div>
                    
                </div>
                {showForm && (
                    <div className='form-container'>
                        <form onSubmit={handleSubmit} className='project-form'>
                            <div className='form-fields'>
                                <label>
                                    Start Date:
                                    <input type="date" name="startDate" value={newProject.startDate} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    End Date:
                                    <input type="date" name="endDate" value={newProject.endDate} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Project Name:
                                    <input type="text" name="projectName" value={newProject.projectName} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Srcum Master:
                                    <input type="text" name="manager" value={newProject.manager} onChange={handleInputChange} disabled />
                                </label>
                                <label>
                                    Status:
                                    <select name="status" value={newProject.status} onChange={handleInputChange} className ='status-dropdown' required>
                                        <option value="">โปรดเลือก</option>
                                        <option value="เริ่มต้น">เริ่มต้น</option>
                                        <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
                                        <option value="เสร็จสิ้น">เสร็จสิ้น</option>
                                        <option value="ยกเลิก">ยกเลิก</option>
                                    </select>
                               </label>
                                <label>
                                    Action Plan:
                                    <input type="text" name="plan" value={newProject.plan} onChange={handleInputChange} required />
                                </label>
                            </div>
                            <button type="submit" className='form-submit-button'> {editProjectId !== null ? 'Save Changes' : 'Add Project'}</button>
                        </form>
                    </div>
                )}
                    <div className='project-details-1'>
                        {projects.length === 0 ? (
                            <p className='no-projects-message'>ไม่มีโปรเจคในขณะนี้</p>
                        ) : (
                            <table className='project-table'>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Edit</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Project Name</th>
                                        <th>Scrum Master</th>
                                        <th>Status</th>
                                        <th>Action Plan</th>
                                        <th>Team Develop</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td>{project.id}</td>
                                            <td>
                                                <button onClick={() => handleEditProject(project.id)} className='edit-button'>
                                                    <img className='editproject' src="https://cdn-icons-png.flaticon.com/128/11471/11471622.png" alt="Edit" />
                                                </button>
                                            </td>
                                            <td>{formatDate(project.startDate)}</td>
                                            <td>{formatDate(project.endDate)}</td>
                                            <td>{project.projectName}</td>
                                            <td>{project.manager}</td>
                                            <td style={{ color: project.status === 'เริ่มต้น' ? 'blue' : project.status === 'กำลังดำเนินการ' ? 'orange' : project.status === 'เสร็จสิ้น' ? 'green' : project.status === 'ยกเลิก' ? 'red' : 'inherit' }}>{project.status}</td>
                                            <td>{project.plan}</td>
                                            <td>
                                                <button onClick={() => handleAssignProject(project.id)} className='assign-responsible-button'>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Assign" />
                                                    <ul className='choose-Intern-2'>
                                                        {selectedProfiles.length > 0 && project.id === selectedProject?.id && (
                                                            selectedProfiles.map(profile => (
                                                                <li key={profile.id} className='choose-Intern-3'>
                                                                    {profile.nickname} - {profile.fullName}
                                                                </li>
                                                            ))
                                                        )}
                                                    </ul>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
    }
export default Project;
                                        
