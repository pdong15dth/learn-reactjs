import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album({ album }) {
    const [count, setCount] = useState(0)
    return (
        <div className="album">
            <div className="album_thumbnail">
                <img src={album.thumbnailUrl} alt={album.name} />
            </div>
            <p className="album_name"> Like {count} {album.name}</p>

            <button onClick={() => setCount(x => x + 1)}>Add</button>
        </div>
    );
}

export default Album;