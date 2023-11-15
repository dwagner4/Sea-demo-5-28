import { useEffect }from 'react'
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { button, folder, useControls } from 'leva'
import { useThree } from "@react-three/fiber";

import Lights from './Lights.jsx'
import { AirportTopo } from './models/AirportTopo.jsx'
import  { SouthTerminal } from './models/SouthTerminal.jsx'
import { ParkingGarage } from './models/ParkingGarage.jsx'
import { MainTerminal } from './models/MainTerminal.jsx'

import { BuildingMasses } from './models/BuildingMasses.jsx'
import { CarAgency } from './models/CarAgency.jsx'
import { CargoPlanes } from './models/CargoPlanes.jsx'
import { ConcourseD } from './models/ConcourseD.jsx'
import { FuelTanks } from './models/FuelTanks.jsx'
import { GTC } from './models/GTC.jsx'
import { LinkStation } from './models/LinkStation.jsx'
import { NEGTC } from './models/NEGTC.jsx'
import { NorthTerminal } from './models/NorthTerminal.jsx'
import { PlanesParked } from './models/PlanesParked.jsx'
import { Planes3 } from './models/Planes3.jsx'
import { SD4 } from './models/SD4.jsx'
import { TrainTracks } from './models/TrainTracks.jsx'

import { Terminal2Roadway } from './models/Terminal2Roadway.jsx'
import { Trucks } from './models/Trucks.jsx'

import { TestPlane } from './models/TestPlane.jsx'



export default function Experience()
{

    const [{
         View, 
         garage,
         southTerminal,
         mainTerminal,
         northTerminal,
         gtc,
         terminal2,
         concourseD,
         t2roadway,
         buildings,
         planes,
         linkStation,
         trucks,
    }, set] = useControls(() => ( 'Menu', { 
        View:  {options: 
            [
                'Aerial View',
                'South Terminal', 
                'Main Terminal',
                'Aerial 2',
            ]
        },
        Visibility: folder({
            'southTerminal': true,
            'mainTerminal': true,
            'northTerminal': true,
            'gtc': true,
            'garage': true,
            'terminal2': true,
            'concourseD': true,
            't2roadway': true,
            'buildings': true,
            'planes': false,
            'linkStation': true,
            'trucks': true,
        }, {collapsed: true}),
        Sequence: button( () => {
            set({ 
                'southTerminal': false,
                'mainTerminal': true,
                'northTerminal': true,
                'gtc': false,
                'garage': true,
                'terminal2': false,
                'concourseD': false,
                't2roadway': false,
                'buildings': false,
                'planes': false,
            })
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': false,
                    'garage': true,
                    'terminal2': false,
                    'concourseD': true,
                    't2roadway': false,
                    'buildings': false,
                    'planes': false,
                })}, 2000 )
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': true,
                    'garage': true,
                    'terminal2': false,
                    'concourseD': true,
                    't2roadway': false,
                    'buildings': false,
                    'planes': false,
                })}, 4000 )
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': true,
                    'garage': true,
                    'terminal2': false,
                    'concourseD': true,
                    't2roadway': true,
                    'buildings': false,
                    'planes': false,
                })}, 6000 )
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': true,
                    'garage': true,
                    'terminal2': true,
                    'concourseD': true,
                    't2roadway': true,
                    'buildings': false,
                    'planes': false,
                })}, 8000 )
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': true,
                    'garage': true,
                    'terminal2': true,
                    'concourseD': true,
                    't2roadway': true,
                    'buildings': true,
                    'planes': false,
                })}, 10000 )
            setTimeout(() => {
                set({ 
                    'southTerminal': true,
                    'mainTerminal': true,
                    'northTerminal': true,
                    'gtc': true,
                    'garage': true,
                    'terminal2': true,
                    'concourseD': true,
                    't2roadway': true,
                    'buildings': true,
                    'planes': true,
                })}, 12000 )
        })
    }))

    const { camera } = useThree()


    useEffect( () => {
        if (View === 'Aerial View') { camera.position.set(1540, 1300, 477) }
        if (View === 'South Terminal') { camera.position.set(-400, 300, 800) }
        if (View === 'Main Terminal') { camera.position.set(-1030, 333, -232) }
        if (View === 'Aerial 2') { camera.position.set(-1000, 600, -3500) }

        //         'Main Terminal',
        //         'Inside S. Terminal 1',
        //         'Inside S. Terminal 2',
    }, [View])

    return <>

        <Perf position="bottom-left" />

        <OrbitControls makeDefault />

        { /** lights. sky and ground plane */ }
        <Lights />
        <Sky distance={1000000} />
        
        <AirportTopo position={[ 0, 26, 0 ]}/> 
        
        {(southTerminal) ? <SouthTerminal position={[ 0, 0, 0 ]}/> : null} 
        {(garage) ? <ParkingGarage position={[ 0, 10, 0 ]}/> : null}
        {(mainTerminal) ? <MainTerminal position={[ 0, -5, 0 ]} /> : null}

        {(buildings) ? <BuildingMasses position={[ 0, 0, 0 ]} /> : null}

        {(buildings) ? <CarAgency position={[ 0, 10, 0 ]} /> : null}
        {(planes) ? <CargoPlanes position={[ 0, 3.5, 0 ]} /> : null}
        {(concourseD) ? <ConcourseD position={[ 0, 0, 0 ]} /> : null}
        {(buildings) ? <FuelTanks position={[ 0, 10, 0 ]} /> : null}
        {(gtc) ? <NEGTC position={[ 0, 0, 0 ]} /> : null}
        {(linkStation) ? <LinkStation position={[ 0, -16, 0 ]} /> : null}
        {(linkStation) ? <TrainTracks position={[ 0, -16, 0 ]} /> : null}
        {(northTerminal) ? <NorthTerminal position={[ 0, -4, 0 ]}/> : null}
        {(planes) ? <PlanesParked position={[ 0, -4, 0 ]}/> : null}
        {(planes) ? <Planes3 position={[ 0, -10, 0 ]}/> : null} }
        {(t2roadway) ? <Terminal2Roadway Position={[ 0, 0, 0 ]} /> : null}
        {(trucks) ? <Trucks position={[ 0, 8, 0 ]} /> : null}

            {/* <TestPlane position={[0, 80, 0]} rotation={[Math.PI / 2, 0, 0]} scale={10000} /> */}
       
    </>
   
}