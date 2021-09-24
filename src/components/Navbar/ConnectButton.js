import React from 'react';

import ModalButton from '../Navbar/ModalButton'

const ConnectButton = () => {
    const [showModal, setShowModal] = React.useState(false);
    const closeMenu = () => {
        setShowModal(false);
        document.removeEventListener('click', closeMenu);
        };
    const connects = ['Metamask', 'Walletconnect', 'Walletlink', 'Ledger', 'Trezor', 'Lattice', 'Authereum', 'Fortmatic'];
    return (
        <>
            <div class="group border rounded border-white p-3 hover:bg-button_hover_yellow">
                <p class="text-white font-strasua" 
                   onClick={(event) => {
                        if (showModal) {
                            closeMenu();
                            return;
                        }
                        setShowModal(true);
                        event.stopPropagation();
                        document.addEventListener("click", closeMenu);
                       }}>Connect</p>
            </div>
            {showModal ? (
                <>
                <div
                    className="md:mr-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed w-full h-full outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    {/*content*/}
                    <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
                                {connects.map((name) => {
                                    return (
                                        <ModalButton name={name}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ConnectButton;