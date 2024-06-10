import React, { useState } from 'react';
import  './benefit.css';
import Navbar from './navbar'; 


function Benefit() {
    return (
        <>
            <Navbar />
            <div className='benefit-contailer'>
                <div className='head-2'>
                    <h3 className='head-3'>รายละเอียดและสวัสดิการตามที่บริษัทกำหนด</h3>
                </div>
                <div className='benefit-1'>
                    <div><p>1.เบี้ยเลี้ยง</p></div>
                    <div><p>2.ค่าเดินทาง</p></div>
                    <div><p>3.ที่พัก</p></div>
                    <div><p>4.ประกันอุบัติเหตุ วงเงิน400,000บาท</p></div>
                    <div><p>5.สวัสดิการด้านการรักษาพยาบาลในสถานพยาบาลปูนทุ่งสง</p></div>
                </div>       
                <div className='redline'></div>   
                
                
                
                
            </div>
        </>
    );
}

export default Benefit;
