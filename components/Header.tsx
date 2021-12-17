import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faAdjust, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [light, setLight] = useState(true);
  const [active, setActive] = useState("home");
  return (
    <>
      <div className="bg-backgroundContent rounded-2xl px-4 py-3 flex items-center justify-between shadow-md space-x-6 sticky top-2 z-40">
        <h1 className="hidden lg:inline font-Montserrat text-2xl ml-7 font-bold cursor-pointer hover:opacity-50">
          Joerush
        </h1>
        <FontAwesomeIcon icon={faBars} className="h-5 iconButton md:hidden" />
        <div className="flex justify-center items-center">
          <Link href="/">
            <div
              className={active === "home" ? `navButton active` : `navButton`}
              onClick={() => {
                setActive("home");
              }}
            >
              Home
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={
                active === "projects" ? `navButton active` : `navButton`
              }
              onClick={() => {
                setActive("projects");
              }}
            >
              Projects
            </div>
          </Link>
          <Link href="/posts">
            <div
              className={active === "posts" ? `navButton active` : `navButton `}
              onClick={() => {
                setActive("posts");
              }}
            >
              Posts
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-5 mr-4">
          <a href="https://github.com/joerush18" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="h-5 iconButton" />
          </a>
          <a href="https://twitter.com/IamSj17" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="h-5 iconButton" />
          </a>

          <a href="https://www.instagram.com/j0eyrush/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="h-5 iconButton" />
          </a>

          <a href="https://www.facebook.com/mr.per7ectt/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="h-5 iconButton" />
          </a>

          {!light ? (
            <FontAwesomeIcon
              icon={faAdjust}
              className="h-6"
              onClick={() => {
                setLight(!light);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className="h-6"
              onClick={() => {
                setLight(!light);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
