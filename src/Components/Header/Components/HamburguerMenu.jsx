import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const HamburguerMenu = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowOptions(false)
  }

  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  };

  return (
    <div className="container-fluid">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
        className="icon icon-hamburger" fill="none" viewBox="0 0 18 16"
        height="30" width="30" style={{ cursor: "pointer" }}
        onClick={toggleMenu}>
        <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 
        010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
          fill="currentColor" >
        </path></svg>

      <div className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`} tabIndex="-1" aria-labelledby="HamburguerMenu">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>
        </div>

        <div className="" onClick={() => navigate("/prueba-frontend-react/")} style={{ cursor: "pointer" }}>
          <span className="menu-item d-flex justify-content-between align-items-center">

            <p className="title-item">Volver a Mujer</p>

            <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10578 15.075L16.0658 8.455C16.1158 8.405 16.1458 8.335 16.1458 8.265C16.1458 8.195 16.1158 8.125
                16.0558 8.075C15.9458 7.975 15.7758 7.975 15.6658 8.075L8.50578 14.885C8.45578 14.935 8.42578 15.005 8.42578 
                15.075C8.42578 15.145 8.45578 15.215 8.50578 15.265L15.8058 21.935C15.8558 21.985 15.9258 22.005 15.9958 22.005C16.0658
                22.005 16.1458 21.975 16.1958 21.925C16.2458 21.875 16.2758 21.805 16.2758 21.735C16.2758 21.665 16.2458 21.595 16.1958
                21.545L9.09578 15.055L9.10578 15.075Z"
                fill="black" stroke="black" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
          <hr />
        </div>

        <div className="" onClick={handleShowOptions} style={{ cursor: "pointer" }}>
          <span className="menu-item d-flex justify-content-between align-items-center">

            <p className="title-item">Herencia Verde</p>

            <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.77 14.745L8.47 8.075C8.36 7.975 8.19 7.975 8.08 8.075C8.03 8.125 8 8.195 8 8.265C8 
              8.335 8.03 8.405 8.08 8.455L15.18 14.945L8.22 21.565C8.17 21.615 8.14 21.685 8.14 21.755C8.14 21.825 
              8.17 21.895 8.22 21.945C8.27 21.995 8.34 22.015 8.41 22.015C8.48 22.015 8.56 21.985 8.61 21.935L15.77 
              15.125C15.82 15.075 15.85 15.005 15.85 14.935C15.85 14.865 15.82 14.795 15.77 14.745Z"
                fill="black" stroke="black" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
          <hr />

          {showOptions && (
            <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
              <li style={{ marginBottom: "10px" }}>Alejandro Crocker</li>
              <li style={{ marginBottom: "10px" }}>Alitza Garcia</li>
              <li style={{ marginBottom: "10px" }}>Camilo Franco</li>
            </ul>
          )}


        </div>

      </div>
    </div>
  )
}


