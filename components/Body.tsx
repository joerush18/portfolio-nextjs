import Wrapper from "./Wrapper";
import Image from "next/image";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Zoom from "react-reveal/Zoom";

const Body = () => {
  return (
    <>
      <div className="pb-4">
        {/* Introduction Part */}
        <Zoom bottom>
          <Wrapper
            title="About me"
            className=" text-center xl:flex xl:item-center xl:justify-center xl:px-8 xl:py-8"
          >
            <div className="mt-8 xl:p-4 xl:w-full ">
              <Image
                src="/images/sarojaryaldp.jpg"
                height="250"
                width="250"
                className="rounded-full object-cover"
              />
            </div>
            <div className=" space-y-5 xl:space-y-5 xl:text-left mt-10 mx-8">
              <span>Hi, my name is</span>
              <h1 className="font-bold text-4xl">Saroj Aryal</h1>
              <p className="text-lg font-medium text-justify xl:w-[95%]">
                I am a web and mobile app developer. I have skills in a variety
                of technologies, programming languages and frameworks.
                Especially has a lot of skills and knowledge on HTML 5,
                CSS,Tailwind CSS, JavaScript,React,Nextjs and MongoDB. I am very
                good at JavaScript based software development such as: MERN
                Stack (MongoDB, Express.js, React, Node.js). I do amateur level
                mobile app developement using technologies like Flutter and
                Reactnative.
              </p>
              <div>
                <button className="navButton">Contact</button>
                <button className="navButton">Resume</button>
              </div>
            </div>
          </Wrapper>
        </Zoom>

        {/* FrontendPart */}
        <Wrapper title="Front-end Tools" className="wrapperClass">
          <Box title="javascript" />
          <Box title="typescript" />
          <Box title="react" />
          <Box title="next-js" />
          <Box title="tailwind-css" />
          <Box title="sass" />
          <Box title="material-ui" />
          <Box title="bootstrap" />
          <Box title="flutter" />
          <Box title="dart" />
          <Box title="java" />
          <Box title="react-native" />
        </Wrapper>
        <Wrapper title="Back-end Tools" className="wrapperClass">
          <Box title="nodejs" />
          <Box title="sql" />
          <Box title="mongodb" />
          <Box title="express" />
        </Wrapper>
        <Wrapper title="Dev Tools" className="wrapperClass">
          <Box title="stackoverflow" />
          <Box title="firebase" />
          <Box title="git" />
          <Box title="github" />
          <Box title="npm" />
          <Box title="aws" />
          <Box title="heroku" />
        </Wrapper>
        <div className="container my-4 flex items-center justify-center space-x-2 w-[490px] md:w-full">
          <span>Made with</span>
          <FontAwesomeIcon
            icon={faHeart}
            className="h-4 iconButton text-red-700"
          />
          <span> by Joerush</span>
        </div>
      </div>
    </>
  );
};

export default Body;
