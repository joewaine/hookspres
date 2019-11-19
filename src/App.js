import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Home.js';
import ToDoWithHooks from './ToDoWithHooks.js';
import ToDoWithoutHooks from './ToDoWithoutHooks.js';
import UseEffect from './UseEffect.js';
import NoUseEffect from './NoUseEffect.js';



function App() {

  return (
<div>
    <div>
      <h1>React Hooks</h1>
      <img src="https://www.discountramps.com/images/xxl/FH-38HOOK.jpg?v=100114421018-2" style={{width: '200px'}} />
      <br/>
      <h4>Definition:</h4>
Essentially it's a place in code that allows you to tap in to a module to either provide different behavior or to react when something happens.
      <br/>      <br/>
      <h4>In Reacts Case:</h4>
      React Hooks let you use state and other React features without writing a class - classes can be confusing
      <br/>

      <br />
      <h4>Resources:</h4>
      <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">React Hooks - Documentation</a>
      <br />
      <a href="https://tylermcginnis.com/why-react-hooks/" target="_blank">Why Hooks? Tyler McGinnis Blog</a>
      <br />
      <a href="https://www.freecodecamp.org/news/an-introduction-to-react-hooks-12843fcd2fd9/" target="_blank">Hooks Intro</a>
      <br />
      <br />
      <h1>Examples</h1>

      <br />


    </div>
    <ToDoWithoutHooks />
    <ToDoWithHooks />
    <UseEffect />
    <NoUseEffect />


</div>
  );
}

export default App;


