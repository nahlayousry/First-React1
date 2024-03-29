import React from 'react'
import { Link ,NavLink} from 'react-router-dom'


export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed fixed-top p-4">
  <div className="container">
    <Link className="navbar-brand footfont" to={"start"}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive  ?"nav-link test":"nav-link"} to={"about"}>About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=>isActive  ?"nav-link test":"nav-link"} to={"contact"}>Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=>isActive  ?"nav-link test":"nav-link"} to={"portfolio"}>Portfolio</NavLink>
        </li>

       </ul>
          
    </div>
  </div>
</nav>
    </>
  )
}
