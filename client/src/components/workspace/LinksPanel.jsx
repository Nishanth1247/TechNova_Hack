import {
  FaLink,
  FaVideo,
  FaGithub,
  FaBook,
  FaGlobe,
  FaFilePdf,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function LinksPanel({
    role,
    subjectId
}) {
  const links = [
    {
      id: 1,
      title: "Google Meet Class",
      description: "Join the online lecture.",
      icon: <FaVideo className="text-blue-600" />,
      category: "Meeting",
      url: "#",
    },
    {
      id: 2,
      title: "GitHub Repository",
      description: "Lab programs & source code.",
      icon: <FaGithub className="text-gray-800" />,
      category: "Repository",
      url: "#",
    },
    {
      id: 3,
      title: "Reference Book",
      description: "Data Structures Reference Material.",
      icon: <FaBook className="text-green-600" />,
      category: "Book",
      url: "#",
    },
    {
      id: 4,
      title: "Course Website",
      description: "Department course page.",
      icon: <FaGlobe className="text-cyan-600" />,
      category: "Website",
      url: "#",
    },
    {
      id: 5,
      title: "Lab Manual",
      description: "Download the latest lab manual.",
      icon: <FaFilePdf className="text-red-600" />,
      category: "Document",
      url: "#",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-2xl font-bold">
          Important Links
        </h2>

        <p className="text-gray-500 mt-2">
          Frequently used resources and external platforms.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        {links.map((link) => (

          <div
            key={link.id}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div className="text-3xl">
                {link.icon}
              </div>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {link.category}
              </span>

            </div>

            <h3 className="text-xl font-semibold mt-6">
              {link.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {link.description}
            </p>

            <button
              className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg flex justify-center items-center gap-2"
            >
              <FaArrowUpRightFromSquare />

              Open Link

            </button>

          </div>

        ))}

      </div>

      {/* Quick Notes */}

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

        <div className="flex gap-4">

          <FaLink
            className="text-blue-700 text-2xl mt-1"
          />

          <div>

            <h3 className="font-semibold">
              Faculty Notice
            </h3>

            <p className="text-gray-600 mt-2">
              All important academic links for this subject
              are maintained here. Students should regularly
              check this section for updates.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LinksPanel;