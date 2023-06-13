export function TwitterFollowCard ({formatUserName,userName, name, isFollowing}) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="Avatar user" 
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Follow
        </button>
      </aside>
    </article>
  )
};
