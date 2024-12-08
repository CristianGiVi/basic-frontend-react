import { useState } from "react"


export const HamburguerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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
        <div className="offcanvas-body container-fluid" onClick={toggleMenu} style={{ cursor: "pointer" }}>
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
        </div>

      </div>
    </div>
  )
}
