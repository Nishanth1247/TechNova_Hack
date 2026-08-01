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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">

            Latest Resources

          </h2>

          <p className="text-gray-500 mt-2">

            Recently uploaded learning materials.

          </p>

        </div>

        <button className="text-blue-700 font-semibold hover:text-blue-900">

          View Library

        </button>

      </div>

      {/* Resources */}

      <div className="divide-y">

        {resources.map((item) => (

          <div
            key={item.id}
            className="p-6 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between flex-wrap gap-5">

              <div className="flex gap-5">

                {getIcon(item.type)}

                <div>

                  <div className="flex items-center gap-3">

                    <h3 className="text-xl font-semibold">

                      {item.title}

                    </h3>

                    {item.isNew && (

                      <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">

                        NEW

                      </span>

                    )}

                  </div>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-500 text-sm">

                    <div className="flex items-center gap-2">

                      <FaUserTie />

                      {item.faculty}

                    </div>

                    <div className="flex items-center gap-2">

                      <FaCalendarDays />

                      {item.date}

                    </div>

                  </div>

                </div>

              </div>

              <div className="text-right">

                <p className="font-semibold">

                  {item.size}

                </p>

                <span className="text-sm text-gray-500">

                  {item.type}

                </span>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-3 mt-6">

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">

                <FaEye />

                Preview

              </button>

              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">

                <FaDownload />

                Download

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-gray-50 border-t rounded-b-2xl p-5 flex justify-between">

        <span className="text-gray-600">

          New Resources This Week

        </span>

        <span className="font-bold text-blue-700">

          8

        </span>

      </div>

    </div>
  );
}

export default LatestResources;