import React from 'react'
import './css/Team.css'
import './css/Highlight.css'



const Team = ({ obj }) => {
    // console.log(obj)
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


            <div className='img-container'>
                   
                {obj.map(idx =>
                    

                    <div className='grid'>
                        <div className='grid1'>
                        <div className='image'> <img src={idx.img} alt='i'></img>  </div>
                        <div className='title'>{idx.title}</div>
                        <div className='desg'> {idx.desg}</div>

                        </div>
                    </div>
                )}


            </div>

        </>
    )
}

export default Team;
