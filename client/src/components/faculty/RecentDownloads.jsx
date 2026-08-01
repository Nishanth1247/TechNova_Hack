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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Resource Activity
          </h2>

          <p className="text-gray-500 mt-1">
            Student engagement with uploaded resources.
          </p>

        </div>

      </div>

      {/* Resources */}

      <div className="divide-y">

        {resources.map((item) => (

          <div
            key={item.id}
            className="p-5 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                {getIcon(item.type)}

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-sm text-gray-500">
                    {item.type} Document
                  </span>

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 text-green-600 text-sm">

                  <FaArrowTrendUp />

                  {item.trend}

                </div>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="flex items-center gap-2 text-gray-600">

                <FaDownload />

                {item.downloads} Downloads

              </div>

              <div className="flex items-center gap-2 text-gray-600">

                <FaEye />

                {item.views} Views

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-gray-50 rounded-b-2xl border-t p-5 flex justify-between items-center">

        <span className="text-gray-600">
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