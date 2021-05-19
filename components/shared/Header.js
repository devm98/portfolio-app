import Link from "next/link";
import React, { useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import auth0Client from "../../services/auth0";

const Header = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { login, logout } = auth0Client;

  return (
    <Container fluid>
      <Navbar color="transparent" light expand="md" className="port-navbar port-default">
        <NavbarBrand className="port-navbar-brand" href="/">
          Kha Minh Bui
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <Link href="/">
                <NavLink className="port-navbar-link">Home</NavLink>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/about">
                <NavLink className="port-navbar-link">About</NavLink>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/portfolios">
                <NavLink className="port-navbar-link">Portfolios</NavLink>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/blogs">
                <NavLink className="port-navbar-link">Blogs</NavLink>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/cv">
                <NavLink className="port-navbar-link">CV</NavLink>
              </Link>
            </NavItem>
            {auth.isAuthenticated ? (
              <NavItem className="port-navbar-item" onClick={logout}>
                <NavLink className="port-navbar-link gradient-border">{auth.user.given_name}</NavLink>
              </NavItem>
            ) : (
              <NavItem className="port-navbar-item" onClick={login}>
                <NavLink className="port-navbar-link">Login</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
