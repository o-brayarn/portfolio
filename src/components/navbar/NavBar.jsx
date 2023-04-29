import React from "react";
import './navbar.css';
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

export default function NavBar() {
  const menuData = [
    {
      path: "/home",
      name: "HOME",
    },
    {
      path: "/about",
      name: "ABOUT",
    },
    {
      path: "/services",
      name: "SERVICES",
    },
    {
      path: "/skills",
      name: "SKILLS",
    },
    // {
    //   path: "/experience",
    //   name: "EXPERIENCE",
    // },
    {
      path: "/contact",
      name: "PROJECTS",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];
  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          brayarn ogeda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto gap-5 px-3">
            {menuData.map((item) => (
              <NavLink to={item.path} key={item.name}>
                <div className="list-item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
