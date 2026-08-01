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
    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition">

      {/* Header */}

      <div className="flex justify-between items-start p-6 border-b">

        <div>

          <div className="flex items-center gap-3">

            <FaBullhorn className="text-blue-700 text-xl" />

            <h2 className="text-xl font-bold">

              {announcement.title}

            </h2>

          </div>

          <p className="text-gray-500 mt-2">

            {announcement.subject}

          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            priorityColor[announcement.priority]
          }`}
        >
          {announcement.priority}
        </span>

      </div>

      {/* Description */}

      <div className="px-6 py-5">

        <p className="text-gray-600 leading-7">

          {announcement.description}

        </p>

      </div>

      {/* Information */}

      <div className="grid grid-cols-3 border-t">

        <div className="p-5 border-r">

          <div className="flex items-center gap-2 text-gray-500">

            <FaCalendarDays />

            Published

          </div>

          <p className="font-semibold mt-2">

            {announcement.date}

          </p>

        </div>

        <div className="p-5 border-r">

          <div className="flex items-center gap-2 text-gray-500">

            <FaUsers />

            Audience

          </div>

          <p className="font-semibold mt-2">

            {announcement.audience}

          </p>

        </div>

        <div className="p-5">

          <div className="flex items-center gap-2 text-gray-500">

            <FaCircleCheck />

            Acknowledged

          </div>

          <p className="font-semibold mt-2">

            {announcement.read}/{announcement.total}

          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="px-6 py-5">

        <div className="flex justify-between mb-2">

          <span className="text-sm text-gray-500">

            Acknowledgement Progress

          </span>

          <span className="font-semibold text-blue-700">

            {Math.round(
              (announcement.read / announcement.total) * 100
            )}
            %
          </span>

        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full">

          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${
                (announcement.read / announcement.total) * 100
              }%`,
            }}
          ></div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-end gap-3 border-t p-5">

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">

          <FaEye />

          View

        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-blue-50 text-blue-700 flex items-center gap-2">

          <FaPen />

          Edit

        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 flex items-center gap-2">

          <FaTrash />

          Delete

        </button>

      </div>

    </div>
  );
}

export default AnnouncementCard;