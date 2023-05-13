import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faFolderOpen, faUsers,faNewspaper,faVideo } from "@fortawesome/free-solid-svg-icons";
import "./info.scss"

const Info = () => {
  return (
    <>
      <div className="info">
        <h1 className="title">Flexible solutions for modern team collabration</h1>

        <div className="grid-info">

        <div className="btns-list">
            <button className="btn1 btn">Zoom one</button> <br />  <br />
            <button className="btn2 btn">Spaces</button>  <br /> <br />
            <button className="btn3 btn">Events</button> <br /> <br />
            <button className="btn4 btn">Contact center</button> <br /> <br />
            <button className="btn5 btn">Devolepers</button> <br /><br /> <br />
        </div>

        <div className="platform-info-icons">

           <div className="platform-info">
           <h2 className="title-platform-info">Unfied communication and collaboration platform</h2>
            <p className="desc-platform-info">Lorem ipsum  amet consectetur adipisicing elit. Repellendus aliquam sint, deleniti ducimus officiis  eaque, ad quasi Corrupti at similique neque eveniet.</p>
            <button className="joinUs-platform-info"><a href="">sign up to platform</a></button>
           </div>

           <div className="platform-icons">

           <div className="icons-container">
           <FontAwesomeIcon icon={faPaperPlane} className='icons'/>
           <br />
           <FontAwesomeIcon icon={faFolderOpen} className='icons'/>
           <br />
           <FontAwesomeIcon icon={faUsers} className='icons'/>
           <br />
           <FontAwesomeIcon icon={faNewspaper} className='icons'/>
           <br />
           <FontAwesomeIcon icon={faVideo} className='icons'/> 
           <br />   
            </div>    

           </div>
        </div>

        <div className="bg-img-info"></div>
        </div>
      </div>
    </>
  )
}

export default Info