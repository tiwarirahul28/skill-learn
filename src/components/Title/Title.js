import React from 'react'
import './Title.css'
const Title = ({Title}) => {
    return (
        <>
            <div className='title'>
                <div className='title-box'>
                   {Title}
                </div>
                <div className='feedback'>
                    <a href='https://forms.gle/fRb8RKYr5e4z4L1q7' target="_blank">feedback</a>
                </div>
            </div>
        </>
    )
}

export default Title
