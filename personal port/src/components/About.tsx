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
          Current Senior at CSUF pursuing a Computer Science Degree. Starting
          coding in 2019 learning Java, then C++ in 2020, and stuck with Python
          in 2021. Currently learning Typescript while building the JuiceHub and
          improving my Python skills.
        </p>
      </div>

      <div className="mt-auto flex">
        <a
          href="https://github.com/Saul999/JuiceHub"
          target={"_blank"}
          className="flex"
        >
          {" "}
          <FaGithubSquare size={24} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/saul385/" target={"_blank"}>
          <FaLinkedin size={24} color="white" />
        </a>
      </div>
    </div>
  );
}

export default About;
