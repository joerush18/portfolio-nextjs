import Card from "../components/Card";

const projectsData = [
  {
    projectName: "Covidnp (Covidhelp for nepal)",
    img: "covidnp.jpg",
    tags: ["React", "node", "mongodb"],
    codelink: "",
    preview: "",
  },
  {
    projectName: "Diabetes Explorer (ongoing)",
    img: "de.png",
    tags: ["Nextjs", "nodejs"],
    codelink: "",
    preview: "",
  },
  {
    projectName: "Futsa (A futsal booking website)",
    img: "futsa.png",
    tags: ["html", "css", "php"],
    codelink: "",
    preview: "",
  },
  {
    projectName: "WatchSports (Football live website)",
    img: "watchsport.png",
    tags: ["React", "nodejs", "cheeriojs"],
    codelink: "",
    preview: "",
  },

  {
    projectName: "Lyrics Finder",
    img: "lyricsfinder.png",
    tags: ["React"],
    codelink: "",
    preview: "",
  },
  {
    projectName: "Pu-Meet",
    img: "pumeet.png",
    tags: ["React"],
    codelink: "",
    preview: "",
  },
];

const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5 pb-6">
        {projectsData.map((project, index) => {
          return (
            <Card
              key={index}
              imageSrc={`/images/${project.img}`}
              title={project.projectName}
              sourceLink={project.codelink}
              previewLink={project.preview}
              tags={project.tags}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
