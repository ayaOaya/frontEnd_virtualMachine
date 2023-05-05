import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { faPenToSquare } from "@fortawesome/free-solid-svg-icons" */
 import { faHouse } from "@fortawesome/free-solid-svg-icons" 
 import { faUser } from "@fortawesome/free-solid-svg-icons" 
 import { faClipboard } from "@fortawesome/free-solid-svg-icons" 
 import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons" 
 import { faFolderOpen } from "@fortawesome/free-solid-svg-icons" 
 import { faVideo } from "@fortawesome/free-solid-svg-icons" 
 import dashbordProps from '../Props/dashBordProps'

import "./style.scss"


const Dahbord = () => {
  return (
    <>
    <div className="dashbord">
      <div className="social-side-icons">
      <a  href="/"><FontAwesomeIcon icon={faHouse} className='icons-info-style'/></a> <br />
      <a href="/usersstatus"><FontAwesomeIcon icon={faUser} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faClipboard} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faEnvelopeOpen} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faFolderOpen} className='icons-info-style'/></a> <br />
      <a href=""><FontAwesomeIcon icon={faVideo} className='icons-info-style'/></a> <br />
      </div>

      <div className="dash-container">
        <div className="header-img"></div>
        <div className="header-image-titles"></div>
        <div className="dash-links">
          <ul className='dash-ul'>
            <li><a className='dash-li' href="">All Tasks</a></li>
            <li><a className='dash-li' href="">By Status</a></li>
            <li><a className='dash-li' href="">By Assigne</a></li>
            <li><a className='dash-li' href="">My Tasks</a></li>
            <li><a className='dash-li' href="">Due Dates</a></li>
          </ul>
        </div>

        <div className="dash-info-containerDivs">
          {/* Here add props to each*/}
          <div className="col1">
          {/* <dashbordProps /> */}
          <div className="title-col1">Back Log</div>
          <div className="eachDiv-container">
            <h2>Landing Page stuff</h2>

            <div className="contents-meeting">
              <div className="content1"></div>
              <div className="content2"></div>
              <div className="content3"></div>
            </div>
            <div className="profile-pics"></div>
          </div>

          </div>
          <div className="col2">
          <div className="title-col2">In Progress</div>
          <div className="eachDiv-container">
            <h2>Landing Page stuff</h2>

            <div className="contents-meeting">
              <div className="content1"></div>
              <div className="content2"></div>
              <div className="content3"></div>
            </div>
            <div className="profile-pics"></div>
          </div>

          </div>
          <div className="col3">
          <div className="title-col3">On Hold</div>

          <div className="eachDiv-container">
            <h2>Landing Page stuff</h2>
            <div className="contents-meeting">
              <div className="content1"></div>
              <div className="content2"></div>
              <div className="content3"></div>
            </div>
            <div className="profile-pics"></div>
          </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dahbord
{/* <FontAwesomeIcon icon={faPenToSquare} /> */}
