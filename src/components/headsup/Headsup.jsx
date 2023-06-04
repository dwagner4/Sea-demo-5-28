

import React, { useContext, useEffect, useState } from 'react'
import { useActor } from "@xstate/react";

// import { db } from '../firebase-config'
// import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'

import { AppContext } from '../../App.jsx'
// import '../../styles/Chat.css'
import { Auth } from '../auth/Auth.jsx';

import { GameSelection } from './GameSelection.jsx'
import { GameForm } from './GameForm.jsx'
import { GameNego } from './GameNego.jsx'
import { GamePlay } from './GamePlay.jsx'
// import { GameAuth } from './GameAuth.jsx'


export const Headsup = () =>
{
  const appServices = useContext(AppContext)
  const [ state, send, localservice ] = useActor(appServices.appMachineService)

  return (
    <div>
      {/* <h1>Yoho {state.value}</h1> */}
      {/* <Auth /> */}
      {/* { state.matches('auth') ? <GameAuth /> : null } */}
      { state.matches('gameform') ? <GameForm /> : null }
      { state.matches('gameselection') ? <GameSelection /> : null }
      { state.matches('gamenego') ? <GameNego /> : null }
      { state.matches('gameplay') ? <GamePlay /> : null }
    </div>

  )
}