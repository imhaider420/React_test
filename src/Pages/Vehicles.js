import React, { useState } from "react";
import NavScrollExample from "../NavScroll";
import { Image, Button, Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Vehicles() {
  const qamar = (
    <div className="d-flex justify-content-center pb-5">
      <div>
        <Image src="/i/about-us-imge.svg" responsive />
      </div>
      <div className="about-us-bg w-30 text-start">
        <h2 className="text-white font-28">About Us</h2>
        <p className="text-white font-16 mt-4">
          The ICE Capital Berhad is a group of management corporates with
          aggregate 30 years of industry experience. We are the pioneer in ice
          industry and believe our power to guide decisons, spearhead
          innovation, and create lasting change,
        </p>
        <p className="text-white font-16 mt-4">
          We are dedicated to move on future, helping ice industry in
          improvement of products & services and make sound business decisions
          that positively impact not just about the organization, but also the
          wide community,
        </p>
      </div>
    </div>
  );
  const [text, setText] = useState(qamar);
  const HandleClick = () => {
    setText("hamza");
  };

  return (
    <>
      <div className="blue-bg">
        <Header />
      </div>
      <Button>
        <Link to="/" className=" btn text-white font-16 custom">
          back to home
        </Link>
      </Button>

      <h1>{text}</h1>
      <Button onClick={HandleClick}>CLICK ME</Button>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
