import React from 'react'
import Pic from './homepic.JPG'
import Pic2 from './sale1.JPG'
import Pic3 from './sale2.JPG'
import Pic4 from './sale3.JPG'
import About from './About'
import Contact from './Contact'
import Cart from './Cart';

const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <img src={Pic} width="300" height="300" class="center"></img>
            <h1>Welcome to the Soap!</h1>
            <br />
            <h4>Where you can find anything you want.</h4>
            <br />
            <img src={Pic2} width="1133" height="395"></img>
            <img src={Pic3} width="1133" height="395"></img>
            <img src={Pic4} width="1133" height="395"></img>
            <br /><br /><br /><br /><br />
            <footer>Designed by Cynthia Sheng 300091655</footer>
        </div>
    )
}

export default Home