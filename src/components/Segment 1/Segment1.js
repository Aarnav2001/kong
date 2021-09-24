import React from "react";
import JoinButton from '../Segment 1/JoinButton';

import Image1 from '../../assets/images/s1 i1.png'
import Image2 from '../../assets/images/s1 i2.png'


const Segment1 = () => {
    return (
        <div class='bg-transparent py-10 flex flex-col items-center'>
            <img  src={Image1} alt="Image1" />
            <div class='p-10 md:w-1/4'>
                <JoinButton />
            </div>
            <div class='p-5 md:w-1/4 justify-evenly flex flex-row'>
                <div class='float-left'>
                    <img  src={Image2} alt="Image2" />
                </div>
                <div class='text-white font-strasua p-4'><a href="https://opensea.io/collection/rumble-kong-league">Find us on open sea</a></div>
            </div>
            <div class='p-10 items-center flex font-strasua text-white text-2xl'>
                Read
                <pre> </pre> 
                our
                <pre> </pre>
                    <a href="https://www.rumblekongleague.com/assets/kongpaper.pdf">
                    <div class="hover:text-button_hover_yellow"> 
                         kongpaper
                    </div>
                    </a>
            </div>
            
        </div>
    )
}

export default Segment1;
