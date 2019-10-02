import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer class="footer-emp-w3ls py-5">
                    <div class="container pt-lg-3">
                        <div class="row footer-top">
                            <div class="col-lg-4 col-sm-6 footer-grid-wthree">
                                <h4 class="footer-title text-uppercase mb-4">Who We Are</h4>
                                <div class="contact-info">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ipsum doloremque elit laudantium, totam rem
						aperiam, eaque ipsa quae. Excepteur ut occaecat proident, sunt voluptatem et accusantium doloremque elit dolor sit amet.</p>
                                    <h4 class="mt-3">Trusted by more than 1000+ people</h4>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 footer-grid-wthree mt-sm-0 mt-4">
                                <h3 class="footer-title text-uppercase mb-4">Latest News</h3>
                                <div class="contact-info">
                                    <div class="footer-style-w3ls">
                                        <h4 class="mb-2"><span class="fa mr-1 fa-twitter"></span> Sed ut piciatis unde natus</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit volupta....</p>
                                        <p class="date">23 Nov 2018.</p>
                                    </div>
                                    <div class="footer-style-w3ls mt-3">
                                        <h4 class="mb-2"><span class="fa mr-1 fa-twitter"></span> Modi tempra incunt sit</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit volupta....</p>
                                        <p class="date">24 Nov 2018.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
                                <h3 class="footer-title text-uppercase mb-4">Contact Us</h3>
                                <div class="contact-info">
                                    <div class="footer-style-w3ls">
                                        <h4 class="mb-2"> <span class="fa mr-1 fa-map-marker"></span> Location</h4>
                                        <p>Marketing Agency, 5th cross, 4th building, New York City.</p>
                                    </div>
                                    <div class="footer-style-w3ls my-3">
                                        <h4 class="mb-2"><span class="fa mr-1 fa-phone"></span> Phone</h4>
                                        <p>+121 098 8907 9987</p>
                                    </div>
                                    <div class="footer-style-w3ls">
                                        <h4 class="mb-2"><span class="fa mr-1 fa-envelope-open"></span> Email</h4>
                                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
                                <h3 class="footer-title text-uppercase mb-4">Quick Links</h3>
                                <ul class="links list-unstyled">
                                <li className=""><Link to="/">Home</Link></li>
								<li className=""><Link to="/about">About</Link></li>
								<li className=""><Link to="/services">Services</Link></li>
								<li className=""><Link to="/portfolio">Portfolio</Link></li>
								<li className=""><Link to="/team">Team</Link></li>
								<li className=""><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <div class="copy-right-top border-top">
                    <p class="copy-right text-center py-4">&copy; 2019 Digital. All Rights Reserved | Design by
		<a href="http://w3layouts.com/"> W3layouts </a>
                    </p>
                </div>

                <div class="move-top text-right">
                    <a href="#home" class="move-top">
                        <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                    </a>
                </div>

                <div id="popup1" class="popup-effect">
                    <div class="popup">
                        <img src="images/banner.png" alt="Popup Image" class="img-fluid" />
                        <p class="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
			sunt explicabo.</p>
                        <a class="close" href="#">&times;</a>
                    </div>
                </div>

                <div id="popup2" class="popup-effect">
                    <div class="popup">
                        <iframe src="https://player.vimeo.com/video/188673754"></iframe>
                        <p class="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
			sunt explicabo.</p>
                        <a class="close" href="#">&times;</a>
                    </div>
                </div>

                <div id="popup3" class="popup-effect">
                    <div class="popup">
                        <div class="login px-sm-4 mx-auto mw-100">
                            <h5 class="text-center mb-4">Login to Digital</h5>
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label class="mb-2">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required="" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label class="mb-2">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="" required="" />
                                </div>
                                <button type="submit" class="btn btn-primary submit mt-2">Login</button>
                                <p class="text-center mt-2">
                                    <a href="#popup4"> Don't have an account?</a>
                                </p>
                            </form>
                        </div>

                        <a class="close" href="#">&times;</a>
                    </div>
                </div>

                <div id="popup4" class="popup-effect">
                    <div class="popup">
                        <div class="login px-sm-4 mx-auto mw-100">
                            <h5 class="text-center mb-4">Register Now</h5>
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input type="text" class="form-control" id="validationDefault01" placeholder="" required="" />
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="email" class="form-control" id="validationDefault02" placeholder="" required="" />
                                </div>
                                <div class="form-group">
                                    <label class="mb-2">Password</label>
                                    <input type="password" class="form-control" id="password1" placeholder="" required="" />
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" id="password2" placeholder="" required="" />
                                </div>

                                <button type="submit" class="btn btn-primary submit">Register</button>
                                <p class="text-center mt-3">
                                    <a href="#">By clicking Register, I agree to your terms</a>
                                </p>
                            </form>
                        </div>
                        <a class="close" href="#">&times;</a>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Footer;