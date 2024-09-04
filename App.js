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

 function Mysite() 
{
  return (
    <>
   
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
