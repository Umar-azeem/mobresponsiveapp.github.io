import React from "react";
import mobile from "../img/perspective.png";
import Swal from "sweetalert2";
export function Project(){
  const Project=()=>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">download form menu bar</a>'
   });
  }
        return(
            <>
           <section class="  mx-auto py-14">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <img src={mobile} class="rounded-lg shadow-md mx-auto md:mx-0" alt="App Image" />
    <div class="flex flex-col justify-center">
      <h2 class="text-purple-900 text-5xl font-bold py-2 sm:mt-0">Discover our App</h2>
      <p class="text-gray-500 text-base leading-relaxed sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione.
      </p>
      <a href="Create an Account
#">
        <button class="bg-pink-700 text-white text-lg px-4 py-2 rounded-md shadow-md hover:bg-pink-800 focus:outline-none" onClick={Project} >
          Download
        </button>
      </a>
    </div>
  </div>
</section>

            </>

        );
     }
     