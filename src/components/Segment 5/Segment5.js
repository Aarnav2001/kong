import React from "react";
import GridItem from "./GridItem";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import Image1 from '../../assets/images/s5 i1.png'
import Image2 from '../../assets/images/s5 i2.png'
import Image7 from '../../assets/images/s5 i7.png'

import Image3 from '../../assets/images/s5 i3.png'
import Image4 from '../../assets/images/s5 i4.png'
import Image5 from '../../assets/images/s5 i5.png'
import Image6 from '../../assets/images/s5 i6.png'




const Segment5 = () => {

    AOS.init()

    const data = [
        {id : 1, img : Image3, name : 'Play', text : 'Manage your player and participate in exciting 3 versus 3 online matches with and against other Kong NFTs. You decide on the play-style and tactics of your Kong, making the most out of any given situation.'},
        {id : 2, img : Image4, name : 'Earn', text : "Compete in various leagues and tournaments to win prizes and earn a living as a basketball player. Earn real money through prize-pools, sponsorships, advertising and other revenue streams, opening up a completely new way of gaming."},
        {id : 3, img : Image5, name : 'Manage', text : "You can either create or join a basketball club and build the team of your dreams. Find other Kongs and make decisions on the best possible lineup of players to be victorious. Don’t want to manage yourself? No problem! Just join another club and become their MVP!"},
        {id : 4, img : Image6, name : 'Dominate', text : "Once you found your dream club, and managed to get the most out of your Kong, it is up to you to perform, get those wins and get to the top of the Rumble Kong League. Make your own destiny and bring glory to your club!"}
    ]
    
    const seg1 = "The core gameplay of the Rumble Kong League will evolve around exciting 3 versus 3 basketball matches, combining proven gameplay- and play-to-earn mechanics. Compete with and against other real users and their NFTs in various leagues and compete for a range of rewards and become the best of your class. In order to participate in Leagues, users will need to be members of Clubs, a separate layer of the ecosystem, giving users the chance to manage their own team and find the best possible kong synergies to be victorious."
    const seg2 = "Making a game is easy. Making a good game is hard. This is why the initial drop of 10.000 Kongs will help fund the project, planned to be released later in 2021 globally. Kong owners will have a say in our roadmap, follow us on this journey, and be the first to get their hands on the game."
    const seg3 = "The Kongs will always be at the heart of the Rumble Kong League, it is our vision to open the league up to other NFT Collections in the future, giving NFT interoperability a new meaning and offering new ways to use NFTs to anyone. We are already in discussion with multiple known NFT Collections, some of which will be announced in the coming weeks."
    return (
        <div class='flex flex-col md:px-44 items-center' >
            <div class='border-t border-white flex flex-col' data-aos='fade'>
            <div class='border-b border-white flex flex-col'>
                
                <div class='text-button_hover_yellow font-strasua text-left text-2xl pt-5 pb-2'  id='game'>The Game</div>

                <div class='w-28 border-b border-button_hover_yellow'></div>

                <img  class='pt-5' src={Image1} alt="Image1" />

                <p class='text-white font-body text-justify text-xl pt-5'>
                    {seg1}
                </p>

                <img  class='pt-5' src={Image2} alt="Image2" />

                <p class='text-white font-body text-justify text-xl pt-5 pb-10'>
                    {seg2} <br/><br/>
                    {seg3}
                </p>

                <div >
                    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10" >
                        {data.map((item) => {
                            return (
                                <GridItem id ={item.id} img={item.img} name={item.name} text={item.text} />
                            )
                        })}
                    </div>
                </div>   

                <img  class='pt-5 pb-5' src={Image1} alt="Image7" />           


            </div>
            </div>
        </div>
    )
}

export default Segment5;