import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contacts(props) {
  const image = { width: "300px" };

  const [showPopover, setShowPopover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowPopover(true);
        setTimeout(() => setShowPopover(false), 2000); // Hide popover after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <Container
      className={props.className + " d-flex justify-content-center text-center"}
    >
      <Card style={{ maxWidth: "100%", marginBottom: "100px" }} id="contacts">
        <Row lg={2} sm={1} md={1} xs={1}>
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
                  <h1 className="display-3" style={{ fontWeight: "bold" }}>
                    Wion Quintela
                  </h1>

                  <h6>
                    <span
                      style={{
                        cursor: "pointer",
                        color: isHovered ? "blue" : "inherit",
                      }}
                      onClick={() =>
                        copyToClipboard("wionquintela06@gmail.com")
                      }
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <i>wionquintela06@gmail.com</i>
                    </span>
                    {showPopover && (
                      <span style={{ marginLeft: "5px", color: "green" }}>
                        Copied!
                      </span>
                    )}
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
              <Row
                className="socialLinks justify-content-center"
                lg={4}
                md={4}
                sm={4}
                xs={4}
              >
                <Col>
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
                <Col>
                  <a href="https://github.com/wionquintela" target="_blank">
                    <i
                      className="fab fa-github fa-3x"
                      style={{ color: "#b197fc" }}
                    ></i>
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/in/wion-quintela-07857a2b5/"
                    target="_blank"
                  >
                    <i
                      className="fab fa-linkedin fa-3x"
                      style={{ color: "#b197fc" }}
                    ></i>
                  </a>
                </Col>
                <Col>
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
