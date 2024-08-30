import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  function show(){
    const menu = document.querySelector('.items__menu')
    menu.classList.toggle('active')
  }

  return (
    <>
      <div className="navbar__container">
        <h1 className="navbar__logo">VILLA</h1>
        <ul className="navbar__items">
          <li className="item"><Link to='/' >Home</Link></li>
          <li className="item"><Link to='/properties' >Properties</Link></li>
          <li className="item"><Link to="/PropertyDetails">Property Details</Link></li>
          <li className="item"><Link to="/Contact">Contact Us</Link></li>
          <div className="navbar__items__btn"><i class='fas fa-calendar'></i><a href="">Schedule a visit</a></div>
        </ul>

        <button className='menu__btn' onClick={show}><i className='fas fa-bars'></i></button>
        </div>
        
          <ul className="items__menu">
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/properties' >Properties</Link></li>
              <li><Link to="/PropertyDetails">Property Details</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
              <li><a href="">Schedule a Visit</a></li>
          </ul>
    

    
  </>
  )
}

export default Navbar