import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contacts(props) {
  const image = { width: "300px" };
  return (
    <Container
      className={props.className + " d-flex justify-content-center text-center"}
    >
      <Card style={{ maxWidth: "100%", marginBottom: "100px" }} id="contacts">
        <Row>
          <Col sm={4}>
            <Card.Img
              variant="right"
              src="./assets/contactProfile.png"
              style={image}
            />
          </Col>
          <Col
            sm={8}
            className="footerContent d-flex align-items-center justify-content-center"
          >
            <Card.Body>
              <div className="footerContentText">
                <Card.Title>
                  <h1 className="display-3">Wion Quintela</h1>
                  <h6>
                    <i>wionquintela06@gmail.com</i>
                  </h6>
                </Card.Title>
                <Card.Text style={{ padding: "15px" }}>
                  Hello, I am a self-taught web developer currently in Grade 12
                  as a STEM Student. I plan to pursue Computer Science in
                  college to further my programming skills and aim for a career
                  as a Software Engineer/Front End Developer. I am passionate
                  about learning and look forward to sharing my knowledge with
                  others.
                </Card.Text>
              </div>
              <Row className="socialLinks justify-content-center">
                <Col xs={3}>
                  <a
                    href="https://web.facebook.com/wion.quintela06/"
                    target="_blank"
                  >
                    <i
                      className="fab fa-facebook fa-3x"
                      style={{ color: "#74C0FC" }}
                    ></i>
                  </a>
                </Col>
                <Col xs={3}>
                  <a href="https://github.com/wionquintela" target="_blank">
                    <i
                      className="fab fa-github fa-3x"
                      style={{ color: "#b197fc" }}
                    ></i>
                  </a>
                </Col>
                <Col xs={3}>
                  <a
                    href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA"
                    target="_blank"
                  >
                    <i
                      className="fab fa-youtube fa-3x"
                      style={{ color: "#ff4040" }}
                    ></i>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
