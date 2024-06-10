import React, { useState } from 'react';
import './Doc.css'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Doc2() {
    const navigate = useNavigate();
    const [pdfFiles, setPdfFiles] = useState(Array(7).fill(null)); 
    const [pngFile, setPngFile] = useState(null); 

    const handleFileChange = (event, index) => {
        const selectedFile = event.target.files[0];
        if (index !== 'png' && selectedFile.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newPdfFiles = [...pdfFiles];
                newPdfFiles[index] = { name: selectedFile.name, data: e.target.result };
                setPdfFiles(newPdfFiles);
            };
            reader.readAsDataURL(selectedFile);
        } else if (index === 'png' && selectedFile.type === 'image/png') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPngFile({ name: selectedFile.name, data: e.target.result });
            };
            reader.readAsDataURL(selectedFile);
        } else {
            alert('โปรดเลือกไฟล์ที่ถูกต้อง');
        }
    };

    const handleSubmit = () => {
        pdfFiles.forEach((file, index) => {
            console.log(`PDF File ${index + 1}:`, file);
        });
        if (pngFile) {
            console.log('PNG File:', pngFile);
        }
        navigate('/doc3'); 
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Navbar />
            <div className="docconterler">
                <div className='head-2'><h3 className='head-3'>เอกสารที่ใช้</h3></div>
                {[...Array(7)].map((_, index) => (
                    <div className='uplode' key={index}>
                        {index === 0 && <p>หนังสือขอความอนุเคราะห์เข้าฝึกงาน</p>}
                        {index === 1 && <p>สำเนาทะเบียนบ้าน พร้อมรับรองสำเนาถูกต้อง</p>}
                        {index === 2 && <p>สำเนาบัตรประชาชน พร้อมรับรองสำเนาถูกต้อง</p>}
                        {index === 3 && <p>สำเนาบัญชีธนาคารสำหรับโอนเงินเบี้ยเลี้ยง พร้อมรับรองสำเนาถูกต้อง</p>}
                        {index === 4 && <p>สัญญาฝึกงาน</p>}
                        {index === 5 && <p>เอกสารสัญญารักษาความลับ</p>}
                        {index === 6 && <p>เอกสารใบแต่งตั้งผู้รับผลประโยชน์</p>}
                        <input className='inputuplode'
                            type="file"
                            onChange={(event) => handleFileChange(event, index)}
                            accept=".pdf"
                        />
                        <div className="upload-status">
                            {pdfFiles[index] ? (
                                <span className="icon green">&#10004;</span> 
                            ) : (
                                <span className="icon red">&#10008;</span> 
                            )}
                        </div>
                        {pdfFiles[index] && (
                            <div className="pdf-file">
                                <p>{pdfFiles[index].name}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className='uplode'>
                    <p>เลือกรูปถ่ายหน้าตรงสำหรับทำบัตรนักศึกษาฝึกงาน (ไฟล์ PNG)</p>
                    <input className='inputuplode'
                        type="file"
                        onChange={(event) => handleFileChange(event, 'png')}
                        accept=".png"
                    />
                    <div className="upload-status">
                        {pngFile ? (
                            <span className="icon green">&#10004;</span> 
                        ) : (
                            <span className="icon red">&#10008;</span> 
                        )}
                    </div>
                    {pngFile && (
                        <div className="png-file">
                            <p>{pngFile.name}</p>
                        </div>
                    )}
                </div >
                   <div className='button-4'>
                        <div className='button-3'><button className='button-2' onClick={handleSubmit}>ยืนยัน</button></div>
                        <div className='back-button'><button className='back-button-1' onClick={handleBack}><img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="Back" /></button></div>
                   </div>
            </div>
        </>
    );
}

export default Doc2;
