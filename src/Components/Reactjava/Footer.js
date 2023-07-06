/*import React from "react";

function Footer(){
    return (
        <div>
                

                <footer class="flex-rw">
                
                <ul class="footer-list-top">
                    <li>
                    <h4 class="footer-list-header">About Pavilion</h4></li>
                    <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>
                    <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
                    <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">BECOME A RETAILER</a></li>

                    <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

                    <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTS</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li>
                    <h4 class="footer-list-header">The Gift Selection</h4></li>


                    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
                    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">HOME DECOR</a></li>
                    <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">MUGS</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">PET LOVER</a></li>
                    <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li id='help'>
                    <h4 class="footer-list-header">Please Help Me</h4></li>
                    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>
                    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">STORE LOCATOR</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">NEW USERS</a></li>
                    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
                </ul>
                <section class="footer-social-section flex-rw">
                    <span class="footer-social-overlap footer-social-connect">
                    CONNECT <span class="footer-social-small">with</span> US
                    </span>
                    <span class="footer-social-overlap footer-social-icons-wrapper">
                    <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
                    <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
                    <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
                    <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
                    </span>
                </section>
                <section class="footer-bottom-section flex-rw">
                <div class="footer-bottom-wrapper">   
                <i class="fa fa-copyright" role="copyright">
                
                </i> 2019 Pavilion in <address class="footer-address" role="company address">Bergen, NY</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
                    </div>
                    <div class="footer-bottom-wrapper">
                    <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
                    </div>
                </section>
                </footer>
        </div>

        );

}
export default Footer;
*/
import React from "react";
import { Component } from "react";

export default  class Footer extends Component {
    render(){
        return(
            <footer className="page-footer font-small stylish-color-dark">

            <div className="container text-center text-md-left">
    
                <div className="row">
    
                    <div className="col-lg-5 col-md-12 col-12 heading-3">
    
                        <h5 className="w">About</h5>
                        <p className="t">Colorize pictures with AI, turning black and white photos to color in seconds. Reimagine the past by colorizing pictures of ancestors and historic figures.</p>
                        <p className="t">Enhance and fix blurry pictures intelligently with deblur technology.</p>
    
                    </div>
    
                    <hr className="clearfix w-100 d-md-none"/>
    
                    <div className="col-lg-2 col-md-4 col-12">
    
                        <h5 className="w">Account</h5>
    
                        <ul className="link">
                            <li >
                                <a className="link" href="">My Account</a>
                            </li>
                            <li>
                                <a href="/Login">Login</a>
                            </li>
                            
                            <li>
                                <a href="">settings</a>
                            </li>
                            <li>
                                <a href="">support</a>
                            </li>
                        </ul>
    
                    </div>
    
                    <hr className="clearfix w-100 d-md-none"/>
    
                    <div className="col-lg-2 col-md-4 col-12">
    
                        <h5 className="w">Navigation</h5>
    
                        <ul className="link">
                            <li>
                                <a href="/Home">Home</a>
                            </li>
                            <li>
                                <a href="/About">About Us</a>
                            </li>
                            <li>
                                <a href="blog.html">Read Blog</a>
                            </li>
                            <li>
                                <a href="/colorize">Colorize</a>
                            </li>
                            <li>
                                <a href="/enhance">Enhance</a>
                            </li>
                        </ul>
    
                    </div>
    
                    <hr className="clearfix w-100 d-md-none"/>
    
                    <div className="col-lg-3 col-md-4 col-12 social">
    
                        {/* <h5 className="w">Social</h5> */}
    
                        <ul className="link">
                            <li>
                                <a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <img className="ooo" src="/images/logo.png" alt="pay-cards"/>
    
                    </div>
    
                </div>
    
            </div>
        </footer>
        )
    }
}
