import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss'

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
    return (
        <>
            <h1>Danh sach nhac</h1>
            <ul className="album-list">
                {albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album}></Album>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default AlbumList;