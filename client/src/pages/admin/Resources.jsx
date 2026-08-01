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
    <DashboardLayout >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Resource Hub</h1>
          <p className="text-gray-500 mt-1">
            Manage study materials, timetables and official documents.
          </p>
        </div>

        <button
  onClick={() => navigate("/admin/resources/upload")}
  className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2"
>
  <FaPlus />
  Upload Resource
</button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-8 flex gap-4">
        <div className="flex items-center border rounded-lg px-4 flex-1">
          <FaMagnifyingGlass className="text-gray-400" />

          <input
            className="flex-1 px-3 py-3 outline-none"
            placeholder="Search resources..."
          />
        </div>

        <select className="border rounded-lg px-4">
          <option>All Categories</option>
          <option>Study Material</option>
          <option>Timetable</option>
          <option>Placement</option>
          <option>Circular</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

        {resources.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <div className="flex justify-between items-start">

              {fileIcon(item.type)}

              <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                {item.category}
              </span>

            </div>

            <h2 className="font-bold text-xl mt-5">
              {item.title}
            </h2>

            <div className="space-y-2 mt-4 text-gray-600 text-sm">

              <p>
                Department : {item.department}
              </p>

              <p>
                Uploaded By : {item.uploadedBy}
              </p>

              <p>
                Date : {item.date}
              </p>

            </div>

            <div className="flex justify-between mt-6">

              <button className="text-blue-700">
                <FaEye size={18} />
              </button>

              <button className="text-green-700">
                <FaDownload size={18} />
              </button>

              <button className="text-red-600">
                <FaTrash size={18} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
}

export default Resources;