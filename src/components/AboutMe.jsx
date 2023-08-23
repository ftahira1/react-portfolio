import "../styles/AboutMe.css";

const text = 'My name is Fitim Tahiraj. I was born in Albania, Eastern Europe. I have been living in the U.S for about 9 years now and I am a U.S citizen as well. I currently hold a degree from Community College of Philadelphia in Business and I am also a real estate agent for Keller Williams, serving Philadelphia and surrounding counties.  I have always wanted to learn more coding and cybersecurity, but never had the chance or courage to do so. Therefore, this is my first step towards this exciting career change and I cant wait where the journey takes me.'

function AboutMe() {
    return (
      <article>
        <h2>About Me</h2>
        <p className="#about-me">{text}</p>
      </article>
    );
  }

  export default AboutMe;