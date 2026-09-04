import { Link } from 'react-router-dom'

export function UserProfileCard ({ user, cardRef, setClickedUserId}) {

    const initials = user.name
    .split(" ")
    .slice(0,2)
    .map(word => word[0])
    .join("");

    return(
        <Link 
            id={user.id}
            to={`/userprofiles/${user.id}`} 
            className="user-profile-card" 
            ref={cardRef}
            onClick={()=> {
                setClickedUserId(user.id)
            }}
        >
            <div className="user-initials">{initials}</div>
            <h3>{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">📞 {user.phone}</p>
            <p className="user-work">Works at {user.company.name}</p>
            <button>View Profile</button>
        </Link>
    )
}