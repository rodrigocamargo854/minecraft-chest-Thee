import React from "react";
//Styles
import "./assets/styles/App.scss";
import { Suspense, useState } from "react";
//Tree
import Lights from "./components/Three/lights";
import { softShadows, Loader, OrbitControls } from "@react-three/drei";

//Canvas import
import { Canvas, useThree } from "react-three-fiber";
//Model
import Model from "../src/components/Three/chest";
//Floor
import Floor from "./components/Three/floor";
import { useSpring } from "react-spring/three";

softShadows();

//oon Load zoom efect

const ZoomWithOrbial = () => {
  const { gl, camera } = useThree();
  useSpring({
    from: {
      z: 30,
    },
    x: -5,
    y: 4,
    z: 4,
    //On frame
    onFrame: ({ x, y, z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    },
  });
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model open={open} setOpen={setOpen} />
          <Floor />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
