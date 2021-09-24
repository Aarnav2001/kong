import React from "react";

const GridItem = (props) => {
    return (
        <>
        {props.id != 3 ?
                <div class='flex flex-col items-center' data-aos='fade-right' data-aos-delay='200' data-aos-anchor-placement='center-bottom'>
                <img  class='pt-5' src={props.img} alt="Image1" />
                <div class='text-white font-strasua text-center pt-2 pb-2'>{props.name}</div>
                <p class='text-white font-body text-justify text-xl pt-5'>
                    {props.text}
                </p>
    
            </div>
            :
            <div class='flex flex-col items-center' data-aos='fade-left' data-aos-delay='200' data-aos-anchor-placement='center-bottom'>
                <img  class='pt-5' src={props.img} alt="Image1" />
                <div class='text-white font-strasua text-center pt-2 pb-2'>{props.name}</div>
                <p class='text-white font-body text-justify text-xl pt-5'>
                    {props.text}
                </p>
    
            </div>
            }
        </>
    )
}

export default GridItem;