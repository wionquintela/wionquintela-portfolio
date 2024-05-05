import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

export default function ContentCards(props) {
  let badgeColor;
  switch (props.expertise) {
    case "Beginner":
      badgeColor = "primary";
      break;
    case "Intermediate":
      badgeColor = "warning";
      break;
    case "Advanced":
      badgeColor = "success";
      break;
  }
  return (
    <Card
      style={{ maxWidth: props.skills ? "600px" : "100%" }}
      className={!props.skills && "shadow"}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100px" }}
      >
        <Card.Img
          variant="top"
          src={props.image}
          style={{ width: props.skills ? "80px" : "100%" }}
        />
      </div>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          {props.title}{" "}
          {props.expertise && (
            <Badge pill bg={badgeColor}>
              {props.expertise}
            </Badge>
          )}
        </Card.Title>
        <Card.Text>
          {props.text ? (
            props.text
          ) : (
            <p>
              Skills include problem solving, leadership, adaptability,
              communication skills, creativity, and responsibility.
            </p>
          )}
        </Card.Text>
        {!props.skills && (
          <button type="button" className="btn btn-success btn-sm btn3d">
            <a
              href={props.link}
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
            >
              Visit Website <i class="fa-solid fa-right-to-bracket"></i>
            </a>
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
