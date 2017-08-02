import React from 'react';

const propTypes = {

}

const defaultProps = {

}

const Brand = () => (
    <div className="navbar-brand">
        <a href="https://niteco.se" className="navbar-item">
            <img src="/images/niteco.svg"  width="112px" height="28px" />
        </a>
    </div> 
)

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;

export default Brand;