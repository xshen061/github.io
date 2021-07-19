import React from 'react'
import Pic from './homepic.JPG'

const Contact=()=>{
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h5>Email: xxxx@soap.com</h5>
            <br />
            <h5>Tel: (613)-123-4567</h5>
        </div>
    )
}

export default Contact