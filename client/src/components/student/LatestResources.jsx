import {
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
  FaDownload,
  FaEye,
  FaUserTie,
  FaCalendarDays,
} from "react-icons/fa6";

function LatestResources() {

  const resources = [
    {
      id: 1,
      title: "Unit 4 Notes",
      type: "PDF",
      faculty: "Dr. R. Kumar",
      date: "Today",
      size: "3.5 MB",
      isNew: true,
    },
    {
      id: 2,
      title: "AVL Trees Presentation",
      type: "PPT",
      faculty: "Dr. Priya",
      date: "Yesterday",
      size: "5.2 MB",
      isNew: true,
    },
    {
      id: 3,
      title: "Lab Manual",
      type: "DOC",
      faculty: "Dr. Arun",
      date: "2 Days Ago",
      size: "1.8 MB",
      isNew: false,
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-red-600 text-4xl" />;

      case "PPT":
        return <FaFilePowerpoint className="text-orange-500 text-4xl" />;

      case "DOC":
        return <FaFileWord className="text-blue-700 text-4xl" />;

      default:
        return <FaFilePdf className="text-gray-600 text-4xl" />;
    }
  };

  return (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Latest Resources
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Recently uploaded learning materials.
        </p>
      </div>

      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
        View Library
      </button>
    </div>

    {/* Resources */}
    <div className="divide-y divide-gray-200">

      {resources.map((item) => (

        <div
          key={item.id}
          className="p-6 hover:bg-gray-50 transition"
        >

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            {/* Left */}
            <div className="flex gap-4">

              <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              <div>

                <div className="flex items-center gap-3 flex-wrap">

                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  {item.isNew && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      NEW
                    </span>
                  )}

                </div>

                <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <FaUserTie className="text-gray-400" />
                    <span>{item.faculty}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarDays className="text-gray-400" />
                    <span>{item.date}</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="text-left lg:text-right">

              <p className="font-semibold text-gray-800">
                {item.size}
              </p>

              <p className="text-sm text-gray-500">
                {item.type}
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">

              <FaEye size={14} />

              Preview

            </button>

            <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm transition">

              <FaDownload size={14} />

              Download

            </button>

          </div>

        </div>

      ))}

    </div>

    {/* Footer */}
    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl">

      <span className="text-sm text-gray-600">
        New Resources This Week
      </span>

      <span className="text-lg font-semibold text-blue-600">
        8
      </span>

    </div>

  </div>
);
}

export default LatestResources;