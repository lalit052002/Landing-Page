import React from 'react'
import './css/Footer.css'
import Footer1 from './Footer1.js'
const Footer = () => {
  return (
    <>

      <div className='window'>

        <div className='f1'>
          <div className='footer'>

            <div className='footer-i'>

              <div className='part1'>

                <div className='heading'>
                  <div>Contact Us</div>
                  <div>Lets's Talk About Problem</div>
                </div>


                <div className='part-i'>

                  <div className='part2'>
                    <div>Our Location</div>
                    <div>Winway World Offices ,4th  floor left side near by Nrk bussiness Park Vijay Indore </div>
                  </div>

                  <div className='part2'>
                    <div>Our Location</div>
                    <div>Winway World Offices ,4th  floor left side near by Nrk bussiness Park Vijay Indore </div>
                  </div>

                  <div className='part2'>
                    <div>Our Location</div>
                    <div>Winway World Offices ,4th  floor left side near by Nrk bussiness Park Vijay Indore </div>
                  </div>

                  <div className='part2'>
                    <div>Our Location</div>
                    <div>Winway World Offices ,4th  floor left side near by Nrk bussiness Park Vijay Indore </div>
                  </div>
                </div>
              </div>
              <div className='form1'>

                <form className='form1-i'>
                  <div className='msg'>Send Us Meassage
                  </div>
                  <label className='l'>      full name      </label>
                  <input type="text" className='input' />

                  <label className='l'>email</label>
                  <input type='email' className='input'></input>

                  <label className='l'>Message</label>
                  <textarea id='a' />

                  <button className='btn'>submit</button>



                </form>
              </div>
            </div>


            <div className='footer2'>

              <div className='footer2-1'>
                <div id='f2-1'>
                  <p id='fp1'>News Letters</p>
                  <p id='fp2'>  para: "Lorem Ipsum is simply dummy text <br />
                    of the printing and industry standard dummy <br /> text
                    ever since the 1500s"</p>
                </div>
                <div id='f2-2'>
                  <form>
                    <input type='email'></input>
                    <button > Sign Up</button>
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>

      <Footer1/>

      </div>

    </>
  )
}

export default Footer
