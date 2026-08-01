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

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <div>

            <h2 className="text-2xl font-bold">
              Subject Resources
            </h2>

            <p className="text-gray-500 mt-2">
              Study materials, presentations, lab manuals and reference documents.
            </p>

          </div>

          <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2">

            <FaArrowUpFromBracket />

            Upload Resource

          </button>

        </div>

      </div>

      {/* Resource Cards */}

      <div className="grid lg:grid-cols-2 gap-6">

        {resources.map((resource) => (

          <div
            key={resource.id}
            className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition p-6"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                {getIcon(resource.type)}

                <div>

                  <h3 className="text-xl font-semibold">
                    {resource.title}
                  </h3>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-block mt-2">
                    {resource.type}
                  </span>

                </div>

              </div>

              <div className="font-semibold text-gray-500">
                {resource.size}
              </div>

            </div>

            <div className="mt-6 space-y-3 text-gray-600">

              <div className="flex items-center gap-3">

                <FaUserTie />

                {resource.uploadedBy}

              </div>

              <div className="flex items-center gap-3">

                <FaCalendarDays />

                {resource.uploadedOn}

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg flex justify-center items-center gap-2">

                <FaEye />

                Preview

              </button>

              <button className="flex-1 border hover:bg-slate-100 py-3 rounded-lg flex justify-center items-center gap-2">

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