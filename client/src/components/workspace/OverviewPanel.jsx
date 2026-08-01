import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaClock,
} from "react-icons/fa6";

function OverviewPanel({
    role,
    subjectId
}) {
  const activities = [
    "Faculty uploaded Unit 3 Notes",
    "New discussion started: AVL Trees",
    "Internal Test Announcement published",
    "Lab Schedule updated",
  ];

  return (
    <div className="space-y-6">

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl shadow-sm p-6 border">

          <FaBullhorn
            className="text-red-600 text-2xl"
          />

          <h2 className="text-3xl font-bold mt-4">
            6
          </h2>

          <p className="text-gray-500">
            Announcements
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border">

          <FaFolderOpen
            className="text-blue-700 text-2xl"
          />

          <h2 className="text-3xl font-bold mt-4">
            18
          </h2>

          <p className="text-gray-500">
            Resources
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border">

          <FaComments
            className="text-green-600 text-2xl"
          />

          <h2 className="text-3xl font-bold mt-4">
            25
          </h2>

          <p className="text-gray-500">
            Discussions
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border">

          <FaClock
            className="text-orange-600 text-2xl"
          />

          <h2 className="text-3xl font-bold mt-4">
            4
          </h2>

          <p className="text-gray-500">
            Upcoming Events
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {activities.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3 border-b pb-4"
            >

              <div className="w-2 h-2 rounded-full bg-blue-700"></div>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default OverviewPanel;