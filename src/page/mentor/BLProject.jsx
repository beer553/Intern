import React, { useState, useRef } from 'react';
import './BLProject.css';
import { useNavigate } from 'react-router-dom';
import Headmentor from './headmentor';
import ImageModal from './ImageModal';  // นำเข้า ImageModal component

const ProductBacklog = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate('/Homepage');
  };

  const GotoBL = () => {
    navigate('/PDBacklog');
  };

  const [tableData, setTableData] = useState([
    {
      order: 1,
      sprint: 1,
      datestart: "21/05/2547",
      dateend: "21/05/2547",
      type: "แก้ Assessment Report",
      detail: "ปรับข้อความจากไทยเป็นอังกฤษ",
      beforeImg: "/src/img/Siam_Cement_Group_Logo.svg.png",
      afterImg: "/src/img/Siam_Cement_Group_Logo.svg.png",
      manday: 1,
      responsible: "เจ,ซัน",
      status: "To do",
      increment: "21/05/2547",
      remark: "ด่วนๆ",
    }
  ]);

  const [newRow, setNewRow] = useState(null);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [orderCounter, setOrderCounter] = useState(tableData.length + 1); // Initialize counter
  const [modalImageUrl, setModalImageUrl] = useState(null); // State to manage modal image URL
  const beforeImgRef = useRef([]);
  const afterImgRef = useRef([]);

  const addRow = () => {
    setNewRow({
      order: orderCounter,
      sprint: "",
      datestart: "",
      dateend: "",
      type: "",
      detail: "",
      beforeImg: "",
      afterImg: "",
      manday: "",
      responsible: "",
      status: "",  // Default value for status
      increment: "",
      remark: ""
    });
  };

  const saveRow = () => {
    setTableData([...tableData, newRow]);
    setNewRow(null);
    setOrderCounter(orderCounter + 1); // Increment counter
  };

  const handleChange = (e, field, index = null) => {
    const value = e.target.value;  // Store value from event target
    if (index !== null) {
      const updatedTableData = tableData.map((row, i) =>
        i === index ? { ...row, [field]: value } : row
      );
      setTableData(updatedTableData);
    } else {
      setNewRow({ ...newRow, [field]: value });
    }
  };

  const handleImageChange = (e, field, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (index !== null) {
        const updatedTableData = tableData.map((row, i) =>
          i === index ? { ...row, [field]: imageUrl } : row
        );
        setTableData(updatedTableData);
      } else {
        setNewRow({ ...newRow, [field]: imageUrl });
      }
    }
  };

  const handleImageDelete = (field, index = null) => {
    if (index !== null) {
      const updatedTableData = tableData.map((row, i) =>
        i === index ? { ...row, [field]: "" } : row
      );
      setTableData(updatedTableData);
      if (field === 'beforeImg') {
        beforeImgRef.current[index].value = null;
      } else if (field === 'afterImg') {
        afterImgRef.current[index].value = null;
      }
    } else {
      setNewRow({ ...newRow, [field]: "" });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-EN', options);
  };

  const startEdit = (index) => {
    setEditRowIndex(index);
  };

  const saveEdit = () => {
    setEditRowIndex(null);
  };

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    <>
      <Headmentor />
      <div className="product-backlog">
        <main>
          <div className='h1-1'>ProductBacklog</div>
          <div className='h2-1'>น้องเจ,น้องณเดช,น้องไนท์</div>
          <div className='h3-1'>ระบบ KM</div>

          <div className='back-th-1'>
            <img src="https://cdn-icons-png.flaticon.com/128/318/318477.png" alt="ย้อนกลับ" className='back-1' onClick={GotoBL} />
          </div>

          <section className="backlog-table">
            <div className="table-container">
              <table className="fixed-table">
                <thead>
                  <tr className='table-2'>
                    <th>Number</th>
                    <th>Sprint</th>
                    <th>Notification date</th>
                    <th>Completion date</th>
                    <th>Type of work</th>
                    <th>Details</th>
                    <th>Before</th>
                    <th>After</th>
                    <th>Manday</th>
                    <th>Responsible Person</th>
                    <th>Status</th>
                    <th>Product Increment</th>
                    <th>Note</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      {editRowIndex === index ? (
                        <>
                          <td>{row.order}</td>
                          <td><input type="text" value={row.sprint} onChange={(e) => handleChange(e, 'sprint', index)} className='IP-1' /></td>
                          <td><input type="date" value={row.datestart} onChange={(e) => handleChange(e, 'datestart', index)} className='IP-2' /></td>
                          <td><input type="date" value={row.dateend} onChange={(e) => handleChange(e, 'dateend', index)} className='IP-2' /></td>
                          <td><input type="text" value={row.type} onChange={(e) => handleChange(e, 'type', index)} className='IP-1' /></td>
                          <td><input type="text" value={row.detail} onChange={(e) => handleChange(e, 'detail', index)} className='IP-1' /></td>
                          <td>
                            <label className="file-input">
                              <input
                                type="file"
                                onChange={(e) => handleImageChange(e, 'beforeImg', index)}
                                ref={el => beforeImgRef.current[index] = el}
                              />
                              {row.beforeImg ? (
                                <>
                                  <img src={row.beforeImg} alt="Before Preview" className='img-KM' onClick={() => openModal(row.beforeImg)} />
                                  <img src="https://cdn-icons-png.flaticon.com/128/14025/14025477.png" alt="Delete" className='delete-icon' onClick={() => handleImageDelete('beforeImg', index)} />
                                </>
                              ) : (
                                <img src="https://cdn-icons-png.flaticon.com/128/8371/8371357.png" alt="Upload" className='img-KM' />
                              )}
                            </label>
                          </td>
                          <td>
                            <label className="file-input">
                              <input
                                type="file"
                                onChange={(e) => handleImageChange(e, 'afterImg', index)}
                                ref={el => afterImgRef.current[index] = el}
                              />
                              {row.afterImg ? (
                                <>
                                  <img src={row.afterImg} alt="After Preview" className='img-KM' onClick={() => openModal(row.afterImg)} />
                                  <img src="https://cdn-icons-png.flaticon.com/128/14025/14025477.png" alt="Delete" className='delete-icon' onClick={() => handleImageDelete('afterImg', index)} />
                                </>
                              ) : (
                                <img src="https://cdn-icons-png.flaticon.com/128/8371/8371357.png" alt="Upload" className='img-KM' />
                              )}
                            </label>
                          </td>
                          <td><input type="text" value={row.manday} onChange={(e) => handleChange(e, 'manday', index)} className='IP-1' /></td>
                          <td><input type="text" value={row.responsible} onChange={(e) => handleChange(e, 'responsible', index)} className='IP-1' /></td>
                          <td>
                            <select value={row.status} onChange={(e) => handleChange(e, 'status', index)} className='IP-1'>
                              <option value="To do" className="option-todo">To do</option>
                              <option value="Done" className="option-done">Done</option>
                            </select>
                          </td>
                          <td><input type="date" value={row.increment} onChange={(e) => handleChange(e, 'increment', index)} className='IP-2' /></td>
                          <td><input type="text" value={row.remark} onChange={(e) => handleChange(e, 'remark', index)} className='IP-1' /></td>
                          <td>
                            <button onClick={saveEdit} className='save-button'>Save</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{row.order}</td>
                          <td>{row.sprint}</td>
                          <td>{formatDate(row.datestart)}</td>
                          <td>{formatDate(row.dateend)}</td>
                          <td>{row.type}</td>
                          <td>{row.detail}</td>
                          <td><img src={row.beforeImg} alt="Before" className='img-KM' onClick={() => openModal(row.beforeImg)} /></td>
                          <td><img src={row.afterImg} alt="After" className='img-KM' onClick={() => openModal(row.afterImg)} /></td>
                          <td>{row.manday}</td>
                          <td>{row.responsible}</td>
                          <td className={row.status === "To do" ? "option-todo" : "option-done"}>{row.status}</td>
                          <td>{formatDate(row.increment)}</td>
                          <td>{row.remark}</td>
                          <td>
                            <img src="https://cdn-icons-png.flaticon.com/128/11471/11471622.png" alt="Edit" className='edit-icon' onClick={() => startEdit(index)} />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                  {newRow && (
                    <tr>
                      <td>{newRow.order}</td>
                      <td><input type="text" value={newRow.sprint} onChange={(e) => handleChange(e, 'sprint')} className='IP-1' /></td>
                      <td><input type="date" value={newRow.datestart} onChange={(e) => handleChange(e, 'datestart')} className='IP-2' /></td>
                      <td><input type="date" value={newRow.dateend} onChange={(e) => handleChange(e, 'dateend')} className='IP-2' /></td>
                      <td><input type="text" value={newRow.type} onChange={(e) => handleChange(e, 'type')} className='IP-1' /></td>
                      <td><input type="text" value={newRow.detail} onChange={(e) => handleChange(e, 'detail')} className='IP-1' /></td>
                      <td>
                        <label className="file-input">
                          <input
                            type="file"
                            onChange={(e) => handleImageChange(e, 'beforeImg')}
                          />
                          {newRow.beforeImg ? (
                            <>
                              <img src={newRow.beforeImg} alt="Before Preview" className='img-KM' onClick={() => openModal(newRow.beforeImg)} />
                              <img src="https://cdn-icons-png.flaticon.com/128/14025/14025477.png" alt="Delete" className='delete-icon' onClick={() => handleImageDelete('beforeImg')} />
                            </>
                          ) : (
                            <img src="https://cdn-icons-png.flaticon.com/128/8371/8371357.png" alt="Upload" className='img-KM' />
                          )}
                        </label>
                      </td>
                      <td>
                        <label className="file-input">
                          <input
                            type="file"
                            onChange={(e) => handleImageChange(e, 'afterImg')}
                          />
                          {newRow.afterImg ? (
                            <>
                              <img src={newRow.afterImg} alt="After Preview" className='img-KM' onClick={() => openModal(newRow.afterImg)} />
                              <img src="https://cdn-icons-png.flaticon.com/128/14025/14025477.png" alt="Delete" className='delete-icon' onClick={() => handleImageDelete('afterImg')} />
                            </>
                          ) : (
                            <img src="https://cdn-icons-png.flaticon.com/128/8371/8371357.png" alt="Upload" className='img-KM' />
                          )}
                        </label>
                      </td>
                      <td><input type="text" value={newRow.manday} onChange={(e) => handleChange(e, 'manday')} className='IP-1' /></td>
                      <td><input type="text" value={newRow.responsible} onChange={(e) => handleChange(e, 'responsible')} className='IP-1' /></td>
                      <td>
                        <select value={newRow.status} onChange={(e) => handleChange(e, 'status')} className='IP-1'>
                          <option value="To do" className="option-todo">To do</option>
                          <option value="Done" className="option-done">Done</option>
                        </select>
                      </td>
                      <td><input type="date" value={newRow.increment} onChange={(e) => handleChange(e, 'increment')} className='IP-2' /></td>
                      <td><input type="text" value={newRow.remark} onChange={(e) => handleChange(e, 'remark')} className='IP-1' /></td>
                      <td>
                        <button onClick={saveRow} className='save-button'>Save</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {!newRow && (
              <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="Add" className='add-buttonz' onClick={addRow} />
            )}
          </section>
        </main>
        <footer className="footer-1">
          <p>ติดต่อสอบถาม DX Manpower Managemant</p>
          <p>คุณสุพรรษา ม. supansak@scg.com</p>
          <p>Digital Transformation Architect (Data Driven-TS)</p>
          <p>Created by Supansa M and Pantakit S & Developed by Phurin C</p>
          <p>©SCG 2024</p>
        </footer>
      </div>
      <ImageModal show={modalImageUrl !== null} imageUrl={modalImageUrl} onClose={closeModal} />
    </>
  );
};

export default ProductBacklog;
