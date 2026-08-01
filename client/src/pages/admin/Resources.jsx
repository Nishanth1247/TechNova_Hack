import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaPlus,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaDownload,
  FaEye,
  FaTrash,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Resources() {
    const navigate = useNavigate();
  const resources = [
    {
      id: 1,
      title: "Mid Semester Timetable",
      category: "Timetable",
      department: "All",
      type: "PDF",
      uploadedBy: "Academic Office",
      date: "31 Jul 2026",
    },
    {
      id: 2,
      title: "Data Structures Notes - Unit 1",
      category: "Study Material",
      department: "CSE",
      type: "PDF",
      uploadedBy: "Dr. Kumar",
      date: "30 Jul 2026",
    },
    {
      id: 3,
      title: "Placement Orientation PPT",
      category: "Placement",
      department: "Final Year",
      type: "PPT",
      uploadedBy: "Placement Cell",
      date: "29 Jul 2026",
    },
  ];

  const fileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-red-600 text-3xl" />;
      case "DOC":
        return <FaFileWord className="text-blue-600 text-3xl" />;
      case "PPT":
        return <FaFilePowerpoint className="text-orange-500 text-3xl" />;
      default:
        return <FaFilePdf className="text-red-600 text-3xl" />;
    }
  };

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white border rounded-xl shadow-sm">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-6 border-b">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Resource Hub
            </h1>

            <p className="text-gray-500 mt-1">
              Manage study materials, timetables and official documents.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/resources/upload")}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition"
          >
            <FaPlus />
            Upload Resource
          </button>

        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 p-6 border-b">

          <div className="flex items-center flex-1 border rounded-lg px-4">

            <FaMagnifyingGlass className="text-gray-400" />

            <input
              placeholder="Search resources..."
              className="flex-1 px-3 py-3 outline-none"
            />

          </div>

          <select className="border rounded-lg px-4 py-3 md:w-56">
            <option>All Categories</option>
            <option>Study Material</option>
            <option>Timetable</option>
            <option>Placement</option>
            <option>Circular</option>
          </select>

        </div>

        {/* Resources */}
        <div className="divide-y">

          {resources.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 hover:bg-gray-50 transition"
            >

              {/* Left */}
              <div className="flex gap-4 flex-1">

                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  {fileIcon(item.type)}
                </div>

                <div>

                  <div className="flex items-center gap-3 flex-wrap">

                    <h2 className="font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {item.category}
                    </span>

                  </div>

                  <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-6">

                    <span>
                      Department: {item.department}
                    </span>

                    <span>
                      Uploaded By: {item.uploadedBy}
                    </span>

                    <span>
                      {item.date}
                    </span>

                  </div>

                </div>

              </div>

              {/* Actions */}
              <div className="flex gap-2">

                <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition">
                  <FaEye />
                </button>

                <button className="p-2 rounded-lg text-green-600 hover:bg-green-100 transition">
                  <FaDownload />
                </button>

                <button className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition">
                  <FaTrash />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  </DashboardLayout>
);
}

export default Resources;