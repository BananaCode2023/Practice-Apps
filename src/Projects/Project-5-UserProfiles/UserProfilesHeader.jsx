import { Link } from 'react-router-dom'

export function UserProfilesHeader () {

    
    return(
        <div className='user-profile-header'>
            <Link className='user-profile-logo' to='/userprofiles'><h2>👥 User Profiles</h2></Link>
            <a href="">Home</a>
        </div>
    )
}