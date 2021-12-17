import Image from "next/image";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Wrapper from "../components/Wrapper";
const Posts = () => {
  return (
    <Fade top>
      <Wrapper title="My Blogs" className="pb-6">
        <div className="text-center mt-10">
          <Image
            src="/images/underconstruction.png"
            height="500px"
            width="700px"
          />
          <Tada>
            <h1 className="text-3xl ">Undercontruction.....</h1>
          </Tada>
        </div>
      </Wrapper>
    </Fade>
  );
};

export default Posts;
