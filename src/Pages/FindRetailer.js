import React from "react";
import { Image, Button, Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function FindRetailer() {
  return (
    <>
      <div className="blue-bg">
        <Header />
      </div>
      <div>
        <Button>
          <Link to="/" className=" btn text-white font-16 custom">
            back to home
          </Link>
        </Button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
