import React, { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'gtfy',
    name: 'Guillermo Flores',
    isFollowing: true,
  },
  {
    userName: 'pepitoperez',
    name: 'Pepito Pérez',
    isFollowing: false
  },
  {
    userName: 'manolete',
    name: 'Manolo Terán',
    isFollowing: true
  },
  {
    userName: 'malta',
    name: 'Manuela Fernández',
    isFollowing: false
  }
]


export function App() {
  const formatUsername = (username) => `@${username}`;

  return (
    <section className="App">

      {
        users.map((user) => {
          const { userName, name, isFollowing } = user;

          return (
            <TwitterFollowCard
              username={userName}
              name={name}
              initialIsFollowing={isFollowing}
              formatUsername={formatUsername}
             />
          )
        })
      }


      {/* <TwitterFollowCard
        username="gtfy"
        name="Guillermo Flores"
        initialIsFollowing={true}
        formatUsername={formatUsername} />
      <TwitterFollowCard
        username="pepitoperez"
        name="Pepito Pérez"
        initialIsFollowing={false}
        formatUsername={formatUsername} />
      <TwitterFollowCard
        username="manolete"
        name="Manolo Terán"
        initialIsFollowing={false}
        formatUsername={formatUsername} />
      <TwitterFollowCard
        username="malta"
        name="Manuela Fernández"
        initialIsFollowing
        formatUsername={formatUsername} /> */}

    </section>

  );
}