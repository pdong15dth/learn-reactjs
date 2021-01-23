import React from 'react';
import PropTypes from 'prop-types';

NewsItem.propTypes = {
    listNews: PropTypes.array,
};

NewsItem.defaultProps = {
    listNews: [],
}

function NewsItem({ listNews }) {

    return (
        <div class="row">
            {console.log(listNews)}
            {listNews.map((news, index) => (

                <div class="col-lg-4 col-md-6" key={index}>
                    <div class="single-blog-post-item">
                        <div class="image">
                            <a href="#"><img src="assets/img/blog/1.jpg" alt={`img`} /></a>
                        </div>
                        <div class="content">
                            <div class="entry-meta">
                                <ul>
                                    <li><a href="#">{news.auth}</a></li>
                                    <li>{news.date}</li>
                                </ul>
                            </div>
                            <h3>
                                <a href="#">{news.title}</a>
                            </h3>
                            <p>{news.content}</p>
                            <a href="#" class="read-more-btn">Read More <i class="flaticon-add-1"></i></a>
                        </div>
                    </div>
                </div>
            ))}

        </div >
    );
}

export default NewsItem;