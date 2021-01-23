import HeaderHome from 'components/HeaderHome';
import XFooter from 'components/XFooter';
import XSlider from 'components/XSlider';
import React from 'react';
import AboutAndNoti from './AboutAndNoti';
import Course from './Course';
import NewsShared from './NewsShared';
import XGallary from './XGallary';

XHomePage.propTypes = {

};

function XHomePage(props) {
    return (
        <div>
            <HeaderHome></HeaderHome>
            <XSlider></XSlider>
            <AboutAndNoti></AboutAndNoti>
            <Course></Course>
            <NewsShared></NewsShared>
            <XGallary></XGallary>
            <XFooter></XFooter>
        </div>
    );
}

export default XHomePage;