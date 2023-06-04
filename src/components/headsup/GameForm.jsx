import React, { useState, useContext } from 'react'
import { useActor } from "@xstate/react";
import { AppContext } from '../../App.jsx'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase-config.js'


export const GameForm = () => 
{
  // const [ newName, setNewName ] = useState('frank')

  // // const messagesRef = collection(db, "GoGames")

  const appServices = useContext(AppContext)
  const [ state, send, raise, localservice ] = useActor(appServices.appMachineService)

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    console.log(e)
    send({type: 'CREATE_GAME'})
  }

  const yoho = { flexDirection: 'column', padding: '10px', backgroundColor: 'lightblue', border: '1px solid black', justifyContent: 'flex-start', margin: '10px'  }  


  return (
    <div style={{ display: 'flex', ...yoho }}>
      <div>
        <label htmlFor="game">Game</label>
        <input type="text" id="game" name="game" />
      </div>
      <div>
        <label htmlFor="handle">Handle</label>
        <input type="text" id="handle" name="handle" />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <select id="color" name="color">
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </div>
      <div><label htmlFor="local">Local</label><input type="checkbox" id="local" name="local" /></div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => send({type: 'GAME_EXIT'})}>Cancel</button>
    </div>
  )
    
  
}