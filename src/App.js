import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model/Test'

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.6} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default App
