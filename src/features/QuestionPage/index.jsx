import React from 'react';
// import PropTypes from 'prop-types';
import HeaderHome from 'components/HeaderHome';
import XFooter from 'components/XFooter';
import TitleCategory from 'components/TitleCategory';
import ContentQuestion from './pages/Content';

QuestionPage.propTypes = {

};

function QuestionPage(props) {
    return (
        <div>
            <HeaderHome></HeaderHome>
            <TitleCategory title="Ôn Thi"></TitleCategory>
            <ContentQuestion></ContentQuestion>
            <XFooter></XFooter>
        </div>
    );
}

export default QuestionPage;