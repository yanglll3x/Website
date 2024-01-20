import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Tower from '../models/Tower';
import Island from '../models/Island';

const Display = () => {
  const adjustTowerForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -3];
    let rotation = [ 0, 0, 0 ];

    if(window.innerWidth < 768 ) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [isTowerScale, isTowerPosition, isTowerRotation] = adjustTowerForScreen();

  // const [isIslandScale, isIslandPosition, isIslandRotation] = adjustIslandForScreen();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
      className = "w-full h-screen bg-transparent"
      camera={{ near: 0.2, far: 1000}}
      >
          <Suspense fallback={<Loader />}>
              <directionalLight />
              <ambientLight />
              <pointLight />
              <spotLight />
              <hemisphereLight />

              <Tower
                position={isTowerPosition}
                scale={isTowerScale}
                rotation={isTowerRotation}
              />

              {/* <Island
                position={isIslandPosition}
                scale={isIslandScale}
                rotation={isIslandRotation}
              /> */}
          </Suspense>

      </Canvas>

    </section>
  )
}

export default Display