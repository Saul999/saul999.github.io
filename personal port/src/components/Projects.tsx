// Project.js
import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  return (
    <div
      className="overflow-y-auto px-5 py-10"
      style={{ maxHeight: "calc(100vh - 50px)" }}
    >
      <h1 className="text-3xl mb-3">Projects</h1>

      <div className="flex flex-col">
        {/* JuiceHub Card1 */}
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="project1.jpg"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">Teach</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="project1.jpg"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="project1.jpg"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="project1.jpg"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="images/juiceHubSS.png"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
        <div className="bg-blue-700 p-4 rounded-lg mb-4 flex">
          <div className="flex flex-col w-3/4">
            <h3 className="text-lg font-bold bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm bg-lime-400">
              An interactive, community-driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <div className="flex">
              <div className="w-10 bg-zinc-700 flex justify-between items-center">
                <FaGithubSquare />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          <img
            src="project1.jpg"
            alt="JuiceHub"
            className="w-1/4 rounded-lg bg-brown-400 ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
