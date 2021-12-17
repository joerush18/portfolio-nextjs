import Image from "next/image";
import Flip from "react-reveal/Flip";

const Card = ({ imageSrc, title, tags, sourceLink, previewLink }) => {
  return (
    <Flip right>
      <div className="w-[420px]  md:min-h-[315px] md:max-w-[400px] bg-backgroundContent rounded-2xl shadow-md p-4 text-center ml-16 sm:ml-0 ">
        <Image
          src={imageSrc ? imageSrc : "/images/futsa.png"}
          width="500px"
          height="250px"
          className="object-cover rounded-2xl shadow-lg"
        />
        <h1 className="text-xl font-bold mt-2 ">
          {title ? title : "Futsa : Futsal Booking System"}
        </h1>
        <div className="my-3">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="bg-gray-700 text-backgroundContent py-2 px-3 rounded-lg text-sm mx-1"
              >
                {tag ? tag : "React-js"}
              </span>
            );
          })}
        </div>
        <div className="my-2 mt-8">
          <a
            href={sourceLink ? sourceLink : "#"}
            target="_blank"
            className="navButton"
          >
            Source
          </a>
          <a
            href={previewLink ? previewLink : "#"}
            target="_blank"
            className="navButton"
          >
            Preview
          </a>
        </div>
      </div>
    </Flip>
  );
};

export default Card;
