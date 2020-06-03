import React, { useState, useContext } from "react";
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
} from "reactstrap";
import { ItemContext } from "../contexts/ItemContext";
const NavBar = () => {
  const { toggle } = useContext(ItemContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <Navbar color="success" light expand="md">
      <NavbarBrand href="#">Local Store</NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">see more</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>new items</DropdownItem>
              <DropdownItem>remove item</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText id="addSell" onClick={toggle}>
          sell item
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
