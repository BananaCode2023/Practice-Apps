export function UserPost ({post}) {
    return(
        <div className='user-post'>
            <h4 className='user-post-title'>{post.title}</h4>
            <p className='user-post-description'>{post.body}</p>
        </div>
    )
}