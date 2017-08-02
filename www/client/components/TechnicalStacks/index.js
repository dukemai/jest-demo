import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import scrollTo from 'scroll-to';
import PropTypes from 'prop-types';

import { Hero, Title, SubTitle, NavBar, Footer, Section, Box } from '../share';
import Express from '../Express';
import MongoDB from '../MongoDB';
import Docker from '../Docker';
import Webpack from '../Webpack';
import ReactContent from '../React';
import Eslint from '../Eslint';

import './style.scss';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            scrollTo: PropTypes.string,
        })
    })
}

const defaultProps = {
    match: {

    }
}

class TechnicalStacks extends React.Component{
    constructor(props) {
        super(props);
        this.mongoDbElement = null;
        this.expressElement = null;
        this.dockerElement = null;
        this.webpackElement = null;
        this.reactElement = null;
        this.mongoDbPosition = this.expressPosition = this.reactPosition = 
        this.dockerPosition = this.webpackPosition = 0;
    }
    scrollTo(element) {
        let scroll = null;
        switch(element) {
            case 'MongoDB':
                scroll = this.mongoDbPosition;
            break;
            case 'Express':
                scroll = this.expressPosition;
            break;
            case 'Docker':
                scroll = this.dockerPosition;
            break;
            case 'Webpack':
                scroll = this.webpackPosition;
            break;
            case 'React':
                scroll = this.reactPosition;
            break;
        }
        if(!scroll) {
            return;
        }
        scrollTo(0, scroll);
    }
    getPosition(element) {
        return element.getBoundingClientRect().top;
    }
    componentDidUpdate() { 
        if (this.props.match.params.scrollTo) {
            this.scrollTo(this.props.match.params.scrollTo);
        }
    }
    componentDidMount() {
        this.mongoDbPosition = this.getPosition(this.mongoDbElement);
        this.expressPosition = this.getPosition(this.expressElement);
        this.dockerPosition = this.getPosition(this.dockerElement);
        this.webpackPosition = this.getPosition(this.webpackElement);
        this.reactPosition = this.getPosition(this.reactElement);

        if (this.props.match.params.scrollTo) {
            this.scrollTo(this.props.match.params.scrollTo);
        }
    }
    render() {
      return (<div className="technical-stacks">
            <Hero>
                <div className="columns is-vcentered">
                    <div className="column">
                        <Title>
                            Technical Stacks
                        </Title>
                        <SubTitle>
                            A typical suite when developing NodeJS Web Applications
                            <Link className="is-pulled-right button is-primary is-inverted is-outlined" to={'/Jest'}>
                                Jest
                            </Link>
                        </SubTitle>
                    </div>    
                </div>    
            </Hero>
            <Section>
                <div className="columns">
                    <div className="column">
                        <div className="stack-row">
                            <Eslint />
                        </div>
                        <div className="stack-row" ref={(c) => { this.expressElement = c; }}>
                            <Express />
                        </div>    
                        <div className="stack-row" ref={(c) => { this.mongoDbElement = c; }}>
                            <MongoDB />
                        </div>
                        <div className="stack-row" ref={(c) => { this.dockerElement = c; }}>
                            <Docker />
                         </div>
                        <div className="stack-row" ref={(c) => { this.webpackElement = c; }}>  
                            <Webpack />
                        </div>
                        <div className="stack-row" ref={(c) => { this.reactElement = c; }}>
                            <ReactContent />
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <img src="/images/folder-structure.png" alt="project structures" />
                    </div>        
                </div>    
            </Section>    
            <Footer />      
      </div>) 
    }
}

TechnicalStacks.propTypes = propTypes;
TechnicalStacks.defaultProps = defaultProps;

export default withRouter(TechnicalStacks);