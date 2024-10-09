import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const pricingData = [
  {
    id: 1,
    plan: "Starter Package",
    price: "Rp 1.000.000",
    features: [
      "Website Sederhana (1 Halaman)",
      "Desain Responsif",
      "Optimisasi SEO Dasar",
      "1 Tahun Hosting Gratis",
      "Dukungan Email",
    ],
    link: "https://www.linkedin.com/in/theodoreraffael",
  },
  {
    id: 2,
    plan: "Professional Package",
    price: "Rp 3.500.000",
    features: [
      "Website Menengah (5 Halaman)",
      "Desain Responsif & Kustom",
      "SEO Lanjutan",
      "1 Tahun Hosting Gratis",
      "Dukungan Email & Telepon",
    ],
    link: "https://www.linkedin.com/in/theodoreraffael",
  },
  {
    id: 3,
    plan: "Enterprise Package",
    price: "Rp 10.000.000",
    features: [
      "Website Besar (Unlimited Halaman)",
      "Desain Kustom Full",
      "SEO & Analitik Terintegrasi",
      "2 Tahun Hosting Gratis",
      "Dukungan Prioritas 24/7",
    ],
    link: "https://www.linkedin.com/in/theodoreraffael",
  },
];

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-3">Paket Harga & Layanan</h2>
          <div className="subtitle">Cek paket harga dan layanan kami</div>
        </div>
        <Row>
          {pricingData.map((pricing) => (
            <Col sm={4} key={pricing.id} className="mb-4">
              <div className="border rounded p-4 text-center shadow-sm">
                <div className="heading mb-3">
                  <h3 className="mb-0">{pricing.plan}</h3>
                  <span className="h4 text-primary">{pricing.price}</span>
                </div>
                <div className="content">
                  <ListGroup variant="flush">
                    {pricing.features.map((feature, index) => (
                      <ListGroup.Item key={index} className="text-left">
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
                <div className="btn-holder mt-4">
                  <Button href={pricing.link} className="btn btn-primary w-100">
                    Order Sekarang
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppPricing;
