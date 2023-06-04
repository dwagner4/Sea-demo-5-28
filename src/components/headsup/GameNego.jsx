import React, { useState, useContext } from 'react'
import { useActor } from "@xstate/react";
import { AppContext } from '../../App.jsx'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase-config.js'


export const GameNego = () => 
{

  const appServices = useContext(AppContext)
  const [ state, send, raise, localservice ] = useActor(appServices.appMachineService)

  const handleAccepts = (e) =>
  {
    e.preventDefault()
    console.log(e)
    send({type: 'HAS_TWO_ACCEPTS'})
  }

  const handleEdit = (e) =>
  {
    e.preventDefault()
    console.log(e)
    send({type: 'GAME_EDIT'})
  }

  // return a form element
  return (
    <div>
      GameNego
      <button onClick={handleAccepts}>two accepts</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  )
}