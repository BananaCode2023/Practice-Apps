import { useEffect, useRef, useState } from "react";
import { UserPost } from "./UserPost";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserProfilesHeader } from './UserProfilesHeader'

export function UserProfilePanel () {
    
    const {id} = useParams();

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchUser = async() => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

            setUser(response.data)
        }

        fetchUser()
    }, [id])
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

            setPosts(response.data)
        }

        fetchPosts()
    }, [id])
    

    if(!user) {
        return (
            <p>Loading...</p>
        )
    }

    const initials = user.name
    .split(" ")
    .slice(0,2)
    .map(word => word[0])
    .join("");

    return(
        <>
        <section className="user-profile-section">
            <UserProfilesHeader />
            
            <div className='user-profile-panel'>

                <div className='user-details-container'>

                    <div className='user-contact-details'>
                        <div className="user-initials">{initials}</div>

                        <div className='user-contacts'>
                            <h3>{user.name}</h3>
                            <p className='user-contact email'>
                                <strong>Email:</strong>
                                <a href="">{user.email}</a>
                            </p>
                            <p className='user-contact phone'>
                                <strong>Phone:</strong>
                                <a href="">{user.phone}</a>
                            </p>
                            <p className='user-contact website'>
                                <strong>Website:</strong>
                                <a href="">{user.website}</a>
                            </p>
                            <p className='user-contact company'>
                                <strong>Company:</strong>
                                <span>{user.company.name}</span>
                            </p>
                            <p className='user-contact location'>
                                <strong>Location:</strong>
                                <span>{`${user.address.city}, ${user.address.zipcode}`}</span>
                            </p>
                        </div>
                    </div>

                    <Link 
                    className="back-btn" 
                    to='/userprofiles' 
                    >
                        ← Back
                    </Link>

                </div>

                <h3 className='user-post-header'>Posts by {user.name} ({posts.length})</h3>
                
                <div className='user-posts-container'>
                    
                    {
                    !posts ? 
                    <p>Loading...</p>
                    :
                    posts.map((post) => {
                        return(
                            <UserPost key={post.id} post={post} />
                        )
                    })
                    }

                </div>
            </div>
        </section>
        </>
    )
}