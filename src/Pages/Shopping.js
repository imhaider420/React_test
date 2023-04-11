import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Image, Button, Container, Nav, Navbar } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Shopping() {
  const pic = (
    <div>
      <Image src="/i/about-us-imge.svg" responsive />
    </div>
  );

  const [text, setText] = useState("");
  const [text1] = useState("");
  const onshow = () => {
    setText(pic);
  };
  const onclose = () => {
    setText(text1);
  };

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

        <h1>{text}</h1>
        <h1>{text1}</h1>
        <Button onClick={onshow}>show pic</Button>
        <Button onClick={onclose}>close pic</Button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
