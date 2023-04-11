import Carousel from "react-bootstrap/Carousel";
import { Image, Button } from "react-bootstrap";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className="main-silder">
        <Image
          className="main-slider-img"
          src="/i/main_slider_img_1.webp"
          responsive
        />

        <Carousel.Caption>
          <h3 className=" fs-18 fs-lg-24 fs-xl-30 fw-500 ls-4 text-lg-start">
            THE BEAUTY OF
            <br /> MOTION
          </h3>
          <p className="fs-12 fs-lg-14 fs-xl-16 lh-25 text-lg-start w-100 w-lg-30">
            At Mazda, we’re relentless in our pursuit of the essential,
            discarding the superfluous to achieve the ideal balance of form and
            space to create beautiful driving machines. Our Japanese design
            philosophy is built on the principle of Jinba Ittai – the unique
            bond between car and driver – which ensures that your Mazda fits
            like a glove.
          </p>
          <div className="d-flex  justify-content-center justify-content-lg-start">
            <Button
              className="card_btn mt-3 fs-12 ls-2 fw-700 link-hover-two"
              variant="secondary"
            >
              <span>Learn More</span>
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="main-silder">
        <Image
          className="main-slider-img"
          src="/i/main_slider_img_2.webp"
          responsive
        />

        <Carousel.Caption>
          <h3 className=" fs-18 fs-lg-24 fs-xl-30 fw-500 ls-4 text-start">
            ALWAYS CONNECTED
          </h3>
          <p className="fs-12 fs-lg-14 fs-xl-16 lh-25 text-start w-100 w-lg-30">
            Connect your Mazda with iPhone and Android applications to bring
            information, entertainment, communication and navigation within
            reach. Let the MyMazda app start the engine remotely, get alerts,
            and locate your car in busy parking lots.
          </p>
          <Button
            className="card_btn fs-12 ls-2 fw-700 mt-3 link-hover-two"
            variant="secondary"
          >
            <span>Learn More</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default UncontrolledExample;
