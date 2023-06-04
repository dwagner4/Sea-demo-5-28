import React, { useState, useContext } from 'react'
import { useActor } from "@xstate/react";
import { AppContext } from '../../App.jsx'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase-config.js'


export const GameSelection = () => 
{

  const appServices = useContext(AppContext)
  const [ state, send, raise, localservice ] = useActor(appServices.appMachineService)


  const handleNewGame = (e) =>
  {
    e.preventDefault()
    console.log(e)
    send({type: 'NEW_GAME'})
  }

  const handleJoin = () =>
  {
    console.log("handleJoin")
    send({type: 'JOIN_GAME'})
  }

  const userGames = [
    {name: 'game1', status: 'pending', id: '123'},
    {name: 'game2', status: 'active', id: '124'},
    {name: 'game3', status: 'active', id: '125'},
    {name: 'game4', status: 'complete', id: '126'},
  ]

  const listgames = userGames.map((game) => <li key={game.id}>{game.name}, {game.status}</li> )

  const yoho = { width: '50%', padding: '10px', backgroundColor: 'lightblue', border: '1px solid black', alignItems: 'center', margin: '10px'  }  
  const bibop = {padding: '10px'}

  // return a form element
  return (
    <div style={{ display: 'flex' }} >
      <div style={yoho} >
        <div>
          Join a game by name or start a new game
        </div>
        <div style={bibop}>
          <input type="text" placeholder="Enter game name" />
          <button onClick={handleJoin}>Join</button>
        </div>
        <div style={bibop}>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      </div>
      <div style={yoho} >
        <div>Click on an existing game</div>
          <ul>{listgames}</ul>
      </div>
    </div>
  )
}