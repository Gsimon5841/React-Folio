import './index.scss'
import S from '../../assets/images/logo-s.png'  
import LogoSimon from '../../assets/images/logo-simon.png'
import{ FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={S} alt = "logo"  />
            <img className='sub-logo' src={LogoSimon} alt = "Georges Simon"  />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
            </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/georges-simon-40463398/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Gsimon5841?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar