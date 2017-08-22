import React, { Component } from 'react';
import './HeaderMenuComponent.css'
import { Nav, NavItem, NavLink } from 'reactstrap';

class HeaderMenuComponent extends Component {
    render() {
        return (
            <Nav>
                <div className="menu-flexing">
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink color="secondary" href="#">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Feedback</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Registration</NavLink>
                    </NavItem>
                </div>
            </Nav>
        )
    }
}

export default HeaderMenuComponent;