import React, { createContext } from 'react';
import './styles/app.css';

// creat an xstate finite state machine for the app
import { createMachine, interpret, assign } from 'xstate';
// import { gameWrite, chatWrite } from './dbClient.js'

import { functions, logic } from './appMachine.js'

import { Canvas } from '@react-three/fiber'
import {GoExperience} from './go/GoExperience.jsx'
import { Headsup } from './components/headsup/Headsup.jsx'


const appMachine = createMachine(logic,functions);

const appMachineService = interpret(appMachine)
appMachineService.onTransition(state => console.log(state.value, state.context ) )


appMachineService.start()
// goMachineService.send('START')


export { appMachine, appMachineService }
// export { goMachine } submitSpace submitSpace

export const AppContext = createContext(appMachineService)

function App() {
  return (
    <AppContext.Provider value={{appMachineService}}>
      <Canvas
        shadows
        camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0.5, 1 ]
        } }
      >
        <GoExperience />
      </Canvas>

      <div className="overlay">
        <Headsup />
        {/* <Auth /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
