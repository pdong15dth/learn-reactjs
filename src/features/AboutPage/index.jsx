import HeaderHome from 'components/HeaderHome';
import TitleCategory from 'components/TitleCategory';
import XFooter from 'components/XFooter';
import React from 'react';
import AboutContent from './AboutContent';

AboutPage.propTypes = {

};

function AboutPage(props) {
    return (
        <div>
            <HeaderHome></HeaderHome>
            <TitleCategory title="Giới thiệu"></TitleCategory>
            <AboutContent></AboutContent>
            <XFooter></XFooter>
        </div>
    );
}

export default AboutPage;