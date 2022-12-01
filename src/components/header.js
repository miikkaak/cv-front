import { useState } from 'react';
import '../styles/_header.scss'
import { ReactComponent as Burger} from '../img/burger.svg';
import { ReactComponent as Close} from '../img/x.svg';
import { Link } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="header">
            <div className="container desktop">
                <div className="row">
                    <div className="row-item"><Link to='/'>Home</Link></div>
                    <div className="row-item"><Link to='/experience'>Experience</Link></div>
                    <div className="row-item"><Link to='/education'>Education</Link></div>
                    <div className="row-item"><Link to='/projects'>Projects</Link></div>
                    <div className="row-item"><Link to='/contact'>Contact</Link></div>
                </div>
            </div>
            <div className='mobile-header'>
                <div className='burger'>
                    <p onClick={openMenu} className={`burger-icon ${isOpen ? 'hidden' : ''}`}>{<Burger/>}</p>
                    <p onClick={openMenu} className={`burger-icon ${isOpen ? '' : 'hidden'}`}>{<Close/>}</p>
                </div>
                <div className={`mobile-menu ${isOpen ? '' : 'hidden zero-height'}`}>
                    <div className="row-item mobile"><Link to='/'>Home</Link></div>
                    <div className="row-item mobile"><Link to='/experience'>Experience</Link></div>
                    <div className="row-item mobile"><Link to='/education'>Education</Link></div>
                    <div className="row-item mobile"><Link to='/projects'>Projects</Link></div>
                    <div className="row-item mobile"><Link to='/contact'>Contact</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Header;