import React from 'react';

XFooter.propTypes = {

};

function XFooter(props) {
    return (
        <div>
            <footer class="footer-area">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <div class="logo">
                                    <a href="null"><img src="assets/img/white-logo.png" alt={`img`} /></a>
                                    <p>
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                        maecenas accumsan.
                </p>
                                </div>
                                <ul class="social">
                                    <li>
                                        <a href="null" target="_blank"
                                        ><i class="flaticon-facebook-letter-logo"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="null" target="_blank"
                                        ><i class="flaticon-twitter-black-shape"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="null" target="_blank"
                                        ><i class="flaticon-instagram-logo"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="null" target="_blank"
                                        ><i class="flaticon-youtube"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                {/* <h3>Services</h3>
                                <ul class="footer-services-list">
                                    <li><a href="null">Product Engineering</a></li>
                                    <li><a href="null">UX/UI Design</a></li>
                                    <li><a href="null">Big Data Analysis</a></li>
                                    <li><a href="null">Desktop Applications</a></li>
                                    <li><a href="null">Mobile Applications</a></li>
                                </ul> */}
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Quick Links</h3>
                                <ul class="quick-links-list">
                                    <li><a href="null">About Us</a></li>
                                    <li><a href="null">Blog</a></li>
                                    <li><a href="null">Contact</a></li>
                                    <li><a href="null">Support</a></li>
                                    <li><a href="null">Applications</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Contacts</h3>
                                <ul class="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 2750 Quadra Street Victoria, Canada
                </li>
                                    <li>
                                        <span>Email:</span>
                                        <a href="null"
                                        ><span
                                            class="__cf_email__"
                                            data-cfemail="4124372e2d352001262c20282d6f222e2c"
                                        >[email&#160;protected]</span
                                            ></a
                                        >
                                    </li>
                                    <li><span>Phone:</span> <a href="null">+44 587 154756</a></li>
                                    <li><span>Fax:</span> <a href="null">+44 785 4578964</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <p>
                                    Copyright 2020 <a href="null">Pham Dong</a>. All Rights Reserved.
              </p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li><a href="null">Privacy Policy</a></li>
                                    <li><a href="null">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circle-map">
                    <img src="assets/img/circle-map.png" alt={`img`} />
                </div>
            </footer>

        </div>
    );
}

export default XFooter;