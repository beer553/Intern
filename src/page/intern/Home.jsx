import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);    
        navigate('/benefit');
    }
    const handleForgotPassword = () => {
        alert("รีเซ็ตรหัสผ่าน");
    };
    const goToLoginPage = () => {
        navigate('/login');
    };

    return (
        <div className='login-containerpage'>
            <div className='login-container'>         
                <div className='left-container'>
                    <img className='scg' src="https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/445413337_964815818471607_5664988058450934305_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5eD4tWNZqvXIo-4g6N2dvuInB0RZavOS4icHRFlq85GRKoHSuklyp7AWDtlFhGXhHyrEOHtm36szSrmPcNHXY&_nc_ohc=FE6XvCCiB1kQ7kNvgHTxsf_&_nc_ht=scontent.furt1-1.fna&oh=00_AYDWVx5GfABgx3lxWq7_KRZnZNe5Eq09HRMjLHJdbrJa4w&oe=666C8AD9" alt="SCG" />
                </div>
                <div className='right-container'>
                    <div className='content'>
                        <h1 className='text1'>New Way <br />Of Work System</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className='username'><p>ชื่อผู้ใช้งาน/อีเมลล์</p></div>
                                <input className='user'
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required   
                                    placeholder='Username/Email'  
                                />
                            </div> 
                            <div className="form-group">
                                <p className='password'>รหัสผ่าน</p>
                                <div className="password-input-container-2">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        value={password} 
                                        onChange={handlePasswordChange} 
                                        required 
                                        placeholder="Enter your password"
                                    />         
                                    <button type="button" className='toggle-button' onClick={togglePasswordVisibility}>
                                        <img 
                                            src={showPassword ? "https://cdn-icons-png.flaticon.com/128/8395/8395688.png" : "https://cdn-icons-png.flaticon.com/128/7794/7794218.png"} 
                                            alt={showPassword ? "Hide Password" : "Show Password"} 
                                        />
                                    </button> 
                                </div>         
                            </div>
                            <button className='submitt' type="submit">เข้าสู่ระบบ</button>
                        </form>
                        <button type="button" className="forgot-password" onClick={handleForgotPassword}>ลืมรหัสผ่าน</button>
                        <div className='linee'></div>
                        <button className="register" type="button" onClick={goToLoginPage}>สมัครนักศึกษา</button>
                    </div>
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

export default Home;
