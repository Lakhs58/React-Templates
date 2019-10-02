import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<header className="py-4">
					<div className="container">
						<div id="logo">
							<h1> <Link to="/"><span className="fa fa-cloud" aria-hidden="true"></span> Digital</Link></h1>
						</div>

						<nav className="d-lg-flex">

							<label for="drop" className="toggle"><span className="fa fa-bars" aria-hidden="true"></span></label>
							<input type="checkbox" id="drop" />
							<ul className="menu mt-2 ml-auto">
								<li className=""><Link to="/">Home</Link></li>
								<li className=""><Link to="/about">About</Link></li>
								<li className=""><Link to="/services">Services</Link></li>
								<li className=""><Link to="/portfolio">Portfolio</Link></li>
								<li className=""><Link to="/team">Team</Link></li>
								<li className=""><Link to="/contact">Contact Us</Link></li>
							</ul>
							<div className="login-icon ml-lg-2">
								<a className="user" href="#popup3"> Login</a>
							</div>
						</nav>
						<div className="clear"></div>

					</div>
				</header>

				<div className="banner" id="home">
					<div className="container">
						<div className="row banner-text">
							<div className="slider-info col-lg-6">
								<div className="banner-info-grid mt-lg-5">
									<h2>Welcome To Digital Marketing Agency </h2>
									<p>Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula.
					Nulla ut sollicitudin velit. Sed porttitor orci vel fermentum maximus. Curabitur ut turpis massa.</p>
								</div>
								<a className="btn mr-2 text-capitalize" href="#popup1">read more </a>
								<a className="btn text-capitalize" href="#popup2">watch video </a>
							</div>
							<div className="col-lg-6 col-md-8 mt-lg-0 mt-sm-5 mt-3 banner-image text-lg-center">
								<img src="images/bannerpng.png" alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Header;