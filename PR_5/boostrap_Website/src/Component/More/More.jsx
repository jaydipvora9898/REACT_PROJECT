import { FaArrowRightLong } from "react-icons/fa6";
import "./More.css";
import summerImage from "../../assets/Img/image-box-01.webp";
import blogImage from "../../assets/Img/image-box-02.webp";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const More = () => {
  return (
    <Container className="my-5 py-4">
      <Row className="text-center mb-4">
        <Col className="col">
          <h2 className="fw-medium">More to Discover</h2>
          <p className="text-muted fs-5 mb-4">
            Our bundles were designed to conveniently package your tanning
            essentials while saving you money.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 border-0">
            <Card.Img variant="top" src={summerImage} alt="Summer Collection" />
            <Card.Body className="text-center">
              <Card.Title className="fw-medium">Summer Collection</Card.Title>
              <Button variant="white" href="#shop" className="mt-3 fw-medium">
                Shop Now &nbsp;
                <FaArrowRightLong />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0">
            <Card.Img variant="top" src={blogImage} alt="From Our Blog" />
            <Card.Body className="text-center">
              <Card.Title className="fw-medium">From Our Blog</Card.Title>
              <Button variant="white" href="#blog" className="mt-3 fw-medium">
                Read More &nbsp;

                <FaArrowRightLong />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default More;
