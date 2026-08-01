import {
  FaBullhorn,
  FaCalendarDays,
  FaUsers,
  FaEye,
  FaPen,
  FaTrash,
  FaCircleCheck,
} from "react-icons/fa6";

function AnnouncementCard({ announcement }) {
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
    Normal: "bg-blue-100 text-blue-700",
  };

  return (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200">

    {/* Header */}
    <div className="flex justify-between items-start p-5 border-b">

      <div>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <FaBullhorn className="text-blue-700" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {announcement.title}
            </h2>

            <p className="text-sm text-gray-500">
              {announcement.subject}
            </p>
          </div>

        </div>

      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          priorityColor[announcement.priority]
        }`}
      >
        {announcement.priority}
      </span>

    </div>

    {/* Description */}
    <div className="p-5">

      <p className="text-gray-600 leading-7">
        {announcement.description}
      </p>

    </div>

    {/* Information */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-t">

      <div className="p-5 md:border-r">
        <p className="text-xs uppercase text-gray-400">
          Published
        </p>

        <p className="font-medium mt-1">
          {announcement.date}
        </p>
      </div>

      <div className="p-5 md:border-r">
        <p className="text-xs uppercase text-gray-400">
          Audience
        </p>

        <p className="font-medium mt-1">
          {announcement.audience}
        </p>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase text-gray-400">
          Acknowledged
        </p>

        <p className="font-medium mt-1">
          {announcement.read}/{announcement.total}
        </p>
      </div>

    </div>

    {/* Progress */}
    <div className="border-t p-5">

      <div className="flex justify-between text-sm mb-2">

        <span className="text-gray-500">
          Progress
        </span>

        <span className="font-medium text-blue-700">
          {Math.round(
            (announcement.read / announcement.total) * 100
          )}
          %
        </span>

      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{
            width: `${
              (announcement.read / announcement.total) * 100
            }%`,
          }}
        />

      </div>

    </div>

    {/* Footer */}
    <div className="flex justify-end gap-2 border-t p-4">

      <button className="w-10 h-10 rounded-lg border hover:bg-gray-100 transition flex items-center justify-center">
        <FaEye />
      </button>

      <button className="w-10 h-10 rounded-lg border text-blue-600 hover:bg-blue-50 transition flex items-center justify-center">
        <FaPen />
      </button>

      <button className="w-10 h-10 rounded-lg border text-red-600 hover:bg-red-50 transition flex items-center justify-center">
        <FaTrash />
      </button>

    </div>

  </div>
);
}

export default AnnouncementCard;