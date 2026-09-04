import { useEffect, useRef, useState } from 'react'
import { UserProfileGrid } from './UserProfileGrid'
import './UserProfiles.css'
import axios from 'axios'
import { UserProfilesHeader } from './UserProfilesHeader'

export function UserProfiles ({clickedUserId ,setClickedUserId}) {

    const [userProfile, setUserProfile] = useState([])

    const clickedCardRef = useRef(null)

    useEffect(() => {
        const fetchUserData = async() => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                
                setUserProfile(response.data)
            }
            catch(error){
                console.error('Error fetching users:', error)
            }
        }

        fetchUserData()
    },[])

    useEffect(() => {
        if(clickedCardRef.current) {
            clickedCardRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }

    }, [clickedUserId,userProfile])
    
    return(
        <>
            <title>User Profiles App</title>

            <section className="user-profile-section">
                
                <UserProfilesHeader />

                <UserProfileGrid 
                    userProfile={userProfile}
                    clickedUserId={clickedUserId}
                    setClickedUserId={setClickedUserId}
                    clickedCardRef={clickedCardRef}
                />    

            </section>
        </>
    )
}