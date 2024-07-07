import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ContentCards from "../ContentCards";
import skillContent from "../skillContent";

export default function Skills(props) {
  const image = { width: "300px" };
  const card = skillContent.map((item) => {
    return (
      <Col className="mb-3">
        <ContentCards {...item} skills={true} />
      </Col>
    );
  });
  return (
    <section>
      <div>
        <Container className={props.className}>
          <div id="skills" style={{ paddingTop: "40px" }}>
            {" "}
            <h1 className="display-3" style={{ fontWeight: "bold" }}>
              My Skills
            </h1>
            <Row
              className="justify-content-center justify-content-sm-start"
              lg={4}
              sm={2}
              xs={1}
            >
              {card}
            </Row>
            <button type="button" class="btn btn-primary btn-lg ">
              <span class="glyphicon glyphicon-cloud"></span>{" "}
              <Nav.Link href="#projects">
                Go to my Projects <i class="fa-solid fa-diagram-project"></i>
              </Nav.Link>
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
