import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="contact py-5 my-lg-5">
                    <div class="container">
                        <h2 class="heading mb-sm-5 mb-4">Contact Us</h2>
                        <div class="row contact_information">
                            <div class="col-md-6 contact_left">
                                <div class="contact_border p-4">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350041.310790406!2d30.68773492426509!3d39.0014851732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1522753415269"></iframe>
                                </div>
                            </div>
                            <div class="col-md-6 mt-md-0 mt-4">
                                <div class="contact_right p-lg-5 p-4">
                                    <form action="#" method="post">
                                        <div class="w3_agileits_contact_left">
                                            <h3 class="mb-3">Contact form</h3>
                                            <input type="text" name="Name" placeholder="Your Name" required="" />
                                            <input type="email" name="Email" placeholder="Your Email" required="" />
                                            <input type="text" name="Phone" placeholder="Phone Number" required="" />
                                            <textarea placeholder="Your Message Here..." required=""></textarea>
                                        </div>
                                        <div class="w3_agileits_contact_right">
                                            <button type="submit" >Submit</button>
                                        </div>
                                        <div class="clearfix"> </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="mt-5 information">
                                    <h4 class="text-uppercase mb-4"><span class="fa fa-comments"></span> General Communication</h4>
                                    <p class="mb-3 text-capitalize">For General Queries, Including Partnership Opportunities, Please Email Us At <a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mt-md-5 mt-2 information">
                                <h4 class="text-uppercase mb-4"><span class="fa fa-life-ring"></span> Technical Support</h4>
                                <p class="mb-3 text-capitalize">We Are Here To Help! If You Have Technical Issues, Contact Support  <span>+12 388 455 6789</span>.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;