import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const testimonialsData = [
  {
    id: 1,
    name: "Theodorus",
    description:
      "Layanan yang diberikan oleh tim sangat memuaskan. Mereka tidak hanya memenuhi ekspektasi kami, tetapi juga memberikan solusi inovatif yang membantu perusahaan kami tumbuh. Sangat merekomendasikan mereka untuk setiap proyek IT.",
    designation: "IT Manager, Tech Solutions Inc.",
  },
  {
    id: 2,
    name: "Raffael",
    description:
      "Kami sangat puas dengan hasil kerja tim. Desain website yang responsif dan user-friendly yang mereka buat membuat pelanggan kami lebih mudah berinteraksi dengan produk kami. Dukungan pelanggan mereka juga luar biasa!",
    designation: "Financial Analyst, FinancePro",
  },
  {
    id: 3,
    name: "Gunawan",
    description:
      "Sejak kami bekerja sama dengan tim ini, kami mengalami peningkatan signifikan dalam traffic website dan konversi. Strategi SEO yang mereka terapkan sangat efektif. Kami merasa aman dan percaya diri dengan layanan yang mereka berikan.",
    designation: "CEO, Growth Enterprises",
  },
];

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">What our clients say about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;
