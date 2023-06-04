import React, { useState, useContext } from 'react'
import { useActor } from "@xstate/react";
import { AppContext } from '../../App.jsx'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase-config.js'
import './headsup.css'


export const GameAuth = () => 
{

  const appServices = useContext(AppContext)
  const [ state, send, raise, localservice ] = useActor(appServices.appMachineService)

  const yoclick = () => {
    console.log('yoclick')
    send({type: 'LOGIN', newname: 'frank'}) 
  }

  // return a form element
  return (
    <div>
      GameAuth
      <button onClick={yoclick}>Login</button>
    </div>
  )
}