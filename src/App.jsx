import React, { createContext } from 'react';
import './styles/app.css';

// creat an xstate finite state machine for the app
import { createMachine, interpret, assign } from 'xstate';
// import { gameWrite, chatWrite } from './dbClient.js'

import { functions, logic } from './appMachine.js'

import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Headsup } from './components/headsup/Headsup.jsx'



/** create and start FSM service */
const appMachine = createMachine(logic,functions);
const appMachineService = interpret(appMachine)
appMachineService.onTransition(state => console.log(state.value, state.context ) )
appMachineService.start()

export { appMachine, appMachineService }

/** Create global context using xstate */
export const AppContext = createContext(appMachineService)

function App() {
  return (
    <AppContext.Provider value={{appMachineService}}>
      <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200000,
            position: [ 0, 400, 1200 ]
        } }
      >
        <Experience />
      </Canvas>

      <div className="overlay">
        <Headsup />
        {/* <Auth /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
