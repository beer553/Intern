import React from 'react';
import './ImageModal.css'; // นำเข้า CSS สำหรับ modal

const ImageModal = ({ show, imageUrl, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Large Preview" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
