import HeaderHome from 'components/HeaderHome';
import TitleCategory from 'components/TitleCategory';
import XFooter from 'components/XFooter';
import React from 'react';
import Contact from './Contact';
import Maps from './Maps';

ContactPage.propTypes = {

};

function ContactPage(props) {
    return (
        <div>
            <HeaderHome></HeaderHome>
            <TitleCategory title="Liên Hệ"></TitleCategory>
            <Contact></Contact>
            <Maps></Maps>
            <XFooter></XFooter>
        </div>
    );
}

export default ContactPage;