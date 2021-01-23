import React from 'react';

XSlider.propTypes = {

};

function XSlider(props) {
    return (
        <div>
            <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel" >
                <div class="carousel-inner">
                    <div style={{ height: '600px' }} class="carousel-item active">
                        <img
                            src="../assets/img/banner-bg2.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div style={{ height: '600px' }} class="carousel-item">
                        <img
                            src="../assets/img/banner-bg.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div style={{ height: '600px' }} class="carousel-item">
                        <img
                            src="../assets/img/banner-img1.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default XSlider;