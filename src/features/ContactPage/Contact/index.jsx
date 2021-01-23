import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

Contact.propTypes = {

};

function Contact(props) {
    return (
        <div>
            <section class="contact-area ptb-110">
                <div class="container">
                    <div class="section-title">
                        <div class="content">
                            <span>Gửi Tin Nhắn</span>
                            <h2>GỬI YÊU CẦU HỖ TRỢ</h2>
                            <p>
                                Vui lòng điền thông tin vào form bên dưới để được hỗ trợ. Xin cảm
                                ơn!
                    </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-12">
                            <div class="contact-info">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>Địa chỉ</span>
                                CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                            </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <span>Email</span>
                                        <Link><span class="__cf_email__"
                                            data-cfemail="ea8f9c85869e8baa8f878b8386c4898587">[email&#160;protected]</span></Link>
                                        <Link><span class="__cf_email__"
                                            data-cfemail="bbdddac3fbded6dad2d795d8d4d6">[email&#160;protected]</span></Link>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <span>Phone</span>
                                        <Link>+44 587 154756</Link>
                                        <Link>+55 5555 14574</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="contact-form">
                                <ContactForm></ContactForm>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-map"><img src="assets/img/bg-map.png" alt={`img`} /></div>
            </section>
        </div>
    );
}

export default Contact;