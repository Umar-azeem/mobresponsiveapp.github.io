import React from "react";
import iphonex from "../img/iphonex.png";


export function Steps() {
    return (
        <>
            <section className=" w-full bg-slate-100">
                <div className="container lg:flex justify-between m-auto " >
                    <div className=" flex flex-col justify-start m-auto ">
                        <div className=" flex py-4 px-4">
                            <div className=" rounded-full border-white shadow-xl bg-white mt-8 w-14 h-10  md:mt-14 md:w-28 md:h-28 flex justify-center md:py-8 md:px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className="font-samibold py-2 md:py-1 text-center text-md md:text-4xl hover:text-white">1</h1></div><div className="  m-8"><h2 className="text-purple-900 md:text-5xl md:py-6">Create an Account</h2><p className="text-gray-500 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                        <div className=" flex py-4 px-4">
                        <div className=" rounded-full border-white shadow-xl bg-white mt-8 w-14 h-10  md:mt-14 md:w-28 md:h-28 flex justify-center md:py-8 md:px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className="font-samibold py-2 md:py-1 text-center text-md md:text-4xl hover:text-white">2</h1></div><div className="  m-8"><h2 className="text-purple-900 md:text-5xl md:py-6">Share with Friends</h2><p className="text-gray-500 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                        <div className=" flex py-4 px-4">
                        <div className=" rounded-full border-white shadow-xl bg-white mt-8 w-14 h-10  md:mt-14 md:w-28 md:h-28 flex justify-center md:py-8 md:px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className="font-samibold py-2 md:py-1 text-center text-md md:text-4xl hover:text-white">3</h1></div><div className="  m-8"><h2 className="text-purple-900 md:text-5xl md:py-6">Enjoy your life</h2><p className="text-gray-500 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">

                    <img src={iphonex} className="py-36" ></img>
                    </div>
                </div>
            </section>
        </>
    );
}