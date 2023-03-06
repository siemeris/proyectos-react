import React, { useState } from 'react'

const TwitterCard = ({users}) => {

    const [isFollowing, setIsFollowing] = useState(false)

    const {name, username, avatar} = users

    const addAt = (username) => {
      return `@${username}`
      }

    return (
        <div className="card">
        <img src="https://unavatar.io/joselete" alt=""></img>
        <div className="card-info">
          <strong> {name}</strong>
          <span> {addAt(username)}</span>
        </div>
        <button className="card-button" onClick={()=>{setIsFollowing(!isFollowing)}}> 
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