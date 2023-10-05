import React from 'react'

import './css/Highlight.css'

const Iterator = ({ value }) => {

    const temp = value.id;

    return (
        <>
            <div className='bx1'>
                <div className='bx2'>
                    {
                        temp % 2 == 1 ?
                            <div className='bx2-1'>
                                <div className='bx2-1-1' > {value.date}</div>
                                <div className='bx2-1-2'>
                                    {value.para}
                                </div>
                                <div className='bx2-1-3'>
                                    <button className="btn btn-outline-success" type="">Coins</button>
                                </div>
                            </div>
                            :
                            <div className='bx2-2'>
                                <div className='bx2-2-1' > 20-Nov-2033</div>
                                <div className='bx2-2-2'> Lorem Ipsum is simply text of the printing  <br />
                                    Lorem Ipsum has been the industry's<br />
                                    standard since the 1500s
                                </div>
                                <div className='bx2-2-3'>
                                    <button className="btn btn-outline-success" type="">Coins</button>
                                </div>

                            </div>
                    }
                </div>
            </div>

        </>
    )
}

export default Iterator;
