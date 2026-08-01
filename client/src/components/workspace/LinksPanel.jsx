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
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <h2 className="text-lg font-semibold text-gray-800">
        Important Links
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Frequently used resources and external platforms.
      </p>

    </div>

    {/* Links */}
    <div className="grid md:grid-cols-2 gap-5">

      {links.map((link) => (
        <div
          key={link.id}
          className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5"
        >

          {/* Top */}
          <div className="flex justify-between items-start">

            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              {link.icon}
            </div>

            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
              {link.category}
            </span>

          </div>

          {/* Content */}
          <h3 className="mt-5 font-semibold text-gray-800">
            {link.title}
          </h3>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            {link.description}
          </p>

          {/* Button */}
          <button className="mt-5 w-full border rounded-lg py-2.5 hover:bg-blue-50 hover:border-blue-500 transition flex justify-center items-center gap-2">

            <FaArrowUpRightFromSquare />

            Open Link

          </button>

        </div>
      ))}

    </div>

    {/* Notice */}
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <div className="flex gap-4">

        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <FaLink className="text-blue-600" />
        </div>

        <div>

          <h3 className="font-medium text-gray-800">
            Faculty Notice
          </h3>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            All important academic links for this subject are
            maintained here. Students should regularly check
            this section for updates.
          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default LinksPanel;