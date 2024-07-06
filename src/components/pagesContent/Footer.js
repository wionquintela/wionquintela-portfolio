export default function Footer(props) {
  const bg = { backgroundColor: "#476A77", color: "white" };
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={props.className} style={bg}>
        <h5 style={{ fontWeight: "bold" }}>
          @ {currentYear} Wion Quintela. All Rights Reserved.
        </h5>
      </div>
    </>
  );
}
