import projectContent from "../projectContent.js";
import ContentCards from "../ContentCards.jsx";
export default function Featured(props) {
  const feature = {
    title: "Employee Onboarding Management and Tracking System",
    role: ["Backend Lead", "Frontend Integration"],
    year: 2026,
    isFinished: true,
    isLive: false,
    isPrivate: false,
    isFeatured: true,
    image: ["./onboarding.png", "./onboarding2.png", "./onboarding3.png"],
    video: "./onboarding-showcase.mp4",
    text: "A MERN-stack web application that addresses the challenges of manual employee onboarding by centralizing document submissions, automating requirement tracking, and providing real-time progress monitoring. It helps HR reduce administrative workload, minimize manual tracking, and ensure employees complete their onboarding requirements efficiently through role-based access, document verification, automated notifications, and reporting.",
    github:
      "https://github.com/Buklod-Visionaries/Onboarding-Management-and-Tracking-System",
  };

  return (
    <div className="mx-5 mt-20">
      <div id="featuredProject">
        <div className="pt-5 flex flex-col justify-center items-center">
          <div className="divider">
            <h1 className="text-5xl text-base-content">Featured Project</h1>
          </div>
          {/* <p className="mt-2 text-base-content/75 text-md lg:text-lg">
            Here are the projects that I had/have been working on to increase my
            programming skills.
          </p> */}
        </div>

        {/* Project Cards */}
        <div className="my-10 grid grid-cols-1 gap-6">
          <div className="">
            <ContentCards {...feature} />
          </div>
        </div>
      </div>
    </div>
  );
}
