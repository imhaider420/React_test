import React from "react";
import { Container, Image } from "react-bootstrap";

export default function Entrepreneurship() {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div className="vstack gap-3">
          <div>
            <Image src="/i/Entrepreneurship-pic1.svg" responsive />
            <p className="font-22 text-white mt-2">Installation & Servicing</p>
          </div>

          <div>
            <Image src="/i/Entrepreneurship-pic2.svg" responsive />
          </div>

          <div>
            <Image src="/i/last-pic.svg" responsive />
            <p className="font-22 text-white mt-2">Research & Development</p>
          </div>
        </div>

        <div className="vstack gap-3">
          <div>
            <Image src="/i/Entrepreneurship-pic2.svg" responsive />
          </div>

          <div>
            <Image src="/i/Facilitation-pic2.svg" responsive />
            <p className="font-22 text-white mt-2">
              {" "}
              Supplies of accessories & <br />
              Transporation Requirements
            </p>
          </div>
          <div>
            <Image src="/i/last2-pic.svg" responsive />
            <p className="font-22 text-white mt-2">Companies Directory</p>
          </div>
        </div>

        <div className="vstack gap-3">
          <div>
            <Image src="/i/Entrepreneurship-pic3.svg" responsive />
          </div>

          <div className="mt-4">
            <Image src="/i/Facilitation-pic3.svg" responsive />
            <p className="font-22 text-white mt-2">
              Manufacturing & Retailing of ICE
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
