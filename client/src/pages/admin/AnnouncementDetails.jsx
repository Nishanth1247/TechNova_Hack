import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBullhorn,
  FaCalendarDays,
  FaUser,
  FaBuilding,
  FaCircleCheck,
  FaDownload,
  FaEye,
} from "react-icons/fa6";

function AnnouncementDetails() {
  const announcement = {
    title: "Mid Semester Examination Schedule",
    description:
      "The Mid Semester Examination for all departments will commence from 18th August 2026. Students are advised to download the timetable from the Resource Hub and verify their registered subjects before the examination. Any discrepancy should be reported to the department office before 10th August 2026.",
    priority: "High",
    department: "All Departments",
    target: "All Students",
    publishedBy: "Academic Office",
    publishDate: "31 July 2026",
    attachment: "Exam_Schedule.pdf",
    acknowledgement: true,
    acknowledged: 892,
    total: 1200,
  };

  const percentage = Math.round(
    (announcement.acknowledged / announcement.total) * 100
  );

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow border">

        {/* Header */}
        <div className="flex justify-between items-start p-8 border-b">
          <div>
            <div className="flex items-center gap-3">
              <FaBullhorn className="text-blue-700 text-xl" />
              <h1 className="text-2xl font-bold text-gray-800">
                {announcement.title}
              </h1>
            </div>

            <span className="inline-block mt-4 px-3 py-1 rounded-md bg-yellow-100 text-yellow-700 text-sm font-medium">
              {announcement.priority} Priority
            </span>
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition">
            Edit Announcement
          </button>
        </div>

        {/* Announcement Details */}
        <div className="p-8 border-b">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Announcement Details
          </h2>

          <p className="text-gray-600 leading-8">
            {announcement.description}
          </p>

          {announcement.attachment && (
            <button className="mt-6 flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <FaDownload />
              {announcement.attachment}
            </button>
          )}
        </div>

        {/* Information */}
        <div className="p-8 border-b">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">Published</p>
              <p className="font-medium">{announcement.publishDate}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Published By</p>
              <p className="font-medium">{announcement.publishedBy}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="font-medium">{announcement.department}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Target Audience</p>
              <p className="font-medium">{announcement.target}</p>
            </div>

          </div>
        </div>

        {/* Acknowledgement */}
        <div className="p-8 border-b">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Acknowledgement Status
            </h2>

            <span className="font-semibold text-blue-700">
              {announcement.acknowledged} / {announcement.total}
            </span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div
              className="h-3 rounded-full bg-blue-700"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            {percentage}% of recipients have acknowledged this announcement.
          </p>
        </div>

        {/* Student Action */}
        <div className="flex justify-between items-center p-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Student Action
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Students can acknowledge this announcement after reading it.
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition">
            <FaCircleCheck />
            Acknowledge
          </button>
        </div>

      </div>
    </div>
  </DashboardLayout>
);
}

export default AnnouncementDetails;