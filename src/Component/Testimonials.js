import React from 'react'
import './css/Testimonials.css'
import './css/Team.css'

const Testimonials = ({ obj }) => {
  return (
    <>
      <div className='team-container'>

        <div><hr /> </div>
        <div className='H'>
          <div className='h'>Testimonials</div>
          <div className='hm' >What Our Client Say</div>
          <div className='hh'> Lorem Ipsum is simply dummy text of the printing and industry,  <br />
            standard dummy text ever since the 1500s
          </div>
        </div>
      </div>


      <div className='test'>
        <div className='t'>
          {obj.map(idx =>


            <div className='test-1'>
              <div className='test-1-1'>
                <div className='test1-1'> <img src={idx.img}></img>  </div>
                <div className='test1-2'>
                  <div className='test1-2-1'>{idx.title}</div>
                  <div className='test1-2-2'> {idx.desg}</div>
                </div>
              </div>

              <div className='test-1-2'>
                   {idx.para}
              </div>

            </div>

          )}
        </div>
      </div>
      
    </>
  )
}

export default Testimonials

