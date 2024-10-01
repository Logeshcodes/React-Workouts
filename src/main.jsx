import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import { Start } from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent.jsx";

import { Hello } from "./components/JsxFile.jsx";

import { Passing } from "./components/Props.jsx";

import { ListRender } from "./components/ListRender.jsx";

import StyleSheet from "./components/StyleSheet.jsx";

import "./index.css";
import LifeCycleA from "./components/LifeCycleA.jsx";

import ParentComponent from "./components/ParentComponent.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

import Error from "./components/Error.jsx";
import PortalDemo from "./components/PortalDemo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Start/>
    <Welcome name='Logesh'/>
    <Hello/>
    <Passing name='Logesh' fun={print}/>
    <Passing name='Vicky'/>
    <Passing name='Harish'>
      <p>This is a Children..</p>
    </Passing>
    <ListRender/>
    <StyleSheet primary={true}/> 
    <LifeCycleA/>

    <ParentComponent/>*/}

    {/* <ErrorBoundary>
      <Error heroName={"Logesh"} />
    </ErrorBoundary>
    <ErrorBoundary>
      <Error heroName={"Joker"} />
    </ErrorBoundary> */}

    <PortalDemo/>
  </StrictMode>
);
