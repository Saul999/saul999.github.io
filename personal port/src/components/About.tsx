import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col justify-center h-full text-zinc-100 px-10 py-7">
      {/* start of the body */}
      <div className="text-left flex-grow">
        <h1 className="text-3xl font-bold mb-2">Saul Ruiz</h1>
        <h2 className="text-2xl mb-1">Aspiring Software Engineer</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          erat eget nisl volutpat vulputate. In hac habitasse platea dictumst.
          Nulla facilisi.
        </p>

        <p className="py-9">-Projects</p>
      </div>

      <div className="mt-auto flex">
        <a href="https://github.com/Saul999/JuiceHub" className="flex">
          {" "}
          <FaGithubSquare size={24} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/saul385/">
          <FaLinkedin size={24} color="white" />
        </a>
      </div>
    </div>
  );
}

export default About;
