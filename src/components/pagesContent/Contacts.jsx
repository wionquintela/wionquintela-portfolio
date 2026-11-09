import React, { useState } from "react";

export default function Contacts(props) {
  const [showPopover, setShowPopover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowPopover(true);
        setTimeout(() => setShowPopover(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className={`${props.className || ""} flex justify-center text-center`}>
      <div
        id="contacts"
        className="w-full max-w-full mb-[100px] shadow-lg rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-[4fr_8fr]">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="./assets/contactProfile.png"
              alt="Contact Profile"
              className="w-full max-w-[300px] h-auto object-cover"
            />
          </div>

          {/* Contact Content */}
          <div className="flex items-center justify-center">
            <div className="w-full p-6">
              <div className="footerContentText">
                <h1 className="text-5xl md:text-6xl font-bold">
                  Wion Quintela
                </h1>

                <h6 className="mt-3">
                  <span
                    className={`cursor-pointer transition-colors ${
                      isHovered ? "text-blue-600" : "text-inherit"
                    }`}
                    onClick={() => copyToClipboard("wionquintela06@gmail.com")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i className="text-green-600">wionquintela06@gmail.com</i>
                  </span>

                  {showPopover && (
                    <span className="ml-2 inline-block bg-green-600 text-white px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </h6>
              </div>

              <p className="p-[15px] text-[#414a4c]">
                Hello, I am a Computer Science freshman from University of
                Caloocan City. I make a lot of side projects to further my
                programming skills and aim for a career as a Software
                Engineer/Front End Developer. I am passionate about anything
                coding and look forward to sharing my knowledge with others.
              </p>

              {/* Social Links */}
              <div className="socialLinks flex justify-center items-center gap-8 mt-4">
                <a
                  href="https://web.facebook.com/wion.quintela06/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#74C0FC] text-4xl hover:scale-110 transition-transform"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                <a
                  href="https://github.com/wionquintela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b197fc] text-4xl hover:scale-110 transition-transform"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/wion-quintela-07857a2b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b197fc] text-4xl hover:scale-110 transition-transform"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4040] text-4xl hover:scale-110 transition-transform"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
