export default function Footer(props) {
  const bg = { backgroundColor: "#476A77", color: "white" };
  return (
    <>
      <div className={props.className} style={bg}>
        <h5 style={{ fontWeight: "bold" }}>
          @ 2024 Wion Quintela. All Rights Reserved.
        </h5>
      </div>
    </>
  );
}
