import React,{Component} from "react";
import iphonex from "../img/iphonex.png";
import clogo from "../img/client-logos.png";
export function Skills (){
        return(
            <>
        <section className="bg-pink-600 auto">
          <div>
          <h1 className="lg:text-6xl text-xl text-1 m-auto py-12 px-8 text-center text-white">Mobile App Landing Page Templete </h1>
            <p className="lg:text-2xl text-xs m-auto  px-8 text-center text-white" >The one and only solution for any kind of mobile app landing needs.Just <br></br>change the screenshorts and text and you are good to go.</p>
            <div className="bg-pink-600 h-80  overflow-hidden flex justify-center items-center ">
            <img src={iphonex} width={400} height={500} className="mt-96" ></img>  
        </div>
        <img src={clogo} className="w-full lg:h-40 lg:py-6 lg:px-40  mt-20 bg-white"></img>
          </div>
        </section>
            </>

        );
    }
