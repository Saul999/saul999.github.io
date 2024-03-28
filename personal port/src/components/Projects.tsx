// Project.js
import { FaGithubSquare } from "react-icons/fa";
// import { FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  return (
    <div
      className="overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 50px)" }}
    >
      <div className="flex flex-col text-cyan-50">
        <h1 className="text-3xl mb-2 text-cyan-50 sticky top-0 bg-gray-900 p-3">
          Projects
        </h1>

        {/* JuiceHub Card 1 */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm">
              {" "}
              Typescript MongoDB React Nodejs Express
            </p>

            <h3 className="flex text-lg font-bold">JuiceHUB </h3>
            <p className="text-sm">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a href="https://github.com/Saul999/JuiceHub" target={"_blank"}>
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* GameRecs */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> Python</p>

            <h3 className="flex text-lg font-bold">GameRecs </h3>
            <p className="text-sm">
              Video game recommendation system using python and jupyter
              notebook. Enter your favorite video game and you will be given 5
              recommendations similar to it.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a
                  href="https://github.com/Saul999/Game_Recs"
                  target={"_blank"}
                >
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* PIR sensor Cam */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> Python</p>

            <h3 className="flex text-lg font-bold">PIR Sensor Security Cam </h3>
            <p className="text-sm">
              Used python along with a raspberry pi to create a motion sensor
              camera. On motion a 10 second clip is recorded and saved to a
              folder.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a
                  href="https://github.com/Saul999/PIRSensorCam"
                  target={"_blank"}
                >
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* CTRL HABITS Card */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> Svelte Firebase</p>

            <h3 className="flex text-lg font-bold">CTRL Habits </h3>
            <p className="text-sm">
              Websites that encourage users to develop positive new habits and
              sustain them over time.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a
                  href="https://github.com/Saul385/CtrlHabits.com"
                  target={"_blank"}
                >
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* Teacher Student Database */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> PHP</p>

            <h3 className="flex text-lg font-bold">
              CSUF Teacher Student Database{" "}
            </h3>
            <p className="text-sm">
              Developed a comprehensive database system enabling teachers to
              efficiently oversee their classes, students, and grades. Students
              have convenient access to their grades and class information.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a
                  href="https://github.com/Saul999/Teacher-Student_Database"
                  target={"_blank"}
                >
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* Parser */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> C </p>

            <h3 className="flex text-lg font-bold">Parser </h3>
            <p className="text-sm">
              Created a parser which will output Tokens and Lexems of a given
              input.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a href="https://github.com/Saul999/JuiceHub">
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        {/* MultiThreading project (opsys project) */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> C++</p>

            <h3 className="flex text-lg font-bold">
              Multithreading Analysis Program
            </h3>
            <p className="text-sm">
              The Multithreaded Phrase Analysis Program is designed to read a
              phrase from the terminal, split it into words, and analyze each
              word concurrently using two separate threads.
            </p>
            <div className="flex">
              <div className="w-10 flex justify-between items-center">
                <a href="https://github.com/Saul999/JuiceHub">
                  <FaGithubSquare size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
