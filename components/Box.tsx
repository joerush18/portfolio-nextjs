import DevIcon from "devicon-react-svg";

const Box = ({ title }) => {
  return (
    <div className=" bg-background p-4 rounded-lg shadow-md min-w-[180px] flex flex-col items-center justify-center ">
      <img src={`https://img.icons8.com/color/70/000000/${title}.png`} />

      {/* <DevIcon icon={title} className="h-16" /> */}
      <span>{title}</span>
    </div>
  );
};

export default Box;
