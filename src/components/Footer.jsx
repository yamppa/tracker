import React from 'react'
import './Footer.css'
import fb from './icons/socialmedia-icons/facebook.png'
import twitter from './icons/socialmedia-icons/twitter.png'
import linkedin from './icons/socialmedia-icons/linkedin.png'
import instagram from './icons/socialmedia-icons/instagram.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='sb__footer footer-padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                   <h4>For Business</h4> 
                   <a href="">
                        <p>Employer</p>
                    </a>
                    <a href="">
                        <p>Our Plan</p>
                    </a>
                    <a href="">
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Resources</h4>
                    <a href="">
                        <p>Employ</p>
                    </a>
                    <a href="">
                        <p>Our Plan</p>
                    </a>
                    <a href="">
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Partners</h4>
                    <a href="">
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Information</h4>
                    <a href="">
                        <p>About</p>
                    </a>
                    <a href="/tracker/stats">
                        <p>Stats</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Coming soon on</h4>
                    <div className='socialmedia'>
                        <p><img src={fb} alt='' /> </p>
                        <p><img src={twitter} alt='' /> </p>
                        <p><img src={linkedin} alt='' /> </p>
                        <p><img src={instagram} alt='' /> </p>
                    </div>
                </div>
            </div>
     <hr></hr>

     <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
            <p>
                @{new Date().getFullYear()} Jami Heinonen. All right reserved.
            </p>
        </div>
        <div className='sb__footer-below-links'>
            <a href=""><div><p>Terms & Conditioins</p></div></a>
            <a href=""><div><p>Privacy</p></div></a>
            <a href=""><div><p>Security</p></div></a>
            <a href=""><div><p>Cookie Declaration</p></div></a>
        </div>
     </div>


        </div>
    </div>
  )
}

export default Footer