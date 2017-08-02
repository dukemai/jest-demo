import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {
    children: null,
}

const AuthorCredit = () => (
    <div>
        <p className="title is-4">Duc Mai</p>
        <p className="subtitle is-6">
            @duc-mai-niteco
            <br />
            duc.mai@niteco.se
        </p>
    </div>    
)

AuthorCredit.propTypes = propTypes;
AuthorCredit.defaultProps = defaultProps;

export default AuthorCredit;