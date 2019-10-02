import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about py-5" id="about">
                    <div className="container py-lg-5 py-sm-3">
                        <div className="row">
                            <div className="col-lg-3 about-left">
                                <h3 className="heading mb-lg-5 mb-4">About us</h3>
                            </div>
                            <div className="col-lg-5 col-md-7 about-text">
                                <h3>Welcome To Our Digital Marketing Agency Website </h3>
                                <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm.</p>
                                <p className="mt-2">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus.</p>
                            </div>
                            <div className="col-lg-4 col-md-5 about-img">
                                <img src="images/1.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="choose py-5" id="services">
                    <div className="container py-md-3">
                        <h3 className="heading mb-5"> What we provide</h3>
                        <div className="feature-grids row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="f1 icon1 p-4">
                                    <div className="icon">
                                        <span className="fa fa-bandcamp"></span>
                                    </div>
                                    <h3 className="my-3">Branding</h3>
                                    <p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                                <div className="f1 icon2 p-4">
                                    <div className="icon">
                                        <span className="fa fa-codepen"></span>
                                    </div>
                                    <h3 className="my-3">Marketing</h3>
                                    <p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                                <div className="f1 icon3 p-4">
                                    <div className="icon">
                                        <span className="fa fa-btc"></span>
                                    </div>
                                    <h3 className="my-3">Advertising</h3>
                                    <p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                                <div className="f1 icon4 p-4">
                                    <div className="icon">
                                        <span className="fa fa-cloud"></span>
                                    </div>
                                    <h3 className="my-3">Product Sales</h3>
                                    <p>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;