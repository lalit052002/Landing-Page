import React from 'react'

import Ig from '../img/data.png';
import './css/Highlight.css';
import { FaAndroid, FaAngular, FaApple, FaCircle, FaCoins, FaFacebook, FaGift, FaGithub, FaInstagram, FaLinux, FaPumpSoap, FaSave, FaShieldVirus, FaSnapchatGhost, FaUbuntu, FaWind } from 'react-icons/fa'

function ShieldIcon({ prop }) {

    // console.log(prop)
    return (
        <>


            <div className='list'>
                {prop.map(idx =>

                    <div>
                        <div className='i'> <FaShieldVirus /></div>
                        <div className='ii'>{idx.title}</div>
                        <div className='iii'> {idx.para}</div>
                    </div>
                    )}
            </div >
            

             <div className='box1'>
                <div className='box-1'>

                    <div className='box-i'>

                        <img src={Ig} />
                    </div>

                    <div className='box-ii'>
                        <div className='b1'>Token</div>
                        <div className='box-ii-1'>Token Safe</div>
                        <div className='box-ii-2'> Lorem Ipsum is simply dummy<br /> Lorem Ipsum is simply dummy<br />text of the printing <br /> and industry,
                            ext ever since the 1500s <br />Lorem Ipsum is simply dummy<br /></div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default ShieldIcon
