import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
  const formatUsername = (username) => `@${username}`;
  
  return (
    <section className="App">
      <h1>Twitter Card</h1>
      <TwitterFollowCard username="gtfy" name="Nombre inventado"
        isFollowing={true} formatUsername={formatUsername} />
      <TwitterFollowCard username="pepitoperez" name="Pepito Pérez"
        isFollowing={false} formatUsername={formatUsername}/>
      <TwitterFollowCard username="manolete" name="Manolo Terán"
        isFollowing={false} formatUsername={formatUsername}/>
      <TwitterFollowCard username="malta" name="Manuela Fernández" 
      isFollowing formatUsername={formatUsername}/>
    </section>);
}