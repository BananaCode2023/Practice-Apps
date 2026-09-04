import { UserProfileCard } from "./UserProfileCard";

export function UserProfileGrid ({userProfile, setClickedUserId, clickedUserId, clickedCardRef}) {

    return(
        <div className="user-profile-grid">

            {userProfile.map((user)=> {
                return(
                    <UserProfileCard 
                        key={user.id} 
                        user={user} 
                        cardRef={
                            user.id === clickedUserId
                            ?
                            clickedCardRef
                            :
                            null
                        }
                        setClickedUserId={setClickedUserId}
                    />
                )
            })}
            

        </div>
    )
}