import "./style.css";
import myimg from "./yasin_image.jpg";
import { useRef } from "react";
export function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div class="App">
      <div class="hero">
        <ul>
          <li onClick={() => scrollToSection(home)} class="link">
            Home
          </li>
          <li onClick={() => scrollToSection(about)} class="link">
            About me
          </li>
          <li onClick={() => scrollToSection(skills)} class="link">
            Skills
          </li>
          <li onClick={() => scrollToSection(projects)} class="link">
            Projects
          </li>
          <li onClick={() => scrollToSection(contact)} class="link">
            Contact details
          </li>
        </ul>
      </div>
      <div ref={home} class="home">
        <h3 class="heading">Home</h3>
        <table>
          <tr>
            <td>
              <h3 class="i1">Welcome!</h3>
              <h3 class="i1">I am Yasin Sulthana Shaik Mitaigiri</h3>
              <h3 class="i1">
                Resume link{" "}
                <a
                  href="https://drive.google.com/file/d/1DX8RlRBoGOhYGImIE8Dd2bd0TPABRpWS/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here
                </a>
              </h3>
              <h3 class="i1">
                Currently engaged in MERN fullstack internship by{" "}
                <a href="https://www.ethnus.com" target="blank">
                  ethnus
                </a>{" "}
                , Cloud practitioner internship by{" "}
                <a href="https://aws.amazon.com/" target="blank">
                  AWS
                </a>{" "}
                and Completed one month intership from{" "}
                <a href="https://skillsbuild.org/" target="blank">
                  IBM Skills Build
                </a>
              </h3>
            </td>
            <td>
              <img src={myimg} alt="My img"></img>
            </td>
          </tr>
        </table>
      </div>
      <div ref={about} class="about">
        <h3 className="heading">About me</h3>
        <h4>
          Self-motivated and hardworking graduate seeking an opportunity in a
          challenging environment to prove my coding skills and utilize my
          knowledge of various databases for the growth of the company. Seeking
          a challenging position as a software developer or data analyst in a
          well established company that offers professional growth and ample
          opportunity to learn.
        </h4>
      </div>
      <div ref={skills} class="skills">
        <h3 className="heading">My skills</h3>
        <h4>➢ Good at communication </h4>
        <h4>➢ Programming languages: Java, Python and SQL</h4>
        <h4>➢ Web technologies:Html, CSS, JavaScript and PHP.</h4>
        <h4>➢ MS Office [Power Point, Excel and Word].</h4>
        <h4>
          ➢ Solid understanding of Artificial intelligence and machine learning,
          deep learning, AWS practioner, web technologies,softskills, attitude
          and behavioural skills.
        </h4>
        <h4>➢ Database: Oracle</h4>
        <h4>➢ Strong mathematical and logical reasoning abilities</h4>
        <h4>➢ Good at problem solving and decision making</h4>
      </div>
      <div ref={projects} class="projects">
        <h3 class="heading">Projects </h3>
        <h4>
          ➢IBM Intership : Built a model for diabetes prediction using AI and
          ML.
        </h4>
        <h4>➢ Firefighting robot using Arduino Uno.</h4>
        <h4>
          ➢ Image caption generation using Deep learning Models and wrote a
          conference paper.
        </h4>
        <h4>➢ Stock market prediction using ML.</h4>
        <h4>➢ Basic website for online bookstore HTML,CSS,JS and PHP.</h4>
        <h4>➢ Roll the dice game using HTML, CSS and JS.</h4>
      </div>
      <div ref={contact} class="contact">
        <h3 class="heading">Contact details</h3>
        <h4>Email - yaseensulthanashaik@gmail.com</h4>
        <h4>Contact Number - 8106390466</h4>
        <h4>
          GitHub link <a href="https://github.com/YasinSulthana">Click me</a>
        </h4>
        <h4>
          LinkedIn link{" "}
          <a href="https://www.linkedin.com/in/yasin-sulthana-848a9522a">
            Click me
          </a>
        </h4>
      </div>
    </div>
  );
}
