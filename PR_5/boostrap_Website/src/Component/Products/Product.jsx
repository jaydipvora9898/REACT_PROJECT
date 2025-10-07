import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../../assets/Img/product-11-1.webp";
import Img1_2 from "../../assets/Img/product-11-2.webp";
import Img2 from "../../assets/Img/product-05-1.webp";
import Img3 from "../../assets/Img/product-03-3.webp";
import Img4 from "../../assets/Img/product-06-1.webp";
// import Img2_2 from "../../assets/Img/product-12-2.webp";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Scalp Moisturizing Cream",
      price: "$29.00",
      img: Img1,
      tag: null,
    },
    {
      id: 2,
      title: "Enriched Hand Wash",
      price: "$25.00",
      oldPrice: "$85.00",
      img: Img2,
      tag: "Sale",
      tagColor: "success",
    },
    {
      id: 3,
      title: "Enriched Hand & Body Wash",
      price: "$23.00",
      img: Img3,
      tag: "New",
      tagColor: "danger",
    },
    {
      id: 4,
      title: "Enriched Duo",
      price: "$27.00",
      img: Img4,
      tag: null,
    },
  ];


  return (
    <Container className="text-center my-5">
      <h2 className="fw-bold">Our Featured Products</h2>
      <p className="text-muted mb-5">Get the skin you want to feel</p>

      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
            <Card className="border-0">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.title}
                />
                {product.tag && (
                  <Badge
                    bg={product.tagColor || "danger"}
                    className="position-absolute top-0 start-0 m-3"
                  >
                    {product.tag}
                  </Badge>
                )}
              </div>
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="fw-semibold">{product.price}</span>
                </div>
                <Card.Text className="mt-2 fw-semibold">
                  {product.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
