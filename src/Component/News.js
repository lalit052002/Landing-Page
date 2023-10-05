import React from 'react'
import './css/News.css'
import './css/Team.css'
// import Team from './Team'

import {  FaCalendar, FaUser, FaWind } from 'react-icons/fa'


const News = ({obj}) => {


    console.log(obj);
    return (

        <>
            <div className='team-container'>

                <div><hr /> </div>
                <div className='H'>
                    <div className='h'>Out Team</div>
                    <div className='hm' >MEET OUR TEAM</div>
                    <div className='hh'> Lorem Ipsum is simply dummy text of the printing and industry,  <br />
                        standard dummy text ever since the 1500s
                    </div>
                </div>
            </div>


            <div className='container4'>
                   
                {obj.map(obj5 =>
                    

                    <div className='grid-i'>
                        <div className='grid1-i'>
                        <div className='image1'> <img src={obj5.img} alt='i'></img>  </div>
                        <div className='inside'>
                                 
                                 <FaUser/>
                                 <p>By Admin</p>
                                 <FaCalendar/>
                                 <p>20-12-2000</p>

                        </div>
                        <div className='title1'>{obj5.title}</div>
                        <div className='desg1'> {obj5.para}</div>

                        </div>
                    </div>
                )}


            </div>

        </>
    )
}

export default News
