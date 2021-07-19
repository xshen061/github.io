import React from 'react'
import Pic from './homepic.JPG'

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h5>This is a store that providing all hand-made Soaps, scented with essential oils and colored with botanical elements
            </h5>
        </div>
    )
}

export default About