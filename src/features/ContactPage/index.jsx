import React from 'react';
import PropTypes from 'prop-types';
import HeaderOrther from 'components/HeaderOrther';
import TitleCategory from 'components/TitleCategory';
import Contact from './Contact';
import Maps from './Maps';
import XFooter from 'components/XFooter';

ContactPage.propTypes = {

};

function ContactPage(props) {
    return (
        <div>
            <HeaderOrther></HeaderOrther>
            <TitleCategory title="Liên Hệ"></TitleCategory>
            <Contact></Contact>
            <Maps></Maps>
            <XFooter></XFooter>
        </div>
    );
}

export default ContactPage;