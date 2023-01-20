import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
  return (
    <section className="App">
      <h1>Twitter Card</h1>
      <TwitterFollowCard username="gtfy" name="Nombre inventado" isFollowing="" />
      <TwitterFollowCard username="pepitoperez" name="Pepito Pérez" isFollowing="" />
      <TwitterFollowCard username="manolete" name="Manolo Terán" isFollowing="" />
      <TwitterFollowCard username="malta" name="Manuela Fernández" isFollowing="" />
    </section>);
}