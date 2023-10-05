import React from 'react'
import './css/Highlight.css';
import Iterator from './Iterator'

import Ig from '../img/data.png';
import { FaAndroid, FaAngular, FaApple, FaCircle, FaCoins, FaFacebook, FaGift, FaGithub, FaInstagram, FaLinux, FaPumpSoap, FaSave, FaShieldVirus, FaSnapchatGhost, FaUbuntu, FaWind } from 'react-icons/fa'

const Highlight = ({ obj }) => {


    return (
        <>

            <div className='high-container'>
                {/* <div><hr/></div> */}

                <div className='c1'>
                    <p>
                        Lorem Ipsum is simply 20000+ dummy text of the printing and industry
                    </p>
                </div>
                <div className='icons'>


                    <div className='icons-inside'>
                        <div> <FaUbuntu /></div>
                        <div><FaLinux /></div>
                        <div> <FaAndroid /></div>
                        <div><FaApple /></div>
                        <div> <FaPumpSoap /></div>


                    </div>
         

                </div>

                         <div><hr/></div>
                <div className='again-h'>
                    <div className='H'>
                        <div className='h'>Roadmap</div>
                        <div className='hm' >The TimeLine</div>
                        <div className='hh'> Lorem Ipsum is simply dummy text of the printing and industry,  <br />
                            Lorem Ipsum has been the industry's<br />
                            standard dummy text ever since the 1500s
                        </div>
                    </div>




                </div>

                {/* <div><hr/></div> */}

                <div>
                    {obj.map((ind) =>
                        <Iterator key={ind.id} value={ind} />

                    )}
                </div>

                <div><hr/></div>

                <div className='H'>
                    <div className='h'>Cripto Feature</div>
                    <div className='hm' >Best Features</div>
                    <div className='hh'> Lorem Ipsum is simply dummy text of the printing and industry,  <br />
                        Lorem Ipsum has been the industry's<br />
                        standard dummy text ever since the 1500s
                    </div>
                </div>


               
            </div>

        </>
    )
}

export default Highlight;
