import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import "./TestimonialStyles.css"
const Testimonial = () => {
  return (

    // lots of divs for overlay

    <div className='testimonial'>
        <div className='container'>
            <div className='outline'>
                <div className='content'>
                    <i><FaDatabase/>Staxx</i>
                    <p className='body'>
                        Nonumy nonumy ipsum labore amet ut et amet. Erat sit voluptua magna 
                        sed, sed gubergren sit invidunt magna sit dolor.
                    </p>
                    <div className='name'>
                        <p>Marie Chaville</p>
                        <p>CEO, Staxx</p>
                        
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Testimonial