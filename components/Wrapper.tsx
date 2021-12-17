import Slide from "react-reveal/slide";

const Wrapper = ({ children, title, className }) => {
  return (
    <Slide bottom>
      <div className="container relative ">
        <div className="bg-backgroundContent absolute top-[-20px] left-[40%] lg:left-[5%] shadow-lg px-6 py-2 rounded-md">
          {title}
        </div>
        <div className={className}>{children}</div>
      </div>
    </Slide>
  );
};

export default Wrapper;
