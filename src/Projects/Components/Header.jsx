
import { NavLink } from 'react-router-dom'
import practiceFavicon from '../../assets/practice-favicon.png'
import './Header.css'
import { useState } from 'react'

export function Header () {

    const [headerIsActive, setHeaderIsActive] = useState(false);

    const toggleHeader = () => {
        if(headerIsActive === false){
            setHeaderIsActive(true)
        }
        else{
            setHeaderIsActive(false)
        }
    }

    return(
        <>  
            {!headerIsActive ? 
            <header className='header-unactive'>
                <NavLink to='/' className='header-favicon'>
                    <img src={practiceFavicon} alt="Favicon" />
                    <h5>Practice Apps</h5>
                </NavLink>
                <div className='burger-menu' onClick={toggleHeader}>
                    <div className='burger-lines'>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                        <div className='burger-line'></div>
                    </div>
                    <h5>Menu</h5>
                </div> 
            </header>
            :
            <header className='header-active'>
                <NavLink to='/' className='header-favicon'>
                    <img src={practiceFavicon} alt="Favicon" />
                    <h5>Practice Apps</h5>
                </NavLink>
                <div className='header-navlinks'>
                    <NavLink to='/counter' className='header-navlink'>
                    Project 1
                    </NavLink>
                    <NavLink to='/todolist' className='header-navlink'>
                        Project 2
                    </NavLink>
                    <NavLink to='/productsearch' className='header-navlink'>
                        Project 3
                    </NavLink>
                    <NavLink to='/realestate' className='header-navlink'>
                        Project 4
                    </NavLink>
                    <NavLink to='/userprofiles' className='header-navlink'>
                        Project 5
                    </NavLink>
                    <NavLink to='/marketplace' className='header-navlink'>
                        Project 6
                    </NavLink>
                </div>
                <button className='header-close-button' onClick={toggleHeader}>✖</button>
            </header>
            }
            
        </>
    )
}