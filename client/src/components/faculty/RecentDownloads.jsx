import {
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
  FaDownload,
  FaEye,
  FaArrowTrendUp,
} from "react-icons/fa6";

function RecentDownloads() {

  const resources = [
    {
      id: 1,
      title: "Unit 3 Notes",
      type: "PDF",
      downloads: 68,
      views: 85,
      trend: "+12 Today",
    },
    {
      id: 2,
      title: "AVL Trees PPT",
      type: "PPT",
      downloads: 54,
      views: 71,
      trend: "+7 Today",
    },
    {
      id: 3,
      title: "Lab Manual",
      type: "DOC",
      downloads: 41,
      views: 56,
      trend: "+3 Today",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-red-600 text-2xl" />;
      case "PPT":
        return <FaFilePowerpoint className="text-orange-500 text-2xl" />;
      case "DOC":
        return <FaFileWord className="text-blue-600 text-2xl" />;
      default:
        return <FaFilePdf className="text-gray-600 text-2xl" />;
    }
  };

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="p-5 border-b">

      <h2 className="text-lg font-semibold text-gray-800">
        Resource Activity
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Student engagement with uploaded resources.
      </p>

    </div>

    {/* Resources */}
    <div className="divide-y">

      {resources.map((item) => (
        <div
          key={item.id}
          className="p-5 hover:bg-gray-50 transition"
        >

          <div className="flex justify-between gap-4">

            {/* Left */}
            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                {getIcon(item.type)}
              </div>

              <div>

                <h3 className="font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.type} Document
                </p>

              </div>

            </div>

            {/* Trend */}
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">

              <FaArrowTrendUp />

              {item.trend}

            </div>

          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <FaDownload />
              {item.downloads} Downloads
            </div>

            <div className="flex items-center gap-2">
              <FaEye />
              {item.views} Views
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center">

      <span className="text-sm text-gray-500">
        Total Downloads Today
      </span>

      <span className="text-xl font-bold text-blue-700">
        164
      </span>

    </div>

  </div>
);
}

export default RecentDownloads;