import React from "react";

import Image1 from '../../assets/images/s2 i1.jpg'

const Segment2 = () => {
    
    const seg1 = "Rumble Kong League is a competitive 3 vs 3 basketball experience, combining play-to-earn functionality with NFT Collection mechanics, enabling users to compete in engaging ways through NFTs. Launching with a set of unique 10.000 ERC-721 tokens, called Kongs. Alongside a truly unique look, each Kong comes with a randomly generated set of attributes that can influence their performance in a match, providing additional depth and strategic elements."
    const seg2 = "Combining our strong vision, high-quality art, cutting-edge backend solutions, as well as a public and experienced team, it is our goal to give new use-cases to NFTs and disrupt the current landscape.Kongs will be released with a provenance that is computed and presented here on the website, without compromising the rarities, meaning no metadata leak is possible. This ensures a fair random generation of the Kongs. Permanence of the art is guaranteed, in addition to having your art live on IPFS, we have taken an extra measure to have it on Arweave, as well. Minting randomness is guaranteed via in-contract mechanisms."

    return (
        <div class='flex flex-col md:px-44 items-center'>
            <div class='border-t border-white flex flex-col'>
            <div class='border-b border-white flex flex-col'>
                
                <div class='text-button_hover_yellow font-strasua text-left text-2xl pt-5 pb-2'>Get Ready to Rumble</div>
            
                <div class='w-28 border-b border-button_hover_yellow '></div>

                <p class='text-white font-body text-justify text-xl pt-10'>
                    {seg1}
                </p>

                <div class='flex justify-evenly'><img  style={{width:'50%', height: ''}}src={Image1} alt="Image1" /></div>

                <p class='text-white font-body text-justify text-xl pt-10 pb-10'>
                    {seg2}
                </p>                


            </div>
            </div>
        </div>
    )
}

export default Segment2;