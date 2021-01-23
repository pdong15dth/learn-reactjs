import React from 'react';
import PropTypes from 'prop-types';

Course.propTypes = {

};

function Course(props) {
    return (
        <div>
            <section class="blog-area extra-pb ptb-110">
                <div class="container">
                    <div class="section-title-style-two text-center">
                        <div class="content">
                            <span>KHOÁ HỌC</span>
                            <h2>THÔNG BÁO - CHIÊU SINH</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post sticky">
                                <div class="entry-post-content">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 16, 2020</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <a href="#">10 Building Mobile Apps With Ionic And React</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post link">
                                <div class="entry-post-content">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 01, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">The hardest leadership advice to follow</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div class="single-blog-post quote">
                                <div class="entry-post-content">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 08, 2020</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <a href="#">How to share your company vision as a leader</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape13">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div class="shape14">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
            </section>
        </div>
    );
}

export default Course;