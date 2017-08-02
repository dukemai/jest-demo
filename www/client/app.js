import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, browserHistory } from 'react-router-dom'

import { Agenda, Intro, NavBar, TechnicalStacks, 
    FirstPage, Remote, JestIntro, JestSetup } from './components';
import socket from './io';

const App = () => (
    <HashRouter>
        <div className="app">
            <Route path="/admin" component={Remote}/>  
             <div className="container">
                <NavBar />
            </div>
            <Route exact path="(/admin)?/" component={FirstPage}/>
            <Route exact path="(/admin)?/intro" component={Intro}/>
            <Route exact path="(/admin)?/agenda" component={Agenda}/> 
            <Route exact path="(/admin)?/technicalstacks/:scrollTo?" component={TechnicalStacks}/>
            <Route exact path="(/admin)?/jest" component={JestIntro}/>
            <Route exact path="(/admin)?/jest/setup" component={JestSetup}/>
        </div>  
    </HashRouter>  
)

socket.on('remote-command', function (data) {
    console.log(data);
    window.location.hash = `/${data.action}`;
});

ReactDOM.render(<App/>, document.getElementById('mainContent'));