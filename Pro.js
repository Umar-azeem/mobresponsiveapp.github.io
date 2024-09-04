import react from "react";
import Swal from "sweetalert2";
export function Pro(){
  const getPlain=()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "congratulations you got it",
      showConfirmButton: false,
      timer: 1500
    });
  }
return(
    <>
    <section className="container  flex flex-col">
    <div className="  py-10">
          <div className="flex flex-col center justify-center">
            <h6 className="text-gray-500 text-center text-sm">PRINCING</h6>
            <h1 className="text-purple-800 text-4xl text-center font-bold">Upgrade to Pro</h1>
          </div>
        </div>
        <div className="  lg:flex lg:items-center lg:justify-center px-12 py-6">
          <div className="  justify-center flex border-purple-500 hover:border-t-4 shadow-lg hover:shadow-slate-300 px-2 py-8 m-4 hover:-translate-y-0.5">
          <div className="text-center px-10 py-4">
            <h2 className="text-pink-400 text-md mt-4">PERSONAL</h2>
            <h1 className="text-purple-700 text-4xl mt-4">$14/m</h1>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl"></p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">10 Projects</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">5 GB Storage</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Basic Support</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Collaboration</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Reports and analytics</p>
            <a><button onClick={getPlain} className="text-white from-purple-600 border-gray-600 to-pink-500 bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800  border-[1px] hover:shadow-2xl lg:text-lg text-xs lg:mt-4 py-2 lg:px-11 px-1 rounded-md hover:-translate-y-0.5">CHOOSE THIN PLAIN</button></a>
          </div>
          </div>
          <div className="  justify-center flex border-purple-500 hover:border-t-4 shadow-lg hover:shadow-slate-300 px-2 py-8 m-4 hover:-translate-y-0.5">
          <div className="text-center lg:px-10 lg:py-4">
            <h2 className="text-pink-400 text-md mt-4">FOR TEAMS</h2>
            <h1 className="text-purple-700 text-4xl mt-4">$29/m</h1>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl"></p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Unlimited Projects</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">100 GB Storage</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Priority Support</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Collaboration</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Reports and analytics</p>
            <a><button onClick={getPlain} className="text-white from-purple-600 to-pink-500 bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-gray-600 border-[1px] hover:shadow-2xl lg:text-lg text-xs lg:mt-4 py-2 lg:px-11 px-1 rounded-md hover:-translate-y-0.5">CHOOSE THIN PLAIN</button></a>

          </div>
          </div>
          <div className="  justify-center flex border-purple-500 hover:border-t-4 shadow-lg hover:shadow-slate-300 px-2 py-8 m-4 hover:-translate-y-0.5">
          <div className="text-center px-10 py-4">
            <h2 className="text-pink-400 text-md mt-4">ENTERPRISE</h2>
            <h1 className="text-purple-700 text-4xl mt-4">$249/m</h1>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl"></p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Unlimited Projects</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Unlimited Storage</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Collaboration</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Reports and analytics</p>
            <p className="text-gray-500 text-l mt-6 lg:hover:text-xl">Web hooks</p>
            <a><button onClick={getPlain} className="text-white from-purple-600 to-pink-500 bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  border-gray-600 border-[1px] hover:shadow-2xl lg:text-lg text-xs lg:mt-4 py-2 lg:px-11 px-1 rounded-md hover:-translate-y-0.5">CHOOSE THIN PLAIN</button></a>
          </div>
          </div>
         
        </div>
    </section>
    </>
);
}