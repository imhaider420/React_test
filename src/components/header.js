import React from "react";

import { Image, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="pt-4 border-bottom pb-3 mx-1 mx-xl-5">
      <Container className="px-0">
        <div>
          <Link to="/" className="text-white fs-16 custom">
            <Image src="/i/mazda_logo.webp" responsive width={90} />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <div>
              <div className="d-flex flex-column flex-lg-row justify-content-start justify-content-lg-end align-items-center mb-2 header-small-tags">
                <Nav.Link>
                  <Link
                    to="/BuildPrice"
                    className=" fs-10 text-uppercase ls-2 custom"
                  >
                    Build & Price
                  </Link>
                </Nav.Link>
                <div className="border-end mx-1 d-none d-lg-block"></div>
                <Nav.Link>
                  <Link
                    to="/FindRetailer"
                    className="fs-10 text-uppercase ls-2 custom "
                  >
                    Find a Retailer
                  </Link>
                </Nav.Link>
                <div className="border-end mx-1 d-none d-lg-block"></div>
                <Nav.Link>
                  <Link
                    to="/contactUs"
                    className="fs-10 text-decoration-none text-uppercase ls-2"
                  >
                    Contact U.S
                  </Link>
                </Nav.Link>
                <div className="border-end mx-1 d-none d-lg-block"></div>
                <Nav.Link>
                  <a className="fs-10 text-decoration-none ls-2">FR</a>
                </Nav.Link>
                <div className="border-end mx-1 d-none d-lg-block"></div>
                <Nav.Link className="pe-0">
                  <a className="fs-10 text-decoration-none ls-2">ON</a>
                  <Image
                    className="image-hover"
                    src="/i/location-logo.svg"
                    responsive
                    width={15}
                  />
                </Nav.Link>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between">
                <Nav.Link>
                  <Link
                    to="/Vehicles"
                    className="text-white fs-13 fw-700 text-uppercase ls-2 custom"
                  >
                    Vehicles
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Shopping"
                    className="text-white fs-13 fw-700 text-uppercase ls-2 custom mx-3"
                  >
                    Shopping
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/CertifiedPreOwned"
                    className="text-white fs-13 fw-700 text-uppercase ls-2 custom link-hover"
                  >
                    Certified Pre-Owned
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/MazdaOwners"
                    className="text-white fs-13 fw-700 text-uppercase ls-2 custom mx-3"
                  >
                    Mazda Owners
                  </Link>
                </Nav.Link>
                <Nav.Link className="pe-0">
                  <Link
                    to="/DiscoverMazda"
                    className="text-white fs-13 fw-700 text-uppercase ls-2 custom pe-0"
                  >
                    DISCOVER MAZDA
                  </Link>
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
