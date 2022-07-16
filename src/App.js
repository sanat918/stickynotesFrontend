import {React,useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './components/Home';
import  NotesHome  from './components/NotesHome';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer'





export default function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }



  return (
    <>

    <div className="container">
    <NoteState showAlert={showAlert}>
    <Router>
    <Navbar title="StickyNotes" showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div className="container">

    <Routes>  
         <Route exact path="/"   element={<Home showAlert={showAlert}/> } />
         <Route exact path="/Home"   element={<Home showAlert={showAlert}/>}  /> 
         <Route exact path="/NotesHome"   element={<NotesHome showAlert={showAlert}/>}  />
         <Route exact path="/About"   element={<About showAlert={showAlert}/>} />
         <Route exact path="/Login"   element={<Login showAlert={showAlert}/>}  /> 
         <Route exact path="/Signup"  element={<Signup showAlert={showAlert}/>} />
      </Routes>  

    </div>
    <Footer name="Sanat Jain"/>
     </Router> 
     </NoteState>
   </div>
    </>
  )
}
