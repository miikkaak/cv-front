import '../styles/_footer.scss';
import { ReactComponent as LinkedIn} from '../img/linkedin.svg';
import { ReactComponent as GitHub} from '../img/github.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="socials">
                    <div className="hello title-size-medium">Socials</div>
                    <div className='socials-row'><a href='https://www.linkedin.com/in/miikkakivinen/'>{<LinkedIn/>}LinkedIn</a></div>
                    <div className='socials-row'><a href='https://github.com/miikkaak/'>{<GitHub/>}GitHub</a></div>
                </div>
                <div className="site-items">
                    <div className="hello title-size-medium">Site Items</div>
                    <div className="socials-row"><Link to='/'>Home</Link></div>
                    <div className="socials-row"><Link to='/experience'>Experience</Link></div>
                    <div className="socials-row"><Link to='/education'>Education</Link></div>
                    <div className="socials-row"><Link to='/projects'>Projects</Link></div>
                    <div className="socials-row"><Link to='/contact'>Contact</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;