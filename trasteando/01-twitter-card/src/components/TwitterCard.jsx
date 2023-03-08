import React, { useState } from 'react'

const TwitterCard = ({name, username, initialIsFollowing, addAt}) => {


  
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    

    return (
        <div className="card">
        <img src={`https://unavatar.io/${username}`} alt=""></img>
        <div className="card-info">
          <strong> {name}</strong>
          <span> {addAt(username)}</span>
        </div>
        <button className={isFollowing ? "card-button is-following" : "card-button"} onClick={()=>{setIsFollowing(!isFollowing)}}> 
        {isFollowing ? "Siguiendo" : "Seguir"}</button>
      </div>
    )

}

export default TwitterCard








// import React from 'react'

// const TwitterCard = () => {
//   return (
//     <div>TwitterCard</div>
//   )
// }

// export default TwitterCard