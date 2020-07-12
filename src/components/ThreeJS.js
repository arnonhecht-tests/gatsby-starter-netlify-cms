import React, { useRef, useState, Fragment, Suspense } from 'react';

import * as THREE from 'three'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import sceneImage from "../../static/img/desert-360.jpg" 

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import uroborosImage from "../../static/img/uroboros.jpg" 

// Color palette to use for later
const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']


extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Dome() {
  const texture = useLoader(THREE.TextureLoader, sceneImage)
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

function SphereReflection(props) {

  // var geometry = new THREE.SphereBufferGeometry( 400.0, 48, 24 );
  // sphereMaterial = new THREE.MeshLambertMaterial( { envMap: textureCube } );
  // sphereMesh = new THREE.Mesh( geometry, sphereMaterial );

  // scene.add( sphereMesh );
  
  const texture = useLoader(THREE.TextureLoader, sceneImage)
  return (
    <mesh 
      {...props} 
    >
      <sphereGeometry attach="geometry" args={[4.0, 4, 2]} />
      <meshBasicMaterial attach="material" />
    </mesh>
  )
}

function LinkImage(props) {
  const [hovered, setHover] = useState(false)
  const texture = useLoader(THREE.TextureLoader, uroborosImage)

  function goToLink(url) {

  }

  const s = hovered ? 1.1 : 1;

  return (
    <mesh 
      {...props} 
      scale={[s, s, s]}
      onClick={e => goToLink(props.url)}
      onPointerOver={e => {setHover(true); document.body.style.cursor = 'pointer';}}
      onPointerOut={e => {setHover(false); document.body.style.cursor = 'default';}}
    >
      {/* <planeGeometry attach="geometry" args={[50, 50, 1, 1]} /> */}
      <planeGeometry attach="geometry" args={[1, 1, 1]}   position={[1000, 1000, 1000]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />
    </mesh>
  )
}


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)


  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.z += 0.01
      mesh.current.rotation.x += 0.01
    }
    if (hovered && active) {
      mesh.current.rotation.y += 0.02
      mesh.current.rotation.x += 0.06
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <sphereBufferGeometry attach="geometry" args={[0,0,0]} />
      <meshLambertMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function ThreeJS() {
  return (
    <div  style={{ height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Box position={[10, 10, 10]} />
        {/* <Box position={[0, 0, 0]} /> */}
        {/* <gridHelper args={[10, 10, `red`, `gray`]} /> */}
        <Suspense fallback={null}>
          {/* <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate  /> */}
          <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
          <Dome />
          <SphereReflection position={[0, 0, -1]} />
          {/* <LinkImage position={[0, 0, -2]} /> */}
          {/* <LinkImage position={[1, 1, 3]} rotation={[0, 0, 0]}/> */}
        </Suspense>
    </Canvas>
  </div>
  )
}
export default ThreeJS;





// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)

//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     if (hovered && !active) {
//       mesh.current.rotation.z += 0.01
//       mesh.current.rotation.x += 0.01
//     }
//     if (hovered && active) {
//       mesh.current.rotation.y += 0.02
//       mesh.current.rotation.x += 0.06
//     }
//   })

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={e => setActive(!active)}
//       onPointerOver={e => setHover(true)}
//       onPointerOut={e => setHover(false)}>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }