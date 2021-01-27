import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AssetsImg } from '../../Modules/Assets';

export default class UserNavbar extends Component {
    render() {
        return (
            <div className="navbar-area">
                <div className="evolta-responsive-nav">
                    <div className="container">
                        <div className="evolta-responsive-menu">
                            <div className="logo">
                                <a href="index-2.html">
                                    <img src={AssetsImg.whiteLogo} alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evolta-nav navbar-style-two">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index-2.html">
                                <img src={AssetsImg.whiteLogo} alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/">Trang Chủ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/gioi-thieu">Giới Thiệu </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/thong-tin">Thông Tin </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/dao-tao">Đào Tạo </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/tin-tuc">Tin Tức </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/on-thi">Ôn Thi </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/luu-y">Lưu Ý </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/lien-he">Liên Hệ</NavLink>
                                    </li>
                                </ul>
                                <div className="others-options">
                                    <div className="option-item">
                                        <i className="search-btn flaticon-search" />
                                        <i className="close-btn fas fa-times" />
                                        <div className="search-overlay search-popup">
                                            <div className="search-box">
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-xl-block d-none ml-2">
                                <button className="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></button>
                                <button className="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
