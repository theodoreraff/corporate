import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

function AppAbout() {
  const webDevelopment = 85;
  const cloudServices = 90;
  const cybersecurity = 75;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder text-center mb-4">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about our IT expertise</div>
        </div>
        <Row className="align-items-center">
          <Col sm={6}>
            <Image src={img1} fluid className="rounded shadow" />
          </Col>
          <Col sm={6}>
            <p>
              Kami adalah penyedia layanan teknologi informasi yang berfokus
              pada inovasi dan solusi yang dirancang untuk membantu bisnis
              berkembang di era digital. Dengan pendekatan berbasis teknologi
              terkini, kami menawarkan berbagai layanan yang dirancang untuk
              memenuhi kebutuhan bisnis modern.
            </p>
            <p>
              Keahlian kami mencakup berbagai aspek mulai dari pengembangan web
              hingga keamanan siber dan layanan cloud. Kami berkomitmen untuk
              memberikan solusi yang aman, efisien, dan skalabel untuk mendukung
              pertumbuhan dan kesuksesan jangka panjang bisnis Anda.
            </p>
            <div className="progress-block mt-4">
              <h4>Web Development & Application Development</h4>
              <ProgressBar
                now={webDevelopment}
                label={`${webDevelopment}%`}
                animated
                variant="info"
                className="mb-3 rounded"
              />
            </div>
            <div className="progress-block">
              <h4>Cloud Services & Infrastructure Management</h4>
              <ProgressBar
                now={cloudServices}
                label={`${cloudServices}%`}
                animated
                variant="success"
                className="mb-3 rounded"
              />
            </div>
            <div className="progress-block">
              <h4>Cybersecurity & Data Protection</h4>
              <ProgressBar
                now={cybersecurity}
                label={`${cybersecurity}%`}
                animated
                variant="warning"
                className="rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
