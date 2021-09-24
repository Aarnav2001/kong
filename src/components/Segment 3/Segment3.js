import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Image1 from '../../assets/images/s3 i1.png'

const Segment3 = () => {
    AOS.init()
    
    const seg1 = "Each Kong is assembled from a set of 100+ carefully hand-drawn traits, split into various categories. Out of over 45million possible combinations, 10.000 will be assembled through a programmatic approach, giving each Kong a distinct look. Our art is inspired by other monkey-based collections (You know who we are talking about), but it is our aim to give it our own twist through unique designs."
    const seg2 = "Each of the traits has been hand-drawn by digital artist sickpencil, known for his unique art style and various high-quality NFT derivatives and standalone NFT pieces. Rumble Kongs are giving him the opportunity to express his creativity to the fullest, by combining everyday basketball traits with unique out-of-this-world designs. All the art is uploaded to IPFS and Arweave for permanence. In addition to that, owners will receive a complete commercial licence to any owned Kong."
 
    return (
        <div class='flex flex-col md:px-44 items-center' data-aos='fade-left' data-aos-delay='300'>
            <div class='border-t border-white flex flex-col'>
            <div class='border-b border-white flex flex-col'>
                
                <div class='text-button_hover_yellow font-strasua text-left text-2xl pt-5 pb-2'>Commitment to quality</div>
            
                <div class='w-28 border-b border-button_hover_yellow '></div>

                <div class='flex flex-col md:flex-row pb-10'>
                    <div class='flex-1'>
                        <p class='text-white font-body text-justify text-xl pt-10'>
                            {seg1} <br/><br/>
                            {seg2}
                        </p>
                    </div>
                    <div class='flex-1'>
                        <div class='flex justify-evenly'><img  style={{width:'90%', height: ''}}src={Image1} alt="Image1" /></div>               
                   </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Segment3;