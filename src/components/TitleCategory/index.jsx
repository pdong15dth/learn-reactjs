import React from 'react';
import PropTypes from 'prop-types';

TitleCategory.propTypes = {
    title: ''
};

function TitleCategory(props) {
    return (
        <div>
            <div class="page-title-area">
                <div class="container">
                    <div class="page-title-content">
                        <h2>{props.title}</h2>
                        <ul>
                            <li><a href="index.html">Trang Chủ</a></li>
                            <li>{props.title}</li>
                        </ul>
                    </div>
                </div>
                <div class="dot-shape1">
                    <img src="assets/img/shape/dot1.png" alt={`img`} />
                </div>
                <div class="dot-shape2">
                    <img src="assets/img/shape/dot2.png" alt={`img`} />
                </div>
                <div class="dot-shape3">
                    <img src="assets/img/shape/dot3.png" alt={`img`} />
                </div>
                <div class="dot-shape4">
                    <img src="assets/img/shape/dot4.png" alt={`img`} />
                </div>
                <div class="dot-shape5">
                    <img src="assets/img/shape/dot5.png" alt={`img`} />
                </div>
                <div class="dot-shape6">
                    <img src="assets/img/shape/dot6.png" alt={`img`} />
                </div>
                <div class="dot-shape7">
                    <img src="assets/img/shape/dot1.png" alt={`img`} />
                </div>
                <div class="shape16">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div class="shape17">
                    <img src="assets/img/shape/14.svg" alt={`img`} />
                </div>
                <div class="shape18">
                    <img src="assets/img/shape/15.png" alt={`img`} />
                </div>
                <div class="shape19">
                    <img src="assets/img/shape/16.png" alt={`img`} />
                </div>
                <div class="shape20">
                    <img src="assets/img/shape/14.svg" alt={`img`} />
                </div>
            </div>


        </div>
    );
}

export default TitleCategory;