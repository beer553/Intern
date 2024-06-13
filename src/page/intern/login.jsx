import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      toast.error("รหัสผ่านไม่ตรงกัน!");
      return;
    }
    setPasswordMatch(true);
    console.log('Email:', email);
    console.log('Password:', password);
    toast.success("สมัครรหัสเสร็จสิ้น");
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };
  return (
    <div className="login-containerr">
      <div className="image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png" alt="" className="image" />
      </div>
      <div className="logo-2">
        <img src="https://www.intersol-eng.com/wp-content/uploads/2017/09/scg-logo.jpg" alt="" className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-groupp">
          <p>ชื่อผู้ใช้งาน/อีเมลล์</p>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            
          />
        </div>
        <div className="form-groupp">
          <p>รหัสผ่าน</p>
          <div className="password-input-container">
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
        <div className="form-groupp">
          <p>ยืนยันรหัสผ่าน</p>
          <div className="password-input-container">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              value={confirmPassword} 
              onChange={handleConfirmPasswordChange} 
              required 
              placeholder="Confirm your password"
            />
            <button type="button" className='toggle-button' onClick={toggleConfirmPasswordVisibility}>
              <img 
                src={showConfirmPassword ? "https://cdn-icons-png.flaticon.com/128/8395/8395688.png" : "https://cdn-icons-png.flaticon.com/128/7794/7794218.png"} 
                alt={showConfirmPassword ? "Hide Password" : "Show Password"} 
              />
            </button> 
          </div>
        </div>
        {!passwordMatch && (
          <div className="error-message">รหัสผ่านไม่ตรงกัน</div>
        )}
        <div className='line'></div>
        <button className='submit' type="submit" >สมัคร</button>
      </form>
      <ToastContainer />      
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

export default Login;
