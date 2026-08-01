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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnnouncementById } from "../../api/announcementApi";

function AnnouncementDetails() {

  const { id } = useParams();

const [announcement, setAnnouncement] = useState(null);

useEffect(() => {

    const loadAnnouncement = async () => {

        try {

            const data = await getAnnouncementById(id);

            setAnnouncement(data);

        } catch (err) {

            console.log(err);

        }

    };

    loadAnnouncement();

}, [id]);

  

  

  if (!announcement) {

    return (
        <DashboardLayout>
            <div className="p-8">
                Loading...
            </div>
        </DashboardLayout>
    );

}

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
              <p className="font-medium">
  {new Date(announcement.created_at).toLocaleDateString()}
</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Published By</p>
              <p className="font-medium">
  Admin
</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="font-medium">
  Computer Science
</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Target Audience</p>
              <p className="font-medium">{announcement.target_role}</p>
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
              {announcement.acknowledgements} Acknowledgements
            </span>
          </div>

          {/* <div className="w-full h-3 bg-gray-200 rounded-full">
            <div
              className="h-3 rounded-full bg-blue-700"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            {percentage}% of recipients have acknowledged this announcement.
          </p> */}
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