export default function Footer(props) {
  const bg = { backgroundColor: "#476A77", color: "white" };
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={props.className}>
        <h5 style={{ fontWeight: "bold", fontSize: "16px", color: "#414a4c" }}>
          @ {currentYear} Wion Quintela. All Rights Reserved.
        </h5>
      </div>
    </>
  );
}
