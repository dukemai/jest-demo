import React from 'react';

import Brand from '../Brand';
import NavBarItem from './NavBarItem';

const propTypes = {

}

const defaultProps = {

}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        const { isActive } = this.state;
        this.setState({
            isActive: !isActive
        });
    }
    render() {
        const { isActive } = this.state;
        const activeClass = isActive? 'is-active' : '';
        return(
            <nav className="navbar">
                <Brand />
                <div className="navbar-menu">
                    <div onClick={this.toggleMenu} className={`navbar-item has-dropdown ${activeClass}`}>
                        <a className="navbar-link">
                            Content
                        </a>
                        <div className="navbar-dropdown">
                            <NavBarItem text="Start" link="/" />
                            <NavBarItem text="Intro" link="/Intro" />
                            <NavBarItem text="Agenda" link="/Agenda" />
                            
                            <hr className="navbar-divider" />

                            <NavBarItem text="Technical Stacks" link="/TechnicalStacks" />
                            <NavBarItem text="MongoDB" link="/TechnicalStacks/MongoDB" />
                            <NavBarItem text="Express" link="/TechnicalStacks/Express" />
                            <NavBarItem text="Docker" link="/TechnicalStacks/Docker" />
                            <NavBarItem text="Webpack" link="/TechnicalStacks/Webpack" />
                            <NavBarItem text="React" link="/TechnicalStacks/React" />
                            
                            <hr className="navbar-divider" />
                            
                            <NavBarItem text="Jest" link="/Jest" />
                            <NavBarItem text="Setup and simple demo" link="/jest/setup" />
                            <NavBarItem text="Test against database" link="/jest/test-against-database" />
                            <NavBarItem text="Test APIs" link="/jest/test-api" />
                            <NavBarItem text="Test React" link="/jest/test-react" />

                            <hr className="navbar-divider" />
                            <NavBarItem text="The End" link="/End" />
                        </div>
                    </div>
                </div>  
            </nav>
        )
    }
}


NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;