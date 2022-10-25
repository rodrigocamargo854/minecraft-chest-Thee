import React from "react";
//Styles
import "./assets/styles/App.scss";
import  { Suspense, useState } from "react";
//Tree
import Lights from "./components/Three/lights";
//Canvas import
import { Canvas } from "react-three-fiber";
//Model
import  Model  from "../src/components/Three/chest";
const App = () => {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
