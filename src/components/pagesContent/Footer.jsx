export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={props.className || ""}>
      <h5 className="font-bold text-base text-[#414a4c]">
        @ {currentYear} Wion Quintela. All Rights Reserved.
      </h5>
    </div>
  );
}
