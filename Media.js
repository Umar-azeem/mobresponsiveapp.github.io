import React,{Sociallink} from "react";
import Facebook from "./imag/facebook.svg";
import LinkedIn from "./imag/linkedin.svg";
import Instagram from "./imag/instagram.svg";
import Snapchat from "./imag/snap.png";
import Github from "./imag/git.png";
export class Media extends Sociallink{
    render(){
        return(
            <>
            <footer>
            <div className="  m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href='https://web.facebook.com/' target='_blank'>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href= "https://www.linkedin.com/in/umar-azeem-3b2509167/" target='_blank'>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/umar_azeem.64/' target='_blank'>
                  <img src={Instagram} className="w-5"  />
                </a>
              </li>
              <li>
                <a href='https://www.snapchat.com/add/mianu2398?share_id=tu1C5egnfBw&locale=en-US' target='_blank'>
                  <img src={Snapchat} className="w-6 rounded-lg" />
                </a>
              </li>
              <li>
                <a href='https://github.com/' target='_blank' >
                  <img src={Github} className="w-5 rounded-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
            </>

        );
    }

}