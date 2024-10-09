import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your contact message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2941239823535!2d106.86503621414926!3d-6.175112595505139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2e6d4e3b2e7%3A0xb54aa2b2e4e4e79d!2sCentral%20Park%20Mall!5e0!3m2!1sen!2sid!4v1632585794583!5m2!1sen!2sid"
          style={{ border: 0, width: "100%", height: "400px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              theodoreraffael@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +6287820763118
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Jakarta, Indonesia
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
