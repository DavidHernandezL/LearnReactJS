import { useState } from 'react';

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing );
  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassesName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="Avatar user" 
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassesName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className='tw-followCard-stopFollow'>UnFollow</span>
        </button>
      </aside>
    </article>
  )
};
