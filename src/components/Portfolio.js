import React, { Component } from 'react';


class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="portfolio py-5" id="portfolio">
                    <div class="container py-3">
                        <h3 class="heading text-capitalize mb-md-5 mb-4">Our Portfolio <span></span></h3>
                        <div class="row news-grids text-center">
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal1"><img src="images/g1.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal2"><img src="images/g2.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal3"><img src="images/g3.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal4"><img src="images/g4.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal5"><img src="images/g5.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal6"><img src="images/g6.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal7"><img src="images/g7.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                            <div class="col-md-3 col-6 gal-img">
                                <a href="#gal8"><img src="images/g8.jpg" alt="portfolio image" class="img-fluid" /></a>
                            </div>
                        </div>

                        <div id="gal1" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g1.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal2" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g2.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal3" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g3.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal4" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g4.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal5" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g5.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal6" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g6.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal7" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g7.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                        <div id="gal8" class="pop-overlay animate">
                            <div class="popup">
                                <img src="images/g8.jpg" alt="Popup Image" class="img-fluid" />
                                <p class="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a class="close" href="#portfolio">&times;</a>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Portfolio;