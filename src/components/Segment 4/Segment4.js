import React from "react";
import ClaimButton from '../Segment 4/ClaimButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Segment4 = () => {
    AOS.init()
    
    const seg1 = "A snapshot of all kong holders who are eligible for the sneaker drop will be taken on 06/08/2021 at 4 PM UTC"
    return (
        <>
        <div class='flex flex-col md:px-44 '>
            <div class='border-t border-white flex flex-col'>
                
                <div class='text-button_hover_yellow font-strasua text-left text-2xl pt-5 pb-2' data-aos='fade' id='sneakers'>The sneakers airdrop</div>

            </div>
        </div>
        <div class='flex flex-col  items-center'>
            <p class='text-white font-strasua text-justify text-xl pt-10 pb-10'>
            {seg1}
            </p>
        </div>
        <div class='flex flex-col md:px-44 items-center'>
            <div class='pb-10 md:w-1/4'>
                    <ClaimButton />
            </div>

            <div class='border-b border-white'></div>
        </div>

    </>
    )
}

export default Segment4;