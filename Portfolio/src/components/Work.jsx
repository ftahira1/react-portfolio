import "../styles/Work.css";

const ProjectList = [
    {
        name: "Horiseon",
        link: "https://ftahira1.github.io/Horiseon/",
        photo: "./src/assets/screenshot-1.png"
    },
    {
        name: "FunNBAFacts",
        link: "https://yc937.github.io/FunNBAFacts/",
        photo: "./src/assets/screenshot-2.png"
    },
    {
        name: "CarFix Blog",
        link: "https://app-carfix-blog-4a5a8cc800a2.herokuapp.com/",
        photo: "./src/assets/screenshot-3.png"
    }
]

function Work() {
    return (
    <section>
        <h2>Work</h2>
        {
            ProjectList.map((project, i) => (
                <li key ={i}>
                    <a href={project.link}><img src={project.photo} className="work" alt={project.name}></img>
                    </a>
                </li>
            ))
        }
    </section>
    );
  }

  export default Work;