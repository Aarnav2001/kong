import React from "react";
import GridItem2 from "./GridItem2";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import Image1 from '../../assets/images/s6 i1.png'
import Image2 from '../../assets/images/s6 i2.png'
import Image3 from '../../assets/images/s6 i3.png'
import Image4 from '../../assets/images/s6 i4.png'





const Segment5 = () => {
    AOS.init()

    const data = [
        {id : 1, img : Image1, name : 'Direkkt', post: 'visionary', text : "Marketing Director at The Sandbox with 10+ year experience working in the gaming industry (Activision Blizzard, Wargaming)", twitter :'https://twitter.com/direkkt' },
        {id : 2, img : Image2, name : 'Sickpencil', post: 'artist',text : "Digital artist and creative mastermind known for his unique style and several popular derivatives across the NFT space" , twitter :'https://twitter.com/sickpencil' },
        {id : 3, img : Image3, name : 'Naz', post: 'tech',text : "reNFT tech co-founder, first peer-to-peer ERC-721 and ERC-1155 lending / renting protocol", twitter : 'https://twitter.com/AlgorithmicBot'},
        {id : 4, img : Image4, name : 'Nickev', post: 'marketting',text : "Marketing all-rounder and co-founder at reNFT as well as Marketing at The Sandbox", twitter : 'https://twitter.com/nickev123' }
    ]
    
    const seg1 = "Meet the team bringing you the rumble. No anonymity, we have skin in the game to make this work."

    return (
        <div class='flex flex-col md:px-44 items-center'>
            <div class='border-t border-white flex flex-col pb-10'>
            
                
                <div class='text-button_hover_yellow font-strasua text-left text-2xl pt-5 pb-2' data-aos='fade' id='team'>The Team</div>

                <div class='w-28 border-b border-button_hover_yellow'></div>

                <p class='text-white font-body text-justify text-xl pt-5'>
                    {seg1}
                </p>

                <div >
                    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10">
                        {data.map((item) => {
                            return (
                                <GridItem2 id ={item.id} img={item.img} name={item.name} post={item.post} twitter={item.twitter} text={item.text} data-aos='fade-right' data-aos-delay='200' data-aos-anchor-placement='center-bottom'/>
                            )
                        })}
                    </div>
                </div>           


            </div>
            
        </div>
    )
}

export default Segment5;