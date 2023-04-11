import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Image, Button, Container, Carousel } from "react-bootstrap";
import Header from "./components/header";
import VideoBg from "./Assets/videoBg.mp4";
import VideoBg2 from "./Assets/videoBg2.mp4";
import { Card } from "react-bootstrap";
import MainSlider from "./components/MainSlider";
import Accordion from "react-bootstrap/Accordion";
import Footer from "./components/Footer";

function NavScroll() {
  return (
    <div className="App">
      <section className="intro-video-bg">
        <video src={VideoBg} autoPlay loop muted className="bg-video lazy" />
        <div className="bg-overly">
          <Container>
            <Header />
            <div className="Intro-banner">
              <h1 className="text-white fs-18 fs-lg-28 fs-xl-40 fw-500 ls-4 mb-300 mb-lg-350">
                INTRODUCING THE FIRST-EVER MAZDA CX-90
              </h1>
              <Button
                className="link-hover-two bg-white fs-12 ls-2 fw-700"
                variant="secondary"
              >
                <span>LEARN MORE</span>
              </Button>
            </div>
          </Container>
        </div>
      </section>
      <section className="intro-video-bg">
        <video src={VideoBg2} autoPlay loop muted className="bg-video lazy" />
        <div className="bg-overly">
          <Container fluid->
            <div className="Intro-banner row">
              <div className="col-lg-7 col-xl-8">
                <h2 className="text-white fs-18 fs-lg-28 fs-xl-40 fw-500 ls-4 mb-400 mt-4 position-relative">
                  EMPOWER
                  <br /> EVERY MOMENT
                </h2>
              </div>
              <div className="col-lg-5 col-xl-4 d-flex justify-content-center justify-content-lg-end">
                <Card className="main-card">
                  <Card.Body className="m-0 p-0">
                    <Card.Text>
                      <h3 className="fs-16 fs-lg-18 fs-xl-26">
                        <strong>180-DAY</strong>
                        <br />
                        LEASE AND FINANCE <br />
                        RATE <strong>PROTECTION</strong>
                        <sup>▲</sup>
                        <br />+ <br />
                        AN UNLIMiTED
                        <br />
                        MILEAGE WARRANTY*
                        <br />+<br />
                        2-YEAR TRIAL OF
                        <br />
                        MAZDA CONNECTED SERVICES<sup>▲</sup>
                      </h3>
                      <h4 className="fs-14 fs-lg-16 fs-xl-24">
                        WITH REMOTE START
                      </h4>
                    </Card.Text>
                    <Button
                      className="card_btn mt-3 fs-12 ls-2 fw-700 link-hover-two"
                      variant="secondary"
                    >
                      <span>VIEW OFFERS</span>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="discover-banner">
        <Container className="px-xl-150">
          <h1 className="text-black fs-18 fs-lg-28 fs-xl-40 fw-500 ls-4 mb-5">
            DISCOVER THE FAMILY
          </h1>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-4 discover-tabs"
            fill
          >
            <Tab eventKey="home" title="POPULAR">
              <div className="row">
                <div className="col-xl-4 mt-2">
                  <div className="d-flex flex-row flex-xl-column align-items-center justify-content-center main-car-card">
                    <div>
                      <div>
                        <Image
                          className="main-img mt-3"
                          src="/i/disc-car-img-1.webp"
                          responsive
                          width={350}
                        />
                        <Image
                          className="hover-img"
                          src="/i/disc-car-img-hover-1.webp"
                          responsive
                          width={350}
                        />
                      </div>
                      <h2 className="fs-14 fs-lg-18 fs-xl-24 ls-2 fw-500">
                        Mazda CX-50
                      </h2>
                      <p className="text-light-black fs-12">
                        Compact SUV - Starting at $38,250
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <Image
                            className="text-dark-gray"
                            src="/i/seat-car-logo.svg"
                            responsive
                            width={30}
                          />
                          <p className="text-dark-gray fs-12 mt-1">Seats 5</p>
                        </div>
                        <div className="mx-3">
                          <Image
                            className="text-dark-gray"
                            src="/i/model-car-logo.svg"
                            responsive
                            width={30}
                          />
                          <p className="text-dark-gray fs-12 mt-1">
                            Standard AWD
                          </p>
                        </div>
                        <div className="pt-3">
                          <Image
                            className="text-dark-gray"
                            src="/i/petrol-modal-logo.svg"
                            responsive
                            width={30}
                          />
                          <p className="text-dark-gray fs-12 mt-1">
                            Up to 7.9 L/100
                            <br /> km hwy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mt-2">
                  <div className="d-flex flex-column align-items-center justify-content-center main-car-card">
                    <Image
                      className="main-img mt-3"
                      src="/i/disc-car-img-2.png"
                      responsive
                      width={350}
                    />
                    <Image
                      className="hover-img mt-3"
                      src="/i/disc-car-img-hover-2.png"
                      responsive
                      width={350}
                    />
                    <h2 className="fs-14 fs-lg-18 fs-xl-24 ls-2 fw-500">
                      Mazda CX-5
                    </h2>
                    <p className="text-light-black fs-12">
                      Compact SUV– Starting at $31,250
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Image
                          className="text-dark-gray"
                          src="/i/seat-car-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">Seats 5</p>
                      </div>
                      <div className="mx-3">
                        <Image
                          className="text-dark-gray"
                          src="/i/model-car-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">
                          Standard AWD
                        </p>
                      </div>
                      <div className="pt-3">
                        <Image
                          className="text-dark-gray"
                          src="/i/petrol-modal-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">
                          Up to 7.9 L/100
                          <br /> km hwy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mt-2">
                  <div className="d-flex flex-column align-items-center justify-content-center main-car-card">
                    <Image
                      className="main-img mt-3"
                      src="/i/disc-car-img-3.webp"
                      responsive
                      width={350}
                    />
                    <Image
                      className="hover-img mt-3"
                      src="/i/disc-car-img-hover-3.webp"
                      responsive
                      width={350}
                    />
                    <h2 className="fs-14 fs-lg-18 fs-xl-24 ls-2 fw-500">
                      Mazda 3
                    </h2>
                    <p className="text-light-black fs-12">
                      Compact Sedan – Starting at $21,900
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Image
                          className="text-dark-gray"
                          src="/i/seat-car-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">Seats 5</p>
                      </div>
                      <div className="mx-3">
                        <Image
                          className="text-dark-gray"
                          src="/i/model-car-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">
                          Standard AWD
                        </p>
                      </div>
                      <div className="pt-3">
                        <Image
                          className="text-dark-gray"
                          src="/i/petrol-modal-logo.svg"
                          responsive
                          width={30}
                        />
                        <p className="text-dark-gray fs-12 mt-1">
                          Up to 7.9 L/100
                          <br /> km hwy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="CROSSOVERS & SUVS"></Tab>
            <Tab eventKey="longer-tab" title="SEDANS & HATCHBACKS"></Tab>
            <Tab eventKey="contact" title="ELECTRIC"></Tab>
            <Tab eventKey="contact" title="CONVERTIBLES"></Tab>
            <Tab eventKey="longer-tab" title="PREVIOUS MODELS"></Tab>
          </Tabs>
        </Container>
      </section>
      <section>
        <MainSlider />
      </section>
      <section className="py-5 position-relative">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-lg-3">
              <Card className="discover-card">
                <Card.Body className="m-0 p-0">
                  <Card.Text>
                    <h3 className="fs-16 fs-lg-18 fs-xl-30 text-uppercase text-start ls-2">
                      Local Community <br />
                      Legends
                    </h3>
                    <p className="fs-14 fs-lg-16 text-start my-4">
                      Honouring people who serve their local community
                    </p>
                  </Card.Text>
                  <Button
                    className="card_btn_2 fs-12 ls-2 fw-700 mt-3 text-uppercase text-white fs-12"
                    variant="secondary"
                  >
                    <span>See how we said thank you</span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-9">
              <div>
                <Image
                  className="w-100"
                  src="/i/local-comunity.webp"
                  responsive
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-5 position-relative">
        <Container>
          <div className="row mx-5">
            <div className="col-lg-9">
              <div>
                <Image
                  className="w-100"
                  src="/i/spring-care-img.webp"
                  responsive
                />
              </div>
            </div>
            <div className="col-lg-3">
              <Card className="discover-card spring-care">
                <Card.Body className="m-0 p-0">
                  <Card.Text>
                    <h3 className="fs-16 fs-lg-18 fs-xl-30 text-uppercase text-start ls-2">
                      ENJOY EXCLUSIVE SAVINGS OF UP TO $120** ON A SET OF 4 NEW
                      TIRES
                    </h3>
                  </Card.Text>
                  <Button
                    className="card_btn_2 fs-10 fs-lg-12 ls-2 fw-700 mt-3 text-uppercase fs-12 mt-3"
                    variant="secondary"
                  >
                    LEARN MORE
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-5 position-relative">
        <Container>
          <div className="row mx-5">
            <div className="col-lg-3">
              <Card className="discover-card">
                <Card.Body className="m-0 p-0">
                  <Card.Text>
                    <h3 className="fs-16 fs-lg-18 fs-xl-30 text-uppercase text-start ls-2">
                      MAZDA3: BEST SMALL CAR IN CANADA 2023
                    </h3>
                  </Card.Text>
                  <Button
                    className="card_btn_2 fs-10 fs-lg-12 ls-2 fw-700 mt-3 text-uppercase fs-12 mt-3"
                    variant="secondary"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-9">
              <div>
                <Image className="w-100" src="/i/mazdaa3-img.webp" responsive />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-5 position-relative">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-lg-9">
              <div>
                <Image
                  className="w-100"
                  src="/i/join-the-hub-img.jpg"
                  responsive
                />
              </div>
            </div>
            <div className="col-lg-3">
              <Card className="discover-card spring-care">
                <Card.Body className="m-0 p-0">
                  <Card.Text>
                    <h3 className="fs-16 fs-lg-18 fs-xl-30 text-uppercase text-start ls-2">
                      JOIN THE HUB
                    </h3>
                    <p className="fs-14 fs-lg-16 lh-26 text-start my-4">
                      Submit your Mazda photos for a chance to be featured in
                      our channels, and see what the community of Mazda
                      connoisseurs has posted so far.
                    </p>
                  </Card.Text>
                  <Button
                    className="card_btn_2 fs-10 fs-lg-12 ls-2 fw-700 mt-3 text-uppercase fs-12"
                    variant="secondary"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-5 position-relative">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-lg-3">
              <Card className="discover-card">
                <Card.Body className="m-0 p-0">
                  <Card.Text>
                    <h3 className="fs-16 fs-lg-18 fs-xl-30 text-uppercase text-start ls-2">
                      MAZDA STORIES: FOGO ISLAND
                    </h3>
                    <p className="fs-14 fs-lg-16 lh-26 text-start my-4">
                      A rugged ride through scrubland, fishing villages and
                      caribou herds towards a landmark inn with top-class
                      cuisine and art – a journey best enjoyed in a Mazda.
                    </p>
                  </Card.Text>
                  <Button
                    className="card_btn_2 mt-3 text-uppercase fs-12 mt-3"
                    variant="secondary"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-9">
              <div>
                <Image
                  className="w-100"
                  src="/i/MAZDA-STORIES-img.webp"
                  responsive
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="the-mazda-hub">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-12">
              <h1 className="text-black fs-18 fs-lg-28 fs-xl-40 fw-500 ls-4 mb-5">
                THE MAZDA DIFFERENCE
              </h1>
            </div>
            <div className="col-md-4">
              <Card className="main-car-card">
                <Image
                  className="w-100 car-card"
                  src="/i/standardiactiv-img.jpg"
                  responsive
                />
                <Card.Body className="pb-0 mb-0">
                  <Card.Title className="fs-14 fs-lg-16 ls-2 mt-3 min-h-40">
                    STANDARD i-ACTIV AWD
                  </Card.Title>
                  <Card.Text>
                    <p className=" text-dark-gray fs-10 mt-4">5 Minute Read</p>
                    <div className="border-top mt-4"></div>
                    <p className="fs-12 fs-lg-14 ls-2 my-3">READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="main-car-card">
                <Image
                  className="w-100 car-card"
                  src="/i/ourvalues-img.jpg"
                  responsive
                />
                <Card.Body className="pb-0 mb-0">
                  <Card.Title className="fs-14 fs-lg-16 ls-2 mt-3 min-h-40">
                    WE LIVE OUR VALUES
                  </Card.Title>
                  <Card.Text>
                    <p className="text-dark-gray fs-10 mt-4">5 Minute Read</p>
                    <div className="border-top mt-4"></div>
                    <p className="fs-12 fs-lg-14 ls-2 my-3">READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="main-car-card">
                <Image
                  className="w-100 car-card"
                  src="/i/sustainability-img.jpg"
                  responsive
                />
                <Card.Body className="pb-0 mb-0">
                  <Card.Title className="fs-14 fs-lg-16 ls-2 mt-3 min-h-40">
                    OUR SUSTAINABILITY PROMISE
                  </Card.Title>
                  <Card.Text>
                    <p className=" text-dark-gray fs-10 mt-4">5 Minute Read</p>
                    <div className="border-top mt-4"></div>
                    <p className="fs-12 fs-lg-14 ls-2 my-3">READ MORE</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section className="mazda-warranty">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-12 mb-5">
              <div>
                <Image
                  className="w-65"
                  src="/i/mazdaunlimitedwarranty_img.webp"
                  responsive
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 custom-border-bottom-1 custom-border-end-1">
              <div>
                <Image src="/i/newvehicle-img.webp" responsive width={130} />
                <h1 className="text-white fs-16 fs-lg-18 fs-xl-20 fw-500 ls-4 my-4">
                  3-YEAR NEW VEHICLE
                </h1>
                <p className="text-white fs-12 fs-lg-14 fs-xl-16 ls-2 mt-2">
                  UNLIMITED MILEAGE WARRANTY
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 custom-border-bottom-1 custom-border-end-2">
              <div>
                <Image src="/i/roadside-img.webp" responsive width={130} />
                <h2 className="text-white fs-16 fs-lg-18 fs-xl-20 fw-500 ls-4 my-4">
                  3-YEAR ROADSIDE ASSISTANCE
                </h2>
                <p className=" text-white fs-12 fs-lg-14 fs-xl-16 ls-2 mt-2">
                  UNLIMITED MILEAGE
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 custom-border-end-1 custom-border-bottom-3">
              <div>
                <Image src="/i/powertrain-img.webp" responsive width={130} />
                <h3 className="text-white fs-16 fs-lg-18 fs-xl-20 fw-500 ls-4 my-4">
                  5-YEAR POWERTRAIN
                </h3>
                <p className="text-white fs-12 fs-lg-14 fs-xl-16 ls-2 mt-2">
                  UNLIMITED MILEAGE WARRANTY
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div>
                <Image
                  src="/i/antiperforation-img.webp"
                  responsive
                  width={130}
                />
                <h4 className="text-white fs-16 fs-lg-18 fs-xl-20 fw-500 ls-4 my-4">
                  7-YEAR ANTI-PERFORATION
                </h4>
                <p className="text-white fs-12 fs-lg-14 fs-xl-16 ls-2 mt-2">
                  UNLIMITED MILEAGE WARRANTY
                </p>
              </div>
            </div>
            <div className="col-12">
              <Button
                className="warranty-btn card_btn fs-12 fs-lg-14 ls-2 text-uppercase mt-5"
                variant="secondary"
              >
                View Warranty Details
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="legal-banner">
        <Container>
          <div className="row mx-xl-5">
            <div className="col-md-3">
              <div>
                <Image src="/i/loaction-logo.svg" responsive width={70} />
                <h1 className="text-black fs-12 fs-xl-14 fw-700 ls-2 my-4">
                  FIND A RETAILER
                </h1>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <Image src="/i/setting-logo.svg" responsive width={70} />
                <h2 className="text-black fs-12 fs-xl-14 fw-700 ls-2 my-4">
                  BUILD & PRICE
                </h2>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <Image src="/i/car-logo.svg" responsive width={70} />
                <h3 className="text-black fs-12 fs-xl-14 fw-700 ls-2 my-4">
                  COMPARE VEHICLES
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <Image src="/i/stayring-logo.svg" responsive width={70} />
                <h4 className="text-black fs-12 fs-xl-14 fw-700 ls-2 my-4">
                  REQUEST A TEST DRIVE
                </h4>
              </div>
            </div>
            <div className="col-12">
              <Accordion className="main-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h1 className="fs-12 fs-xl-14 ls-2 mt-2 me-2">LEGAL</h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default NavScroll;
