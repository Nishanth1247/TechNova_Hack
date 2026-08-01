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
    <DashboardLayout >
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <div className="flex justify-between items-start">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <FaBullhorn className="text-blue-700 text-2xl" />

                <h1 className="text-3xl font-bold">
                  {announcement.title}
                </h1>

              </div>

              <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                {announcement.priority} Priority
              </span>

            </div>

            <button className="bg-blue-800 text-white px-5 py-3 rounded-lg hover:bg-blue-900">
              Edit Announcement
            </button>

          </div>

        </div>

        {/* Information */}

        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">

            <h2 className="text-xl font-semibold mb-4">
              Announcement Details
            </h2>

            <p className="text-gray-600 leading-8">
              {announcement.description}
            </p>

            <div className="mt-8">

              <button className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-lg">

                <FaDownload />

                {announcement.attachment}

              </button>

            </div>

          </div>

          {/* Information Card */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-5">
              Information
            </h2>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaCalendarDays className="mt-1 text-blue-700" />
                <div>
                  <p className="text-gray-500">Published</p>
                  <p>{announcement.publishDate}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaUser className="mt-1 text-blue-700" />
                <div>
                  <p className="text-gray-500">Published By</p>
                  <p>{announcement.publishedBy}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaBuilding className="mt-1 text-blue-700" />
                <div>
                  <p className="text-gray-500">Department</p>
                  <p>{announcement.department}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaEye className="mt-1 text-blue-700" />
                <div>
                  <p className="text-gray-500">Target Audience</p>
                  <p>{announcement.target}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Acknowledgement */}

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-semibold">
              Acknowledgement Status
            </h2>

            <span className="font-semibold text-blue-700">
              {announcement.acknowledged} / {announcement.total}
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-6">

            <div
              className="bg-blue-700 h-4 rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            ></div>

          </div>

          <p className="mt-3 text-gray-500">
            {percentage}% of recipients have acknowledged this announcement.
          </p>

        </div>

        {/* Student View Button */}

        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-xl font-semibold">
                Student Action
              </h2>

              <p className="text-gray-500 mt-1">
                Students will see this button if acknowledgement is required.
              </p>

            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-3">

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