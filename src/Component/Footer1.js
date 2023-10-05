import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Ig from '../img/store.jpg'
import './css/Footer1.css'

function Footer1() {




    return (

        <>
            {/* <div style={{color:'white'}}>
                 <FaInstagram />
                 <FaYoutube/>
                 <FaFacebook/>
                 <FaTwitter/>
            </div> */}

            <div className='con1'>
                <div className='con1-1'>
                    <div >
                        <h4>Cripto</h4>
                    </div>
                    <div>
                        <h4>Support</h4>

                        <p><a href=''>settings&privecy</a></p>
                        <p><a href=''>Help & Supporgt</a></p>
                        <p><a href=''> Terms & Conditions</a></p>
                        <p><a href=''>On Points FAQ</a></p>
                        <p><a href=''>24/7 Supports</a></p>

                    </div>
                    <div>
                        <div>
                            <h4>Help</h4>

                            <p><a href=''>Payments</a></p>
                            <p><a href=''> Shipping</a></p>
                            <p><a href=''> Conditions</a></p>
                            <p><a href=''>On Points FAQ</a></p>
                            <p><a href=''>24/7 Supports</a></p>

                        </div>
                    </div>
                    <div>
                        <h4>News & Post</h4>

                        <div className='con1-2'>
                            <div className='con1-2-1'> <img src={Ig} alt=''></img>

                                <p> Lorem Ipsum is simply dummy  Lorem Ipsum is simply dummy</p>

                            </div>

                            <div className='con1-2-1'> <img src={Ig} alt=''></img>

                                <p> Lorem Ipsum is simply dummy  Lorem Ipsum is simply dummy</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1
