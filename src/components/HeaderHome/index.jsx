import React from 'react';

HeaderHome.propTypes = {

};

function HeaderHome(props) {
    return (
        <div>
            <div class="navbar-area">
                <div class="evolta-responsive-nav">
                    <div class="container">
                        <div class="evolta-responsive-menu">
                            <div class="logo">
                                <a href="index-2.html">
                                    <img src="assets/img/white-logo.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="evolta-nav navbar-style-two">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index-2.html">
                                <img src="assets/img/white-logo.png" alt="logo" />
                            </a>
                            <div
                                class="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="trang-chu.html" class="nav-link active"
                                        >Trang Chủ
                  </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="gioi-thieu.html" class="nav-link">Giới Thiệu </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Thông Tin </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Đào Tạo </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Tin Tức </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Ôn Thi </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Lưu Ý </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="lien-he.html" class="nav-link">Liên Hệ</a>
                                    </li>
                                </ul>
                                <div class="others-options">
                                    <div class="option-item">
                                        <i class="search-btn flaticon-search"></i>
                                        <i class="close-btn fas fa-times"></i>
                                        <div class="search-overlay search-popup">
                                            <div class="search-box">
                                                <form class="search-form">
                                                    <input
                                                        class="search-input"
                                                        name="search"
                                                        placeholder="Search"
                                                        type="text"
                                                    />
                                                    <button class="search-button" type="submit">
                                                        <i class="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="contact.html" class="btn btn-primary"
                                    >Gọi Ngay: <strong>0349295446</strong></a
                                    >
                                    <a href="contact.html" class="btn btn-primary"
                                    >Gọi Ngay: <strong>0349295446</strong></a
                                    >
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;