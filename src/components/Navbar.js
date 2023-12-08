import BrandLogo from '../images/BrandLogo.jpg'
import "./BrandStyle.css";

const Navbar = () =>{
 return(
  <div className="nav">
    <div className="logo">
      <img className="image-logo" src={BrandLogo} alt='BrandLogo'></img>
    </div>
    <div>
      <ul className='menu-list'>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </div>
    <div>
      <button className='login-button'>Login</button>
    </div>

  </div>
 )
}

export default Navbar;