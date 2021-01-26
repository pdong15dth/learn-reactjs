import React from 'react';
import { Link } from 'react-router-dom';

HeaderOrther.propTypes = {

};

function HeaderOrther(props) {
    return (
        <div>
            <div class="navbar-area">
                <div class="evolta-responsive-nav">
                    <div class="container">
                        <div class="evolta-responsive-menu">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/img/black-logo.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="evolta-nav navbar-style-two">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/black-logo.png" alt="logo" />
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to='/' className='nav-link'>Trang Chủ</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='gioi-thieu' className='nav-link'>Giới Thiệu</Link>
                                        {/* <a href="gioi-thieu.html" class="nav-link">Giới Thiệu</a> */}
                                    </li>
                                    <li class="nav-item">
                                        <Link to='#' class="nav-link">Thông Tin</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='#' class="nav-link">Đào Tạo</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='#' class="nav-link">Tin Tức</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='#' class="nav-link">Ôn Thi</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='#' class="nav-link">Lưu Ý</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='lien-he.html' className='nav-link active'>Liên Hệ</Link>
                                    </li>
                                </ul>
                                <div class="others-options">
                                    <i class="search-btn flaticon-search"></i>
                                    <i class="close-btn fas fa-times"></i>
                                    <div class="search-overlay search-popup">
                                        <div class="search-box">
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text" />
                                                <button class="search-button" type="submit">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <a href="contact.html" class="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></a>
                                <a href="contact.html" class="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderOrther;