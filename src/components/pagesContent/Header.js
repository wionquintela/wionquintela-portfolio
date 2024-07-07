import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header(props) {
  const image = { width: "300px" };
  return (
    <section>
      <div className="text-center">
        <Container className={props.className}>
          <Row>
            <Col sm={8}>
              <div className="padding-top-lg">
                <h1 className="display-3" style={{ fontWeight: "bold" }}>
                  Hello, I am{" "}
                  <span style={{ display: "inline", color: "#476A77" }}>
                    Wion Quintela
                  </span>
                </h1>

                <h2>Programmer/Web Developer</h2>
                <button type="button" class="btn btn-primary btn-lg ">
                  <Nav.Link href="#skills">
                    See my Skills <i class="fa-solid fa-code"></i>
                  </Nav.Link>
                </button>
              </div>
            </Col>
            <Col sm={4}>
              {" "}
              <Image src="./assets/myProfile.png" rounded style={image} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
