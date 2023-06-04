import { SignIn } from "./SignIn.jsx"
import { SignOut } from "./SignOut.jsx"

import React, { useContext, useEffect, useState } from 'react'
import { useActor } from "@xstate/react";

import { auth, provider } from '../../firebase-config.js'
import { signInWithPopup } from "firebase/auth"
import {signOut } from "firebase/auth"

import { AppContext } from '../../App.jsx'
import Cookies from 'universal-cookie'
export const cookies = new Cookies()



export const Auth = (props) => 
{
  const { setIsAuth } = props

  const appServices = useContext(AppContext)
  const [ state, send, raise, localservice ] = useActor(appServices.appMachineService)


  const signInWithGoogle = async (props) => 
  { try {
      const result = await signInWithPopup(auth, provider)
      console.log("in login")
      cookies.set("auth-token", result.user.refreshToken)
      // setIsAuth(true)
      send({type: 'LOGIN'})
      console.log(result.user)
    } catch (err) {
      console.log(err)
      send({type: 'LOGIN_ERROR'})
    }
  }

  const signUserOut = async () => 
  {
    await signOut(auth)
    cookies.remove("auth-token")
    console.log("in logout")
    send({type: 'LOGOUT'})
    // setIsAuth(false)
    // setRoom(null)
  } 

  return <div className="auth">
    {
      state.matches('auth') ? <SignIn dosignin={ signInWithGoogle }/> : <SignOut dosignout={signUserOut}/>
    }
  </div>
}

