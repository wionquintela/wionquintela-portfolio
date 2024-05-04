import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ContentCards from "../ContentCards";
import projectContent from "../projectContent";

export default function Projects(props) {
  const image = { width: "300px" };
  const card = projectContent.map((item) => {
    return (
      <Col className="mb-3">
        <ContentCards {...item} skills={false} expertise={false} />
      </Col>
    );
  });
  return (
    <section>
      <div>
        <Container className={props.className}>
          <div id="projects">
            {" "}
            <h1 className="display-3">My Projects</h1>
            <Row
              className="justify-content-center justify-content-sm-start"
              lg={2}
              sm={1}
              xs={1}
            >
              {card}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
