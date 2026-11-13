export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <div className="px-2 mx-1 py-2 my-3 text-base-content/75 flex justify-start items-center gap-5">
          <a href="https://www.facebook.com/wion.quintela06" target="_blank">
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a href="https://github.com/wionquintela" target="_blank">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/wion-quintela-07857a2b5/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
        <p className="font-semibold">
          Crafting ideas into functional web experiences.
        </p>
        <p>© {currentYear} Wion Quintela &middot; All Rights Reserved</p>
      </aside>
    </footer>
  );
}
