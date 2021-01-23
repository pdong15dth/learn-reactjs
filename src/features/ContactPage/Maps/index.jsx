import React from 'react';
import PropTypes from 'prop-types';

Maps.propTypes = {

};

function Maps(props) {
    return (
        <div>
            <div class="map-area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8158792277713!2d-123.36243578415748!3d48.44087343796659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7381102ff519%3A0xc03e5586418eb3f2!2s2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1591454631154!5m2!1sen!2sbd"></iframe>
            </div>

        </div>
    );
}

export default Maps;