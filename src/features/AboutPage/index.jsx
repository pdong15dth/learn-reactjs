import React from 'react';
import PropTypes from 'prop-types';
import HeaderOrther from 'components/HeaderOrther';
import TitleCategory from 'components/TitleCategory';
import AboutContent from './AboutContent';
import XFooter from 'components/XFooter';

AboutPage.propTypes = {

};

function AboutPage(props) {
    return (
        <div>
            <HeaderOrther></HeaderOrther>
            <TitleCategory title="Giới thiệu"></TitleCategory>
            <AboutContent></AboutContent>
            <XFooter></XFooter>
        </div>
    );
}

export default AboutPage;