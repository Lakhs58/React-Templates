import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="process py-5" id="process">
                <div className="container py-md-3">
                    <h3 className="heading mb-5">Marketing Process</h3>
                    <div className="row process-grids">
                        <div className="col-lg-3 col-md-6 my-lg-4 w3pvt-ab position-relative">
                            <div className="">
                                <img src="images/1.png" alt="" className="img-fluid" />
                            </div>
                            <h4 className="feed-title my-md-3 mb-3">Marketing Products</h4>
                            <p> Excepteur ut occaecat proident, sunt in culpa quis. Phasellus lacinia id erat risus quis.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 my-lg-4 mt-md-0 mt-4 w3pvt-ab position-relative">
                            <div className="">
                                <img src="images/2.png" alt="" className="img-fluid" />
                            </div>
                            <h4 className="feed-title my-md-3 mb-3">Advertising Agency</h4>
                            <p> Excepteur ut occaecat proident, sunt in culpa quis. Phasellus lacinia id erat risus quis.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 my-lg-4 mt-sm-5 mt-4 w3pvt-ab position-relative">
                            <div className="">
                                <img src="images/1.png" alt="" className="img-fluid" />
                            </div>
                            <h4 className="feed-title my-md-3 mb-3">Process Planning</h4>
                            <p> Excepteur ut occaecat proident, sunt in culpa quis. Phasellus lacinia id erat risus quis.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-lg-4 mt-sm-5 mt-4 w3pvt-ab">
                            <div className="">
                                <img src="images/2.png" alt="" className="img-fluid" />
                            </div>
                            <h4 className="feed-title my-md-3 mb-3">Product Sales</h4>
                            <p> Excepteur ut occaecat proident, sunt in culpa quis. Phasellus lacinia id erat risus quis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video py-5" id="video">
                <div className="container">
                    <div className="inner-sec-w3ls py-lg-5 py-3">
                        <div className="row">
                            <div className="col-lg-6 video-right px-lg-5 px-2">
                                <h3 className="tittle-w3">Digital Marketing Business Agency</h3>
                                <p className="mt-4">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>

                            </div>
                            <div className="col-lg-6 video-img mt-lg-0 mt-4">
                                <img src="images/banner.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}

export default Services;