import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const propTypes = {
    children: PropTypes.node,
    previousNode: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
    }),
    nextNode: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
    })
}

const defaultProps = {
    children: null,
    previousNode: {
        text: '',
        url: ''
    },
    nextNode: {
        text: '',
        url: ''
    },
}

const generateLink = (navigation, className) => {
    return navigation && navigation.text ? (
        <Link to={navigation.url} className={className}>{navigation.text}</Link>
    ) : (
        <a className="pagination-previous" disabled>Previous</a>
    );
}

const Footer = ({previousNode, nextNode}) => (
    <div className="footer-wrapper">
        <div className="container nav--footer">
            <nav className="pagination is-centered">
                {generateLink(previousNode, 'pagination-previous')}
                {generateLink(nextNode, 'pagination-next')}
            </nav>
        </div>
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        <strong>An introduction to Jest</strong> by <a href="mailto:duc.mai@niteco.se">Duc Mai</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                    </p>
                </div>
            </div>
        </footer>
    </div>          
)

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
