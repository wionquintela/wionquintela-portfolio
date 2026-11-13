import projectContent from "../projectContent.js";
import ContentCards from "../ContentCards.jsx";
export default function Contacts(props) {
  return (
    <div className="mx-5 mt-20">
      <div id="projects">
        <div className="pt-5 flex flex-col justify-center items-center">
          <div className="divider">
            <h1 className="text-5xl text-base-content">Contact Me</h1>
          </div>
        </div>

        <div className="flex justify-center items-center py-1">
          <h1 className="text-xl text-accent">wionquintela06@gmail.com</h1>
        </div>

        <div className="card bg-base-100 w-full shrink-0">
          <div className="card-body">
            <fieldset className="fieldset">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                <div className="">
                  <label className="label pb-1">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="">
                  <label className="label pb-1">Email address</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="w-full mt-3 mb-1">
                <label className="label pb-1">Message</label>
                <textarea
                  className="textarea w-full"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="btn btn-neutral mt-4 w-full lg:w-auto lg:px-10"
                  disabled={true}
                >
                  Send Message
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
