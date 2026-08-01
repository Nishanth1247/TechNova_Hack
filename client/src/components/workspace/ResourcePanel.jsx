import {
  FaFolderOpen,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileImage,
  FaDownload,
  FaEye,
  FaCalendarDays,
  FaUserTie,
  FaArrowUpFromBracket,
} from "react-icons/fa6";

function ResourcePanel({
    role,
    subjectId
}){
  const resources = [
    {
      id: 1,
      title: "Unit 1 Notes",
      type: "PDF",
      uploadedBy: "Dr. R. Kumar",
      uploadedOn: "31 Jul 2026",
      size: "3.2 MB",
    },
    {
      id: 2,
      title: "AVL Trees Presentation",
      type: "PPT",
      uploadedBy: "Dr. R. Kumar",
      uploadedOn: "29 Jul 2026",
      size: "5.6 MB",
    },
    {
      id: 3,
      title: "Lab Manual",
      type: "DOC",
      uploadedBy: "Dr. R. Kumar",
      uploadedOn: "28 Jul 2026",
      size: "1.4 MB",
    },
    {
      id: 4,
      title: "Algorithm Flowchart",
      type: "IMAGE",
      uploadedBy: "Dr. R. Kumar",
      uploadedOn: "27 Jul 2026",
      size: "850 KB",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-red-600 text-4xl" />;
      case "DOC":
        return <FaFileWord className="text-blue-600 text-4xl" />;
      case "PPT":
        return <FaFilePowerpoint className="text-orange-500 text-4xl" />;
      case "IMAGE":
        return <FaFileImage className="text-green-600 text-4xl" />;
      default:
        return <FaFolderOpen className="text-gray-600 text-4xl" />;
    }
  };

  return (
  <div className="space-y-6">

    {/* Header */}
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

        <div>

          <h2 className="text-lg font-semibold text-gray-800">
            Subject Resources
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Study materials, presentations, lab manuals, and reference documents.
          </p>

        </div>

        <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 transition">

          <FaArrowUpFromBracket />

          Upload Resource

        </button>

      </div>

    </div>

    {/* Resource Cards */}
    <div className="grid lg:grid-cols-2 gap-5">

      {resources.map((resource) => (
        <div
          key={resource.id}
          className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5"
        >

          {/* Top */}
          <div className="flex justify-between items-start gap-4">

            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                {getIcon(resource.type)}
              </div>

              <div>

                <h3 className="font-semibold text-gray-800">
                  {resource.title}
                </h3>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {resource.type}
                </span>

              </div>

            </div>

            <span className="text-sm text-gray-500 font-medium">
              {resource.size}
            </span>

          </div>

          {/* Details */}
          <div className="mt-5 space-y-3 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <FaUserTie />
              {resource.uploadedBy}
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarDays />
              {resource.uploadedOn}
            </div>

          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-5">

            <button className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">

              <FaEye />

              Preview

            </button>

            <button className="flex-1 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition flex items-center justify-center gap-2">

              <FaDownload />

              Download

            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
);
}

export default ResourcePanel;