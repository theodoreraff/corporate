import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Web Design",
    description:
      "Kami memastikan bahwa website Anda dapat diakses dengan baik pada berbagai perangkat, mulai dari desktop hingga smartphone, untuk memberikan pengalaman pengguna yang optimal.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative UI/UX Design",
    description:
      "Dengan pendekatan desain kreatif, kami menciptakan antarmuka yang intuitif dan estetis, meningkatkan interaksi pengguna dengan produk digital Anda.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimization",
    description:
      "Kami membantu website Anda mendapatkan peringkat lebih tinggi di mesin pencari melalui strategi SEO yang canggih dan ramah mesin pencari.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina-Ready Graphics",
    description:
      "Grafik berkualitas tinggi yang dirancang untuk tampilan tajam pada layar retina dan perangkat beresolusi tinggi, memastikan website Anda terlihat mengesankan.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Cross-Browser Compatibility",
    description:
      "Kami memastikan website Anda kompatibel di berbagai browser, memastikan tampilan dan fungsionalitas konsisten di seluruh platform.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "24/7 Customer Support",
    description:
      "Dukungan pelanggan kami tersedia 24/7 untuk memastikan bahwa setiap masalah teknis diselesaikan dengan cepat dan efektif.",
  },
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
