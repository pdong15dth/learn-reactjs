import React from 'react';
import PropTypes from 'prop-types';

ContentNotFound.propTypes = {

};

function ContentNotFound(props) {
    return (
        <div>
            <section class="error-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="error-content">
                                <img src="assets/img/404.png" alt="error" />
                                <h3>Page Not Found</h3>
                                <p>
                                    The page you are looking for might have been removed had its
                                    name changed or is temporarily unavailable.
                </p>
                                <a href="index.html" class="btn btn-primary">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContentNotFound;