import React from "react";
import './navbar.css';
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const menuData = [
    {
      path: "home",
      name: "Home",
    },
    {
      path: "about",
      name: "About",
    },
    {
      path: "services",
      name: "Services",
    },
    {
      path: "skills",
      name: "Skills",
    },
    // {
    //   path: "/experience",
    //   name: "EXPERIENCE",
    // },
    {
      path: "projects",
      name: "Projects",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];
  
  return (
    <Navbar className="navbar" variant="light" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand className="brand" href="#home">
           <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="BO: Bringing your ideas to life!"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto gap-1 px-2">
            {menuData.map((item) => (
              <NavLink to={item.path} key={item.name} href={`#${item.path}`}>
                <div className="list-item" >{item.name}</div>
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
