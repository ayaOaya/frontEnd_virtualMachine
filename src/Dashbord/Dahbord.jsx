import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { faPenToSquare } from "@fortawesome/free-solid-svg-icons" */
 import { faHouse } from "@fortawesome/free-solid-svg-icons" 
 import { faUser } from "@fortawesome/free-solid-svg-icons" 
 import { faClipboard } from "@fortawesome/free-solid-svg-icons" 
 import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons" 
 import { faFolderOpen } from "@fortawesome/free-solid-svg-icons" 
 

import "./style.scss"


const Dahbord = () => {
  return (
    <>
    <div className="dashbord">
      <div className="social-side-icons">
      <a  href="/"><FontAwesomeIcon icon={faHouse} className='icons-info-style'/></a> <br />
      <a href="/"><FontAwesomeIcon icon={faUser} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faClipboard} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faEnvelopeOpen} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faFolderOpen} className='icons-info-style'/></a> <br />
      </div>

      <div className="dash-container">
        <div className="header-img"></div>
        <div className="header-image-titles"></div>
        <div className="dash-links">
          <ul className='dash-ul'>
            <li><a className='dash-li' href="">All tasks</a></li>
            <li><a className='dash-li' href="">By status</a></li>
            <li><a className='dash-li' href="">By assigne</a></li>
            <li><a className='dash-li' href="">My tasks</a></li>
            <li><a className='dash-li' href="">Due Dates</a></li>
          </ul>
        </div>

        <div className="dash-info-containerDivs">
          <div className="col1"></div>
          <div className="col2"></div>
          <div className="col3"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dahbord
{/* <FontAwesomeIcon icon={faPenToSquare} /> */}