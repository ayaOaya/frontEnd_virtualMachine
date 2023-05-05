import SignUp from "../src/UsersInfo/signUp/SignUp"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import LogIn from "./UsersInfo/logIn/LogIn";
import Dahbord from "./UsersInfo/Dashbord/Dashbord";
import PublicPage from "./UsersInfo/PublicPage/PublicPage";
import UsersStatus from "./UsersInfo/UsersStatus/UsersStatus";
import NotesList from "./features/notes/NotesList";
import UsersLists from "./features/users/usersLists";
import './App.css'


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical',
  gestureDirection: 'vertical', 
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

function App() {
  return (
    <>
    <Router>

    <Link to='/'></Link>
    <Link to="/login"></Link>

      <Routes>

      <Route path="/" element={<PublicPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dash" element={<Dahbord />} />
      <Route path="/usersstatus" element={<UsersStatus />} />

      <Route path="/notes" >
      <Route index element={<NotesList />} />
      </Route>

      <Route path="/users" >
      <Route index element={<UsersLists />} />
      </Route>
      
      </Routes>

      </Router>
    </>
  )
}

export default App