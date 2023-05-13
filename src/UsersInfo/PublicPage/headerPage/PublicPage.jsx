import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCalendarPlus, faUser, faBell} from "@fortawesome/free-solid-svg-icons" 
import "./style.scss"
import Info from '../info/Info'


const PublicPage = () => {
  return (
    <>
        <div className="public-page">
          <nav className="navbar">
            <h2 className="logo">VR</h2>
            <ul>
              <li className="li"><a href="/">link</a></li>
              <li className="li"><a href="/">link</a></li>
              <li className="li"><a href="/">link</a></li>
              <li className="li"><a href="/">link</a></li>
            </ul>
            
           <div className="nav-btn-join">
           <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
            <button className="join"><a href="/">Join</a></button>
           </div>
          </nav>

          <div className="header">
            <h1 className="title">ONE PLATFORM <br /> TO INNOVATE </h1>
            <button className="signUp"><a href="/">Sign Up it's free</a></button>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit Sequi est iste,  natus nostrum minus qui modi <br /> aperiam cumque, hic officia ipsam obcaecati quidem, maxime neque</p>
            <div className="headers-icons">
            <FontAwesomeIcon icon={faCalendarPlus} />
            <FontAwesomeIcon icon={faUser}  className='user-icon'/>
            </div>

            <div className="second-parag">
          
           <FontAwesomeIcon icon={faBell} />
            <p className="sec-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <button className="register"><a href="/">Register now</a></button>
            </div>
          </div>
        </div>
        <Info />
    </>
  )
}

export default PublicPage