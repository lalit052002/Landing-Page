import React from 'react'
import './css/Display.css'
import Ig from '../img/store.jpg'
const Display = () => {
    return (
        <>

            <div className='container1'>
               <div><hr/></div>

                <div className='con-1'>

                    <div className='con-i'>

                        <div className='con1'>Download App</div>
                        <div className='con-ii-1'>The Choice is Yours ,You've Get IT</div>
                        <div className='con-ii-2'> Lorem Ipsum is simply dummy<br /> Lorem Ipsum is simply dummy<br />text of the printing <br /> and industry,
                            ext ever since the 1500s <br />Lorem Ipsum is simply dummy<br /></div>

                    </div>

                    <div className='con-ii'>

                        
                        <img src={Ig} />
                        

                    </div>
                </div>

            </div>

      
    </>
  )
}

export default Display
