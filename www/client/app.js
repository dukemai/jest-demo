import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, browserHistory, Link } from 'react-router-dom'

import { Agenda, Intro, NavBar, TechnicalStacks, 
    FirstPage, JestIntro, JestSetup,
    TestingAgainstDatabase, TestingAPI, TestingReact, TheEnd } from './components';
import { scrollUp, scrollDown } from './utilities';
import socket from './io';

import './style.scss';

const App = () => (
    <HashRouter>
        <div className="app">
            <div className="app-container">  
                <div className="container">
                    <NavBar />
                </div>
                <Route exact path="(/admin)?/" component={FirstPage}/>
                <Route exact path="(/admin)?/intro" component={Intro}/>
                <Route exact path="(/admin)?/agenda" component={Agenda}/> 
                <Route exact path="(/admin)?/technicalstacks/:scrollTo?" component={TechnicalStacks}/>
                <Route exact path="(/admin)?/jest" component={JestIntro}/>
                <Route exact path="(/admin)?/jest/setup" component={JestSetup}/>
                <Route exact path="(/admin)?/jest/testing-against-database" component={TestingAgainstDatabase}/>
                <Route exact path="(/admin)?/jest/testing-api" component={TestingAPI}/>
                <Route exact path="(/admin)?/jest/testing-react" component={TestingReact}/>
                <Route exact path="(/admin)?/the-end" component={TheEnd}/>
            </div>
        </div>  
    </HashRouter>  
)

socket.on('remote-command', function (data) {
    console.log(data.action);
    if(data.action == 'scroll-top') {
        scrollTo(0, 0);
    } else if(data.action == 'scroll-up') {
        scrollUp();
    } else if(data.action == 'scroll-down') {
        scrollDown();
    } else {
        window.location.hash = `/${data.action}`;
        scrollTo(0, 0);
    }
});

ReactDOM.render(<App/>, document.getElementById('mainContent'));