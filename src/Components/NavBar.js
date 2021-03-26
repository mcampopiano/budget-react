import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    NavbarText,
    Button
} from 'reactstrap';
import { EnvelopeContext } from './envelopes/EnvelopeProvider';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory()
    const { getEnvelopes, envelopes } = useContext(EnvelopeContext)

    useEffect(() => {
        getEnvelopes()
    }, [])

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/budgets/form">New Budget</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/budgets/saved">Saved Budgets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/bills">Recurring Bills</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Envelopes
              </DropdownToggle>
                            <DropdownMenu right>
                                {/* Map through all of the envelopes so the dropdown menu has access to 
                                them. */}
                                {
                                    envelopes.map(envelope => {
                                        if (envelope.user.key === localStorage.getItem('budget_user_id')) {
                                            return <Link key={envelope.id} to={{ pathname: `/envelopes/${envelope.id}` }}>
                                                <DropdownItem>
                                                    {envelope.name}
                                                </DropdownItem>
                                            </Link>
                                        }

                                    })
                                }
                                <DropdownItem divider />
                                <Link to="/envelopes/form">
                                    <DropdownItem>
                                        New envelope
                </DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText ><Button color="danger"
                        onClick={() => {
                            localStorage.clear()
                            history.push("/")
                        }}>Log out</Button></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

// export default Example;