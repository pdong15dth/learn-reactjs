import React from 'react';
import NewsItem from './Item';

NewsShared.propTypes = {

};

const initNewsList = [
    {
        id: 1,
        auth: 'Dong',
        date: 'August 15, 2020',
        title: 'Making Peace With The Feast Or Famine Of Freelancing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    },
    {
        id: 2,
        auth: 'Dong 2',
        date: 'August 18, 2020',
        title: 'I Used The Web For A Day On A 50 MB Budget',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    },
    {
        id: 3,
        auth: 'Dong 3',
        date: 'August 16, 2020',
        title: 'Here are the 5 most telling signs of micromanagement',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    },
];

function NewsShared(props) {
    return (
        <div>
            <section class="blog-area extra-pb ptb-110">
                <div class="container">
                    <div class="section-title-style-two text-center">
                        <div class="content">
                            <span>TIN TỨC</span>
                            <h2>BÀI VIẾT MỚI</h2>
                        </div>
                    </div>

                    <NewsItem listNews={initNewsList}></NewsItem>

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

export default NewsShared;