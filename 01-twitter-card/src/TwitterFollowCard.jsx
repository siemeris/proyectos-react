import { useState } from "react";

export function TwitterFollowCard({ formatUsername, username="unknown", name, initialIsFollowing}) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img'
                    src={`https://unavatar.io/${username}`}
                    alt="El avatar de gfty" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-unfollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}