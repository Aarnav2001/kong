import { PreviousMap } from 'postcss';
import React from 'react';

const ConnectButton = (props) => {
    return (
        <>
            <div class="group border rounded border-black p-3 hover:bg-button_hover_yellow">
                <p class="text-black font-strasua" >{props.name}</p>
            </div>
        </>
    )
}

export default ConnectButton;