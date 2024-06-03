import React from "react";
import { Page } from "./Component/Page.js";
import { Skills } from "./Component/Skills.js";
import {Exp} from "./Work/Exp.js";
import {Project} from "./Grid/Project";
import { Appsec } from "./mobapp/Appsec.js";
import { Steps } from "./Guide/Step.js";
import {Com} from "./About/Com.js";
import {Pro} from "./plain/Pro.js";
import { Stepby } from "./details/Stepby.js";
import { Ope } from "./down/Ope.js";
import { Screen } from "./Appscr/Screen.js";
import logo from "./img/logo.png";
import clogo from "./img/icon.png";
import { useState } from "react";
import Swal from "sweetalert2";
 function Mysite() 
 {   
  const handleClick =() =>{
    Swal.fire({
      title: "The Mobapp ",
      text: "are you sure want to Download so press(ok)?",
      icon: "question",
      
    });
  }
  const [nav, setNav] = useState(false);
  return (
    <>
     <header class="bg-pink-500 fixed top-0 left-0 right-0 z-[1320]">
  <div class="  mx-auto px-4 py-4 flex justify-between items-center">
    <div class="">
      <img src={logo} class="w-16 h-8" alt="Logo" /> </div>
    <nav class="hidden md:flex items-center">
       <ul class="flex gap-7 px-16">
        <li><a class="text-pink-200 hover:text-white">HOME</a></li>
        <li><a class="text-pink-200 hover:text-white">FEATURE</a></li>
        <li><a class="text-pink-200 hover:text-white">GALLERY</a></li>
        <li><a class="text-pink-200 hover:text-white">PRICING</a></li>
        <li><a class="text-pink-200 hover:text-white">CONTACT</a></li>
        <li><a href="#"><button class="text-white text-lg border-[1px] py-1 px-4 rounded-md hover:whitr" onClick={handleClick}>Download</button></a></li>
      </ul>
    </nav>
    <div onClick={() => setNav(!nav)} class="md:hidden"> <button  id="menu-toggle" class="text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

      </button>
    </div>
    {nav && (

      <nav class="absolute  top-10 right-0">
       <ul class="flex flex-col gap px-16 py-4 text-center bg-pink-500 rounded-md">
        <li><a class="text-pink-200 mb-6 px-6  text-xl hover:text-white">HOME</a></li>
        <li><a class="text-pink-200 mb-6 px-6  text-xl  hover:text-white">FEATURE</a></li>
        <li><a class="text-pink-200 mb-6 px-6  text-xl  hover:text-white">GALLERY</a></li>
        <li><a class="text-pink-200 mb-6 px-6  text-xl hover:text-white">PRICING</a></li>
        <li><a class="text-pink-200 mb-6 px-6  text-xl hover:text-white">CONTACT</a></li>
        <li><a href="#"><button class="text-white text-lg border-[1px] py-1 px-6 rounded-md hover:white " onClick={handleClick }>Download</button></a></li>
      </ul>
    </nav>
    )}
  </div>
</header>

      <div className="mt-10"><Skills/></div>
      <div className="mt-10"><Page/></div>
      <div className="mt-10"><Project/></div>
      <div className="mt-10"><Exp/></div>
      <div className="mt-10"><Appsec/></div> 
      <div className="mt-10"><Steps/></div>
      <div className="mt-10"><Com/></div>
      <div className="mt-10"><Screen/></div>   
      <div className="mt-10"><Pro/></div>      
      <div className="mt-10"><Stepby/></div>   
      <div className="mt-10"><Ope/></div>    
      
      </>
  );
}

export default Mysite;
