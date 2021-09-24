import { React, useState, useEffect } from "react";

import navbar_logo from '../../assets/images/navbar logo.png';
import {Twitter, Discord} from './Icons';
import ConnectButton from "./ConnectButton";
import Sidebar from "./Sidebar";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
        // Set window width/height to state
        setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
        {windowSize.width >= 490 ?
        <div class="mx-auto flex flex-wrap flex-row md:flex-row items-center bg-navbar">
            <div class="flex-auto items-left md:pl-28 flex-row" >
                <div class="float-left">
                    <img style={{width: '75px', height: '75px'}} src={navbar_logo} alt="Logo" />
                </div>
                <div class="flex flex-grow items-center justify-around pt-7">
                    <button class="items-center text-white font-strasua hover:text-button_hover_yellow">
                    <Link
                        activeClass="active"
                        to="game"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Game
                    </Link>    
                    </button>
                    <button class="items-center text-white font-strasua hover:text-button_hover_yellow">
                    <Link
                        activeClass="active"
                        to="sneakers"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Sneakers
                    </Link>    
                    </button>
                    <button class="items-center text-white font-strasua hover:text-button_hover_yellow">
                    <Link
                        activeClass="active"
                        to="team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Team
                    </Link>    
                    </button>
                </div>
            </div>
            <div class="flex flex-auto flex-row pr-28">
                <div class="flex-1"></div>
                <div class="pl-28 flex flex-auto flex-row-reverse justify-around">
                    <ConnectButton/>
                    <Twitter/>
                    <Discord/>
                </div>
            </div>
        </div>
        :
        <div class="mx-auto flex flex-wrap flex-row md:flex-row items-center bg-navbar pr-2">
            <div class="flex-auto items-left md:pl-28 flex-row" >
                <div class="float-left">
                    <img style={{width: '75px', height: '75px'}} src={navbar_logo} alt="Logo" />
                </div>

                <div class="pt-3 pl-28 flex flex-auto flex-row-reverse justify-around">
                    <Sidebar/>
                    <ConnectButton/>
                    <Twitter/>
                    <Discord/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Navbar;

