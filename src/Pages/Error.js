import React from "react";
import { Link } from "react-router-dom";
import { Image, Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Error() {
  return (
    <div>
      <h2>Page dont exsist</h2>
      <Button>
        <Link to="/" className=" btn text-white font-16 custom">
          back to home
        </Link>
      </Button>
    </div>
  );
}
