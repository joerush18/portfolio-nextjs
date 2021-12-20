import Image from "next/image";
import Wrapper from "../components/Wrapper";

const Posts = ({ data }) => {
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  return (
    <>
      {data.items.map((post, index) => {
        return (
          <a href={post.link} target="_blank">
            <Wrapper
              key={index + 3}
              className="text-center space-y-3 md:flex md:space-x-7 md:text-left md:items-center"
              title={index}
              head="false"
            >
              <img
                src={post.thumbnail}
                alt="Image"
                className="rounded-lg h-[250px] w-[500px]"
              />
              {/* <Image src={post.thumbnail}  /> */}
              <div className="md:w-full space-y-3 ">
                <h1 className="font-bold text-3xl">{post.title}</h1>
                <p className=" hidden md:line-clamp-3 ">
                  {removeTags(post.description)}
                </p>
                <div>
                  {post.categories.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-gray-700 text-backgroundContent py-2 px-3 rounded-lg text-sm mr-2"
                      >
                        {tag ? tag : "React-js"}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Wrapper>
          </a>
        );
      })}
    </>
  );
};

export default Posts;
export async function getStaticProps() {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joras.aryal23`
  );
  const data = await res.json();
  return { props: { data } };
}

// endpoint;
//

// {
//   /* <Image
//             src="/images/underconstruction.png"
//             height="500px"
//             width="700px"
//           />
//           <Tada>
//             <h1 className="text-3xl ">Undercontruction.....</h1>
//           </Tada> */
// }
