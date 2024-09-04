import react from "react";
import Women from "../img/client.png";

export function Com(){
return(
    <>
    <section className="  flex flex-col">
    <div className="  py-10">
          <div className="flex flex-col center justify-center">
            <h6 className="text-gray-500 text-center text-xs md:text-sm">TESTMONIALS</h6>
            <h1 className="text-purple-800 text-sm lg:text-4xl text-center font-bold">What our Coustomer says</h1>
          </div>
        </div>
        <div className="flex  justify-center ">
        <img src={Women} width={100} height={100} className="rounded-full"></img>
        </div>
        <div className="flex  justify-center ">
        <p className="text-gray-500 flex text-center text-xs md:text-xl px-2  py-4">Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,pretium, nisi <br></br>nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
       

        </div>
        <h5 className="text-purple-700 text-center text-2xl">CRYSTAL GORDON</h5>
        <h6 className="text-pink-500 text-center">United States</h6>
    </section>
    </>
);
}