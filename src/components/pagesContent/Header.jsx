import { MoveRight } from "lucide-react";
export default function Header() {
  return (
    <div>
      <section className="mt-20 flex flex-wrap md:flex-nowrap justify-center lg:justify-start items-center">
        <div className="shrink-0">
          <img
            src="./me.png"
            alt="Wion Quintela"
            className="w-[200px] lg:w-[250px] h-auto rounded-lg object-cover"
          />
        </div>
        <div className="mx-5 mt-5 md:mt-0">
          <div className="flex justify-center lg:justify-start items-center">
            <h1 className="text-6xl lg:text-7xl text-base-content">
              Wion Quintela
            </h1>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center">
            <h2 className="pl-2 py-1 text-secondary text-2xl lg:text-3xl">
              Aspiring Full-Stack Developer
            </h2>
            <div className="px-2 mx-1 py-2 my-3 text-base-content/75 flex justify-start items-center gap-3">
              <i className="fa-brands fa-facebook fa-2xl"></i>
              <i className="fa-brands fa-github fa-2xl"></i>
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
          <div className="mt-3 text-md lg:text-lg px-2 text-base-content/75">
            I am a Computer Science Student Undergrad at University of Caloocan
            City. I am passionate about web development especially in making
            productive and useful web applications that makes a difference.
          </div>

          {/* <div className="">
            <div className="hidden lg:flex justify-start items-center  navbar-center">
              <ul className="menu menu-horizontal px-5">
                <li>
                  <a className="text-md lg:text-lg">Projects</a>
                </li>
                <li>
                  <a className="text-md lg:text-lg">Tech Stack</a>
                </li>
                <li>
                  <a className="text-md lg:text-lg">Contacts</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="my-5 lg:my-3 flex justify-center lg:justify-start items-center">
            <a href="#projects">
              <button className="py-5 btn btn-outline btn-block text-md lg:text-lg">
                Go to Projects <MoveRight />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
