import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Recurring bills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">New Budget</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Envelopes
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Restaurants
                </DropdownItem>
                                <Link to="/envelopes/groceries">
                                    <DropdownItem>
                                        Groceries
                </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/envelopes/form">
                                    <DropdownItem>
                                        New envelope
                </DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Log out</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

// export default Example;