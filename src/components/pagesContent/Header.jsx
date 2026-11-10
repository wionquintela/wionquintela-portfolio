export default function Header() {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-start items-center">
      <div className="shrink-0">
        <img
          src="./me.png"
          alt="Wion Quintela"
          className="w-[250px] h-auto rounded-lg object-cover"
        />
      </div>
      <div className="mx-5 mt-5 md:mt-0">
        <div className="flex">
          <h1 className="text-7xl text-base-content">Wion Quintela</h1>
        </div>
        <div className="flex items-center">
          <h2 className="pl-2 text-3xl text-base-content/75">
            Aspiring Full-Stack Developer
          </h2>
          <div className="px-2 mx-1 text-base-content/75 flex justify-start items-center gap-3">
            <i className="fa-brands fa-facebook fa-2xl"></i>
            <i className="fa-brands fa-github fa-2xl"></i>
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </div>
        </div>
        <div className="mt-3 text-lg pl-2 text-base-content/75">
          I am a Computer Science Student Undergrad at University of Caloocan
          City. I am passionate about web development especially in making
          productive and useful web applications that makes a difference.
        </div>
      </div>
    </section>
  );
}
