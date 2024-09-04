import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {Exp} from "./Work/Exp.js";
import { Screen } from "./Appscr/Screen.js";
import {Pro} from "./plain/Pro.js";
import { Ope } from "./down/Ope.js";
import Header from './Header.js';



// Define or import the components
const Feature = () =>  <div className="mt-10"><Exp/></div>;
const Gallery = () =>  <div className="mt-10"><Screen/></div>;
const Princing = () => <div className="mt-10"><Pro/></div> ;
const Contact = () =>  <div className="mt-10"><Ope/></div>  ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-screen h-screen overflow-x-hidden'>
        {/* <App /> */}
        <Header/>
        <Routes>
          <Route path='/' element={ <App />} />
          <Route path='/Exp' element={<Feature />} />
          <Route path='/Screen' element={<Gallery />} />
          <Route path='/pro' element={<Princing />} />
          <Route path='/Stepby' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
