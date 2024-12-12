import React from 'react';
import ReactDOM from 'react-dom/client';
import Show from './objectChange';
//import Home from './Home';
//import About from './about';

console.log("GETTING VIRTUAL DOM DIV ID ROOT REFERENCE");
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Home/>);
console.log("ABOUT COMPONENT IS CALLED!")
//root.render(<About/>)
root.render(<Show/>)


