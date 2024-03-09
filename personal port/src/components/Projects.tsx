// Project.js
import { FaGithubSquare } from "react-icons/fa";

function Project() {
  return (
    <div
      className="overflow-y-auto px-5 py-10"
      style={{ maxHeight: "calc(100vh - 50px)" }}
    >
      <div className="flex flex-col">
        {/* JuiceHub Card1 */}
        <div className="bg-blue-700 p-4 rounded-lg mb-4">
          <div>
            <img
              src="project1.jpg"
              alt="JuiceHub"
              className="w-1/4 rounded-lg mb-4 right-0 bg-slate-400"
            />
            <h3 className="text-lg font-bold w-3/4 bg-yellow-800">JuiceHUB</h3>
            <p className="text-sm w-3/4">
              An interactive, community driven, informative music website with
              data for more than 800+ unreleased songs.
            </p>
            <FaGithubSquare />
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project1.jpg"
            alt="Project 1"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 1</h3>
            <p className="text-sm">Description of Project 1</p>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project1.jpg"
            alt="Project 1"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 1</h3>
            <p className="text-sm">Description of Project 1</p>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
          </div>
        </div>
        {/* Add more project cards as needed */}
        {/* Project Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="project2.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div>
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm">Description of Project 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
