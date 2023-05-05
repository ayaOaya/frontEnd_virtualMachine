import SignUp from "../src/UsersInfo/signUp/SignUp"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import LogIn from "./UsersInfo/logIn/LogIn";
import Dahbord from "./UsersInfo/Dashbord/Dashbord";
import PublicPage from "./UsersInfo/PublicPage/PublicPage";
import UsersStatus from "./UsersInfo/UsersStatus/UsersStatus";
import NotesList from "./features/notes/notesList";
import UsersLists from "./features/users/usersLists";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
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



    <Route element={<Prefetch />}>

    <Route path="/users" >
      <Route index element={<UsersLists />} />
      <Route path=":id" element={<EditUser />} />
      <Route path="new" element={<NewUserForm />} />
      </Route>

      <Route path="/notes" >
      <Route index element={<NotesList />} />
      <Route path=":id" element={<EditNote />} />
      <Route path="new" element={<NewNote />} />
      </Route>

    </Route>
      
      </Routes>

      </Router>
    </>
  )
}
export default App   