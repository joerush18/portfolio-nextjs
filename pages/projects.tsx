import Card from "../components/Card";

const projectsData = [
  {
    projectName: "Covidnp (Covidhelp for nepal)",
    img: "covidnp.jpg",
    tags: ["React", "node", "mongodb"],
    codelink: "https://github.com/Software-Batch-2018/covid-help-np-frontend",
    preview: "https://covidnp.info/",
  },
  {
    projectName: "Project Finder",
    img: "project-finder.png",
    tags: ["React, Next, Tailwindcss, GithubApi"],
    codelink: "https://github.com/joerush18/project-finder",
    preview: "https://project-finder-rho.vercel.app/",
  },
  {
    projectName: "Diabetes Explorer (ongoing)",
    img: "de.png",
    tags: ["Nextjs", "nodejs"],
    codelink: "https://github.com/joerush18/diabetesexplorer",
    preview: "https://github.com/joerush18/diabetesexplorer",
  },
  {
    projectName: "Futsa (A futsal booking website)",
    img: "futsa.png",
    tags: ["html", "css", "php"],
    codelink: "https://github.com/Software-Batch-2018/Futsa-4th-sem-project",
    preview: "https://github.com/Software-Batch-2018/Futsa-4th-sem-project",
  },
  {
    projectName: "WatchSports (Football live website) (Have issues)",
    img: "watchsport.png",
    tags: ["React", "nodejs", "cheeriojs"],
    codelink: "https://github.com/joerush18/watchsportsfullstack",
    preview: "https://watchsports.netlify.app/",
  },

  {
    projectName: "Lyrics Finder (Have issues)",
    img: "lyricsfinder.png",
    tags: ["React"],
    codelink: "https://github.com/joerush18/lyricsfinder",
    preview: "https://joerush18.github.io/lyricsfinder/",
  },
  {
    projectName: "Pu-Meet",
    img: "pumeet.png",
    tags: ["React"],
    codelink: "https://github.com/Pokhara-University/pu_admin-app",
    preview: "https://github.com/Pokhara-University/pu_admin-app",
  },
  {
    projectName: "Watch Highlights",
    img: "highlightsfootballt.png",
    tags: ["Vuejs", "Nodejs", "expressjs", "cheerio"],
    codelink: "https://github.com/joerush18/watch-footballhighlights-api",
    preview: "https://github.com/joerush18/watch-footballhighlights-api",
  },
];

const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5 pb-6">
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
