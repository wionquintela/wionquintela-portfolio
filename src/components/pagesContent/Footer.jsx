export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="font-semibold">
          Crafting ideas into functional web experiences.
        </p>
        <p>© {currentYear} Wion Quintela &middot; All Rights Reserved</p>
      </aside>
    </footer>
  );
}
