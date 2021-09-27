import React,{useState,useEffect, useRef} from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import moduleCSS from './Navbar.module.css';
function Navbar() {
    const [toggleshow, settoggleshow] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleHandle=()=>{
        settoggleshow(!toggleshow);
    }
    
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (toggleshow) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }
      }, [toggleshow]);

  return (
    <nav>
      <div className={moduleCSS.navcenter}>
        <div className={moduleCSS.navheader}>
          {/* <p>LOGO</p> */}
          <button className={moduleCSS.navtoggle} onClick={toggleHandle}>
          <FaBars />
          </button>
        </div>
        <div className={moduleCSS.navlinks} ref={linksContainerRef}>
          <ul className={moduleCSS.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href="">{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div >
          <ul className={moduleCSS.navsocial}>
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
