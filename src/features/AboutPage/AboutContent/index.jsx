import React from 'react';

AboutContent.propTypes = {

};

function AboutContent(props) {
    return (
        <div>
            <section class="about-area ptb-110">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-image">
                                <img src="assets/img/about-img1.jpg" alt={`img`} />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-content">
                                <span>About Us</span>
                                <h2>We've Been Thriving in 37 Years The Tech Area</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                    suspendisse ultrices gravida. Risus commodo viverra.
              </p>
                                <p>
                                    Business-to-business metrics analytics value proposition funding
                                    angel investor entrepreneur alpha ramen equity gamification.
                                    Social proof partner network research.
              </p>
                                <p>
                                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                                    sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend
                                    et tiram.
              </p>
                            </div>
                        </div>
                    </div>
                    <div class="about-inner-area">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="about-text">
                                    <h3>Địa Chỉ</h3>
                                    <p>
                                        CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="about-text">
                                    <h3>Email</h3>
                                    <p>
                                        <a href="#"
                                        ><span
                                            class="__cf_email__"
                                            data-cfemail="ea8f9c85869e8baa8f878b8386c4898587"
                                        >[email&#160;protected]</span
                                            ></a
                                        >
                                        <a href="#"
                                        ><span
                                            class="__cf_email__"
                                            data-cfemail="bbdddac3fbded6dad2d795d8d4d6"
                                        >[email&#160;protected]</span
                                            ></a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div class="about-text">
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="#">+44 587 154756</a>
                                        <a href="#">+55 5555 14574</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutContent;