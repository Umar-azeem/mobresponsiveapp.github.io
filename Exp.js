import React, { useState } from "react";
import graphic from "../img/graphic.png";
export function Exp() {
  const [getValue,setValue] = useState('Communicate')
  console.log("test-check",getValue)
  return (
    <>
      <section className="bg-slate-200 ">
        <div className="  bg-slate-200  py-10">
          <div className="flex flex-col center justify-center">
            <h6  className="text-gray-500 text-center text-sm">FEATURES</h6>
            <h1 className="text-purple-800 text-sm lg:text-4xl text-center font-bold">Do more with our app</h1>
            </div>
        </div>
        <div className="  bg-slate-200 gap-2">
          <ul className="nav nav-tab nav-justified flex justify-center">
            <li onClick={() => setValue('Communicate')} className={`md:py-5 md:px-16 py-2 px-4 text-gray-500 text-xs md:text-2xl font-samibold ${ getValue == 'Communicate' &&  "border-t-4 border-pink-400 text-purple-900 bg-white before:bg-white"} `}><a className="nav" >Communicate</a></li>
            <li onClick={() => setValue('Scheduling')}  className={`md:py-5 md:px-16 py-2 px-4 text-gray-500 text-xs md:text-2xl font-samibold ${ getValue == 'Scheduling' &&  "border-t-4 border-pink-400 text-purple-900 bg-white before:bg-white"} `}><a className="nav" >Scheduling</a></li>
            <li onClick={() => setValue('Messages')}    className={`md:py-4 md:px-16 py-2 px-4 text-gray-500 text-xs md:text-2xl font-samibold ${ getValue == 'Messages' && "border-t-4 border-pink-400 text-purple-900 bg-white before:bg-white"} `}> <a className="nav" >Messages</a></li>
            <li onClick={() => setValue('Live Chat')}   className={`md:py-4 md:px-16 py-2 px-4 text-gray-500 text-xs md:text-2xl font-samibold ${ getValue == 'Live Chat' && "border-t-4 border-pink-400 text-purple-900 bg-white before:bg-white"} `}><a className="nav" >Live Chat</a></li>
          </ul>
          </div>
            <div className="  flex justify-center ">
          {getValue == 'Communicate' && (
            <>
            <div className=" bg-white flex align-middle"><img src={graphic} className="md:px-4 md:py-4 px-1 py-1 flex"></img></div>
            <div className="bg-white"> 
              <h1 className="text-purple-800 md:text-4xl text-sm px-2 md:py-4" >Communicate with ease</h1>
              <p className="text-pink-500  md:text-xl text-xm md:px-2 md:py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            </>
          )}
         </div>
         <div className="  flex justify-center ">
          {getValue == 'Scheduling' && (
            <>
            <div className="bg-white"> 
              <h1 className="text-purple-800 md:text-4xl text-sm px-2 md:py-4" >Communicate with ease</h1>
              <p className="text-pink-500  md:text-xl text-xm md:px-2 md:py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>

            </>
          )}
          </div>
          <div className="  flex justify-center ">
          {getValue == 'Messages' && (
            <>
            <div className=" bg-white flex align-middle"><img src={graphic} className="md:px-4 md:py-4 px-1 py-1 flex"></img></div>
            <div className="bg-white"> 
              <h1 className="text-purple-800 md:text-4xl text-sm px-2 md:py-4" >Communicate with ease</h1>
              <p className="text-pink-500  md:text-xl text-xm md:px-2 md:py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            </>
          )}
          </div>
          <div className="  flex justify-center">
          {getValue == 'Live Chat' && (
            <>
           
            <div className="bg-white"> 
              <h1 className="text-purple-800 md:text-4xl text-sm px-2 md:py-4" >Communicate with ease</h1>
              <p className="text-pink-500  md:text-xl text-xm md:px-2 md:py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  md:text-l text-xs md:px-2 font-samibold md:py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>

            </>
          )}
          </div>

      </section>
    </>
  );
}