import React from "react";
import logo from "./img/logo.png";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


 function Header() 
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
      <img src={logo} class=" h-8 " alt="Logo" /> </div>
    <nav class="hidden md:flex items-center">
       <ul class="flex gap-7 px-16">
        <li><Link class="text-pink-200 hover:text-white" to="/">Home</Link></li>
        <li><Link class="text-pink-200 hover:text-white" to="/Exp">Feature</Link></li>
        <li><Link class="text-pink-200 hover:text-white" to="/Screen">Gallery</Link></li>
        <li><Link class="text-pink-200 hover:text-white" to="/Pro">Pricing</Link></li>
        <li><Link class="text-pink-200 hover:text-white" to="/Stepby">Contact</Link></li>
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
        <li><Link class="text-pink-200 mb-6 px-6  text-xl hover:text-white" to="/HOME">HOME</Link></li>
        <li><Link class="text-pink-200 mb-6 px-6  text-xl  hover:text-white" to="/FEATURE">FEATURE</Link></li>
        <li><Link class="text-pink-200 mb-6 px-6  text-xl  hover:text-white" to="/GALLERY">GALLERY</Link></li>
        <li><Link class="text-pink-200 mb-6 px-6  text-xl hover:text-white" to="/PRICING">PRICING</Link></li>
        <li><Link class="text-pink-200 mb-6 px-6  text-xl hover:text-white" to="/CONTACT">CONTACT</Link></li>
        <li><a href="#"><button class="text-white text-lg border-[1px] py-1 px-6 rounded-md hover:white " onClick={handleClick }>Download</button></a></li>
      </ul>
    </nav>
    )}
  </div>
</header>
 
      </>
  );
}

export default Header;
