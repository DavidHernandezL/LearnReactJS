import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

  const formatUserName = (userName) => `@${userName}`
  return (
    <div className='App'>
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="Storm" 
        name="David Hernandez"/>

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="midudev" 
        name="Miguel Angel"/>

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="midudev" 
        name="Miguel Angel"/>

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing={false} 
        userName="midudev" 
        name="Miguel Angel"/>

    </div>
  )
}