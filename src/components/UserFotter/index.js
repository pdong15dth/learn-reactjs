import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FotterAssets } from '../../Modules/Assets'

export default class UserFotter extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <NavLink to="/"><img src={FotterAssets.whiteLogo} alt="{`img`}" /></NavLink>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </div>
                                <ul className="social">
                                    <li>
                                        <NavLink to="/" target="_blank"><i className="flaticon-facebook-letter-logo" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" target="_blank"><i className="flaticon-twitter-black-shape" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" target="_blank"><i className="flaticon-instagram-logo" /></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" target="_blank"><i className="flaticon-youtube" /></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>
                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 2750 Quadra Street Victoria, Canada
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <NavLink to="/"><span className="__cf_email__" data-cfemail="4124372e2d352001262c20282d6f222e2c">[email&nbsp;protected]</span></NavLink>
                                    </li>
                                    <li><span>Phone:</span> <NavLink to="/">+44 587 154756</NavLink></li>
                                    <li><span>Fax:</span> <NavLink to="/">+44 785 4578964</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright 2020 <NavLink to="/">Pham Dong</NavLink>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li><NavLink to="/">Privacy Policy</NavLink></li>
                                    <li><NavLink to="/">Terms &amp; Conditions</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-map">
                    <img src={FotterAssets.circleMap} alt="{`img`}" />
                </div>
            </footer>
        )
    }
}
