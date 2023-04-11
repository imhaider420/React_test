import React from "react";
import { Container, Image } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <section>
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6 pe-4">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                <Image
                  className="text-dark-gray"
                  src="/i/massage-logo.svg"
                  responsive
                  width={35}
                />
                <div>
                  <a
                    className="text-white fs-10 fs-md-12 ls-2 fw-700 text-uppercase ms-2"
                    href=""
                  >
                    Subscribe for Updates
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-4">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <p className="text-dark-gray fs-10 fs-md-12 ls-2 fw-700 m-0">
                  FOLLOW US:
                </p>
                <div>
                  <Image
                    className="social-icon mx-3"
                    src="/i/facebook-logo.svg"
                    responsive
                    width={35}
                  />
                  <Image
                    className="social-icon"
                    src="/i/twitter-logo.svg"
                    responsive
                    width={35}
                  />
                  <Image
                    className="social-icon mx-3"
                    src="/i/youtube-logo.svg"
                    responsive
                    width={60}
                  />
                  <Image
                    className="social-icon"
                    src="/i/instagram-logo.svg"
                    responsive
                    width={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="custom-border-bottom mt-4"></div>
      </section>
      <section className="footer-car-banner custom-border-bottom">
        <Container>
          <div className="row">
            <div className="col-md-3">
              <div className="link-hover">
                <p className="text-white fs-12 fw-700 ls-2">
                  CROSSOVERS & SUVS
                </p>
                <Image
                  className="pb-2"
                  src="/i/footer-car-1.webp"
                  responsive
                  width={180}
                />
              </div>
            </div>
            <div className="col-md-3 ps-4">
              <div className="link-hover">
                <p className="text-white fs-12 fw-700 ls-2">
                  SEDANS & HATCHBACKS
                </p>
                <Image
                  className="pb-2"
                  src="/i/footer-car-2.webp"
                  responsive
                  width={180}
                />
              </div>
            </div>
            <div className="col-md-3 ps-4 px-4">
              <div className="link-hover fooet-link-hover">
                <p className="text-white fs-12 fw-700 ls-2">ELECTRIC</p>
                <Image
                  className="pb-2"
                  src="/i/footer-car-3.webp"
                  responsive
                  width={180}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="link-hover">
                <p className="text-white fs-12 fw-700 ls-2">CONVERTIBLES</p>
                <Image
                  className="pb-2"
                  src="/i/footer-car-4.webp"
                  responsive
                  width={180}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <div className="mx-xl-5">
            <ul className="d-flex flex-column flex-lg-row align-items-center justify-centent-center justify-content-evenly">
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  <span> Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Inside Mazda
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Learn
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  className="fs-12 ls-2 fw-700 text-white text-uppercase link-hover"
                  href=""
                >
                  Accessiblity
                </a>
              </li>
            </ul>
            <p className="fs-10 ls-2 text-white mt-5">
              © 2023 Mazda Canada Inc.
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}
