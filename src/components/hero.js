import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/img-hero1.jpg"),
    title: "Solusi Inovatif untuk Pertumbuhan Bisnis Anda",
    description:
      "Kami menyediakan solusi teknologi dan strategi bisnis yang inovatif untuk mempercepat perkembangan perusahaan Anda. Dengan pendekatan yang disesuaikan dengan kebutuhan spesifik setiap klien, kami siap membantu Anda mencapai efisiensi operasional, meningkatkan produktivitas, dan membuka peluang baru dalam pasar yang kompetitif. Percayakan bisnis Anda pada kami, dan lihat bagaimana inovasi dapat mendorong pertumbuhan yang berkelanjutan.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
  {
    id: 2,
    image: require("../assets/images/img-hero2.jpg"),
    title: "Tim Profesional dan Berpengalaman yang Siap Mendukung Anda",
    description:
      "Dikelola oleh tenaga ahli dengan pengalaman luas di berbagai industri, tim kami siap memberikan solusi terbaik yang sesuai dengan visi dan misi perusahaan Anda. Kami memahami tantangan bisnis yang kompleks dan siap memberikan dukungan penuh dari awal hingga akhir. Setiap proyek yang kami tangani didasarkan pada keahlian teknis, analisis mendalam, dan komitmen untuk mencapai hasil terbaik. Bersama kami, Anda dapat mengandalkan layanan yang handal dan strategis.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
  {
    id: 3,
    image: require("../assets/images/img-hero3.jpg"),
    title: "Layanan Terintegrasi yang Mempermudah Segala Proses Bisnis Anda",
    description:
      "Kami menawarkan layanan komprehensif mulai dari konsultasi awal hingga implementasi teknologi, semuanya terintegrasi dalam satu platform yang mudah digunakan. Dengan pendekatan yang ramah pengguna, solusi kami dirancang untuk meningkatkan efisiensi dan memaksimalkan nilai setiap proses bisnis. Tidak hanya menawarkan sistem yang canggih, kami juga memastikan proses adopsi yang mudah agar Anda dapat langsung merasakan manfaatnya. Kesuksesan bisnis Anda adalah prioritas utama kami.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
