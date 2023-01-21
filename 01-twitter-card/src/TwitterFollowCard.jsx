export function TwitterFollowCard({ formatUsername, username="unknown", name, isFollowing }) {
    console.log(isFollowing)
    
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
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    );
}