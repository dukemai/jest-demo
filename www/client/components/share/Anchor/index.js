import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import scrollTo from 'scroll-to';

import './style.scss';

const propTypes = {
    name: PropTypes.string,
    location: PropTypes.shape({
        search: PropTypes.string,
    })
}

const defaultProps = {
    name: '',
    location: {}
}

class Anchor extends React.Component {
    constructor(props){
        super(props);
        this.anchorElement = null;
        this.scrollToAnchor = this.scrollToAnchor.bind(this);
    }
    scrollToAnchor() {
        const { location, name } = this.props;
        const to = queryString.parse(location.search).scrollTo;
        
        if(to === name) {
            const parentElement = this.anchorElement.parentElement;
            const top = parentElement.getBoundingClientRect().top;
            const scrollTop = window.scrollY;
            scrollTo(0, scrollTop + top);
        }
    }
    componentDidMount() {
        this.scrollToAnchor();
    }
    componentDidUpdate() { 
        this.scrollToAnchor();
    }
    render(){
        return(
            <span className="hidden-anchor" ref={el => this.anchorElement = el} data-anchor={name}>
            </span>
        )
    }
}

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default withRouter(Anchor);