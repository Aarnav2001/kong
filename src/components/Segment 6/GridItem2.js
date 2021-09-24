import React from "react";
import TwitterIcons from './TwitterIcons'

const GridItem2 = (props) => {
    return (
        <div class='flex flex-col justify-between items-center' data-aos='fade-right' data-aos-delay='200' data-aos-anchor-placement='center-bottom'>
            <img  class='pt-5' src={props.img} alt="Image1" />
            <div class='text-button_hover_yellow font-strasua text-center text-xl pt-5 pb-2'>{props.name}</div>
            <div class='text-white font-strasua text-center pt-2 pb-2'>{props.post}</div>
            <p class='text-white font-body text-justify pt-5'>
                {props.text}
            </p>
            <TwitterIcons handle={props.twitter}/>


        </div>
    )
}

export default GridItem2;