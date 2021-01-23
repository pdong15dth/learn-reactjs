import HeaderOrther from 'components/HeaderOrther';
import XFooter from 'components/XFooter';
import React from 'react';
import ContentNotFound from './ContentNotFound';

NotFound.propTypes = {

};

function NotFound(props) {
    return (
        <div>
            <HeaderOrther></HeaderOrther>
            <ContentNotFound></ContentNotFound>
            <XFooter></XFooter>
        </div>
    );
}

export default NotFound;