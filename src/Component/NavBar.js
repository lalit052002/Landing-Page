import React from 'react'
import './css/Nav.css';

import { FaAngular, FaFacebook, FaGift, FaGithub, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'

const NavBar = () => {
    return (

        <>
            <div className='container'>

                <div className='title'>
                    Cripto
                </div>
                 <div className='links'>
                    <ul className='ul-s'>

                        <li>     <a href='/'>Home</a>   </li>
                        <li> <a href='/feature'>Features</a>   </li>
                        <li> <a href='#'>Roadmap</a> </li>

                        <li>
                            <li className="nav-item ">
                                <a className='nav-link' href="#" id="n1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </li>
                        <li><a href='#'>Support</a>   </li>
                    </ul>
                </div> 
             <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> 



            </div>


            <div className='body-container'>

                 <div className='t1'>
                    Tailwind CSS Template for <br /> Cripto,ICO and Web3
                </div>

                <div className='t2'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and industry, <br />
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an printer <br />
                        took a galley of type and scrambled <br /> it to make a type specimen book.

                    </p>
                </div> 

                 <div className='t3'>

                    <div className='icons'>
                        <div> <FaInstagram /></div>
                        <div><FaFacebook /></div>
                        <div> <FaSnapchatGhost /></div>
                        <div><FaGithub /></div>
                        <div> <FaAngular /></div>


                    </div>

                </div>
                <div className='t3'>
                    <button className="btn btn-outline-success" type="">Buy Token at 50% off</button>
                </div> 




            </div>

            <div><hr/></div>
        </>
    )
}

export default NavBar;
