import React from 'react'
import './css/Highlight.css';

import './css/FandQ.css';
// import AccordianEX from './AccordianEX';
// Import Bootstrap CSS (add this line to your imports)



const FandQ = () => {
  return (
    <>
      <div >
        <div className='H'>
          <div className='h'>FAQ</div>
          <div className='hm' >Frequatly Asked Questions</div>
          <div className='hh'> Lorem Ipsum is simply dummy text of the printing and industry,  <br />
            Lorem Ipsum has been the industry's<br />
            standard dummy text ever since the 1500s
          </div>
        </div>
      </div>




      {/* ----------------- ACCORDION ------------ */}
      <div>
        <div ClassName="accordion" id="accordionPanelsStayOpenExample">
          <div id='q'>
          <div ClassName="accordion-item " >
            <h4 ClassName="accordion-header" >
              <button ClassName="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                What is Main use of TypeScript in Next.js
              </button>
            </h4>
            <div id="panelsStayOpen-collapseOne" ClassName="accordion-collapse collapse show">
              <div ClassName="accordion-body" >
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate ClassNamees that we use to style each element. These ClassNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div ClassName="accordion-item">
            <h4 ClassName="accordion-header">
              <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              What is Main use of TypeScript in Next.js
              </button>
            </h4>
            <div id="panelsStayOpen-collapseTwo" ClassName="accordion-collapse collapse">
              <div ClassName="accordion-body ">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate ClassNamees that we use to style each element. These ClassNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div ClassName="accordion-item">
            <h4 ClassName="accordion-header">
              <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              What is Main use of TypeScript in Next.js
              </button>
            </h4>
            <div id="panelsStayOpen-collapseThree" ClassName="accordion-collapse collapse">
              <div ClassName="accordion-body " >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate ClassNamees that we use to style each element. These ClassNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          </div>
        </div>



      </div>



    </>
  )
}

export default FandQ
