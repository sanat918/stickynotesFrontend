import React from 'react'
import PropTypes from 'prop-types'
import { Link,useLocation, useNavigate} from 'react-router-dom';


function Navbar(props) {
  const {showAlert}=props
    let location=useLocation();
  //for handling logout
    const navigate=useNavigate();
  const handleLogout=()=>{
    window.sessionStorage.removeItem('token');
    navigate("/Home")
    showAlert("Logout successfully","success")
  }    

  return (
   
    <div className="container-fullwidth" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to={window.sessionStorage.getItem('token')?"/NotesHome":"/Home"}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      <li className="nav-item">
       <Link className={`nav-link ${location.pathname==="/Home" ? "active":"" }`} aria-current="page" to={window.sessionStorage.getItem('token')?"/NotesHome":"/Home"}>Home</Link>
       </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/About" ? "active":"" }`} aria-current="page" to="/About">About</Link>
        </li>
      </ul>

               {!window.sessionStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}

    </div>
  
   </div>

</nav>

    </div>

  )
}

export default Navbar
Navbar.prototype={name: PropTypes.string.isrequired}
Navbar.defaultProps = { title: 'Title' };
