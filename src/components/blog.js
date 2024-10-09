import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assets/images/blog1.jpg"),
    time: "15 Sep 2023",
    title: "Mengapa Website Responsif Sangat Penting?",
    description:
      "Dengan semakin banyaknya pengguna ponsel, penting untuk memiliki desain website yang responsif. Temukan tips untuk membuat website Anda optimal di semua perangkat.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
  {
    id: 2,
    image: require("../assets/images/blog2.jpg"),
    time: "10 Sep 2023",
    title: "Tips SEO untuk Pemula",
    description:
      "Pelajari dasar-dasar SEO dan bagaimana Anda dapat meningkatkan visibilitas website Anda di mesin pencari. Ini adalah panduan penting untuk pemilik bisnis kecil.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
  {
    id: 3,
    image: require("../assets/images/blog3.jpg"),
    time: "05 Sep 2023",
    title: "Membangun Brand Anda Secara Online",
    description:
      "Brand yang kuat sangat penting untuk bisnis Anda. Temukan cara membangun dan mempromosikan brand Anda di dunia digital.",
    link: "https://www.linkedin.com/in/theodoreraffael/",
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Berita Terbaru dari Blog</h2>
          <div className="subtitle">Dapatkan berita terbaru dari blog kami</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id} className="mb-4">
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time
                        className="text-muted"
                        style={{ fontSize: "0.9em" }}
                      >
                        {blog.time}
                      </time>
                      <Card.Title className="mt-2">{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Baca Selengkapnya{" "}
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
