import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, useAnimations  } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ship = ({ isMobile }) => {
  // Load scene and animations
  const { scene, animations } = useGLTF('./multi_universe_space_ship_3d_model/scene.gltf');
  // Bind animations to the model
  const { actions } = useAnimations(animations, scene);


  const spaceship = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });


  useEffect(() => {
    if (actions) {
      // Plays all available animations
      Object.keys(actions).forEach((key) => {
        actions[key]?.play();
      });
    }
  }, [actions]);

  useFrame((state, delta) => {
    // Rotates the spaceship dynamically
    const rotationSpeed = 0.4;
    spaceship.current.rotation.z = Math.sin(position.x * rotationSpeed);

    // Move the spaceship back and forth along the X-axis
    const movementSpeed = 1;
    setPosition((prevPosition) => ({
      ...prevPosition,
      x: Math.sin(state.clock.elapsedTime * movementSpeed) * 2,
    }));
  });

  return (
      <mesh>
        <hemisphereLight intensity={1.15} groundColor="black" />
        <pointLight intensity={0.5} position={[1, 1.25, 1.5]} />
        <spotLight
            position={isMobile ? [0, -3, -2.2] : [-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object={scene}
            scale={isMobile ? 4.0 : 2.75}
            position={[position.x, position.y, position.z]}
            ref={spaceship}
        />
      </mesh>
  );
};


const ShipCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return(
    <Canvas
      // frameloop='demand'
      shadows
      camera={{ position: [20,23,25], fov:40 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls  enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Ship isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ShipCanvas


