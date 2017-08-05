import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RemoteItem from './RemoteItem';
import socket from '../../../io';

const propTypes = {
    children: PropTypes.node,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

const defaultProps = {
    children: null,
    history: {}
}

const goTo = (action, history) => {
    socket.emit('send-command', { action });
    if(history) {
        history.push(`/admin/${action}`);
    }
}

class Remote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.goTo = this.goTo.bind(this);
    }
    toggleMenu() {
        const { isActive } = this.state;
        this.setState({
            isActive: !isActive
        });
    }
    goTo(action){
        const { history } = this.props;
        socket.emit('send-command', { action });
        if(history) {
            history.push(`/admin/${action}`);
        }
    }
    render() {
        const { isActive } = this.state;
        const activeClass = isActive? 'is-active' : '';
        return (
            <div onClick={this.toggleMenu} className={`navbar-item has-dropdown ${activeClass}`}>
                <a className="navbar-link">
                    Admin
                </a>
                <div className="navbar-dropdown">
                    <RemoteItem link="" itemClicked={this.goTo} text="First Page" />
                    <RemoteItem link="Agenda" itemClicked={this.goTo} text="Agenda" />
                    <hr className="navbar-divider" />

                    <RemoteItem text="Technical Stacks" itemClicked={this.goTo} link="TechnicalStacks" />
                    <RemoteItem text="MongoDB" itemClicked={this.goTo} link="TechnicalStacks/MongoDB" />
                    <RemoteItem text="Express" itemClicked={this.goTo} link="TechnicalStacks/Express" />
                    <RemoteItem text="Docker"  itemClicked={this.goTo}link="TechnicalStacks/Docker" />
                    <RemoteItem text="Webpack" itemClicked={this.goTo} link="TechnicalStacks/Webpack" />
                    <RemoteItem text="React" itemClicked={this.goTo} link="TechnicalStacks/React" />
                    
                    <hr className="navbar-divider" />
                    
                    <RemoteItem text="Jest" itemClicked={this.goTo} link="Jest" />
                    <RemoteItem text="Jest ZeroConfiguration" itemClicked={this.goTo} link="Jest?scrollTo=ZeroConfiguration" />
                    <RemoteItem text="Jest EasySetup" itemClicked={this.goTo} link="Jest?scrollTo=EasySetup" />

                    <hr className="navbar-divider" />
                    <RemoteItem text="Setup and simple demo" itemClicked={this.goTo} link="jest/setup" />
                    <RemoteItem text="Setup-Installation" itemClicked={this.goTo} link="jest/setup?scrollTo=Installation" />
                    <RemoteItem text="Setup-Notes" itemClicked={this.goTo} link="jest/setup?scrollTo=Notes" />

                    <hr className="navbar-divider" />
                    <RemoteItem text="Test against database" itemClicked={this.goTo} link="jest/testing-against-database" />
                    <RemoteItem text="Test-Solution1" itemClicked={this.goTo} link="jest/testing-against-database?scrollTo=Solution1" />
                    <RemoteItem text="Test-Solution2" itemClicked={this.goTo} link="jest/testing-against-database?scrollTo=Solution2" />

                    <hr className="navbar-divider" />
                    <RemoteItem text="Test APIs" itemClicked={this.goTo} link="jest/testing-api" />
                    <RemoteItem text="Test React" itemClicked={this.goTo} link="jest/testing-react" />

                    <hr className="navbar-divider" />
                    <RemoteItem text="The End" itemClicked={this.goTo} link="the-end" />
                </div>
            </div>  
        )
    }
}  

Remote.propTypes = propTypes;
Remote.defaultProps = defaultProps;

export default withRouter(Remote);