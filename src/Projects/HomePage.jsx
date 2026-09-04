import { Header } from "./Components/Header";
import './Homepage.css'
import { Link } from "react-router-dom";

export function HomePage () {
    return(
        <>
            <title>Home</title>
            
            <section className="homepage-section">
                <h1>Welcome to Homepage</h1>
                <p>toggle Menu to choose what project you want to try</p>
                <div className="project-links">
                    <Link to='/counter' className='project-link'>
                    Project 1
                    </Link>
                    <Link to='/todolist' className='project-link'>
                        Project 2
                    </Link>
                    <Link to='/productsearch' className='project-link'>
                        Project 3
                    </Link>
                    <Link to='/realestate' className='project-link'>
                        Project 4
                    </Link>
                    <Link to='/userprofiles' className='project-link'>
                        Project 5
                    </Link>
                    <Link to='/marketplace' className='project-link'>
                        Project 6
                    </Link>
                </div>
            </section>
        </>
    )
}