import React from "react";
//Styles
import "./assets/styles/App.scss";
import { Suspense, useState } from "react";
//Tree
import Lights from "./components/Three/lights";
import { softShadows, Loader, OrbitControls } from "@react-three/drei";

//Canvas import
import { Canvas } from "react-three-fiber";
//Model
import Model from "../src/components/Three/chest";
//Floor
import Floor from "./components/Three/floor";

softShadows();

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
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
