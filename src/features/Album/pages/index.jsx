import React from 'react';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa thinh hanh',
            thumbnailUrl: 'https://tophinhnen.com/wp-content/uploads/2018/04/anh-sword-art-online-48.jpg'
        },
        {
            id: 2,
            name: 'Rap viet nghe la nghien',
            thumbnailUrl: 'https://telos.vn/wp-content/uploads/2020/08/https-www.artstation.comartwork48NEZq.jpg'
        },
        {
            id: 3,
            name: 'Trao luu nhac hot',
            thumbnailUrl: 'https://herogame.vn/ad-min/assets/js/libs/kcfinder/upload/images/The-Legend-of-Heroes-Kuro-no-Kiseki_Character-Art_12-20-20_002-1536x864.jpg'
        },
    ]
    return (
        <AlbumList albumList={albumList}></AlbumList>
    );
}

export default AlbumFeature;