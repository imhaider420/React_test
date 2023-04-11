import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";

const url = "https://jsonplaceholder.typicode.com/photos";

export default function Key() {
  return (
    <Container>
      <div className="d-inline-flex flex-column align-items-start">
        <h3 className="font-42 text-black">Key Senior Management</h3>
        <p className="font-16 text-black mt-4 mb-3 lh-32">
          Natural Cold System Sdn. Bhd. (1075164-T) have grown and developed
          into an experience hands-on and dynamic organization with
        </p>

        <div className=" d-flex justify-content-between  flex-wrap mt-5">
          <div className="vstack gap-3">
            <div>
              <h5 className="card-title font-28 text-black">Robert Poul</h5>
              <p className="card-text font-16 text-black">Company - CEO</p>
              <p className="card-text text-black-50 lh-28">
                Elliot Brings over two decades of industry <br></br>
                experience. He is also the resident....
              </p>
            </div>
            <div>
              <Image
                src="/i/robert-pic.svg"
                width="296px"
                height="286px"
                responsive
              />
            </div>
          </div>

          <div className="vstack gap-3 ms-5">
            <div>
              <h5 className="card-title font-28 text-black">Robert Poul</h5>
              <p className="card-text font-16 text-black">Company - CEO</p>
              <p className="card-text text-black-50 lh-28">
                Elliot Brings over two decades of industry <br></br>
                experience. He is also the resident....
              </p>
            </div>
            <div>
              <Image
                src="/i/robert-pic.svg"
                width="296px"
                height="286px"
                responsive
              />
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-between mt-5">
          <div className="vstack gap-3">
            <div>
              <h5 className="card-title font-28 text-black">Jhon Mark</h5>
              <p className="card-text font-16 text-black">Company - CEO</p>
              <p className="card-text text-black-50 lh-28">
                Elliot Brings over two decades of industry <br></br>
                experience. He is also the resident....
              </p>
            </div>
            <div>
              <Image
                src="/i/jhon-pic.svg"
                width="296px"
                height="286px"
                responsive
              />
            </div>
          </div>

          <div className="vstack gap-3 ms-5">
            <div>
              <h5 className="card-title font-28 text-black">Julia Kristan</h5>
              <p className="card-text font-16 text-black">Company - CEO</p>
              <p className="card-text text-black-50 lh-28">
                Elliot Brings over two decades of industry <br></br>
                experience. He is also the resident....
              </p>
            </div>
            <div>
              <Image
                src="/i/julia2-pic.svg"
                width="296px"
                height="286px"
                responsive
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
