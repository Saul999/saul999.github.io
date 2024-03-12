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
        {/* GameRecs */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> Python</p>

            <h3 className="flex text-lg font-bold">GameRecs </h3>
            <p className="text-sm">
              Video game recommendation system using python and jupyter
              notebook.
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
        {/* PIR sensor Cam */}
        <div className="p-4 bg-slate-700 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="flex text-sm"> Python</p>

            <h3 className="flex text-lg font-bold">PIR Sensor Security Cam </h3>
            <p className="text-sm">
              Used python along with a raspberry pi to create a motion sensor
              camera. On motion a 10 second clip is uploaded.
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
        {/* JuiceHub Card1 */}
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
        {/* JuiceHub Card1 */}
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
