import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUserGraduate,
  FaCalendarDays,
  FaTag,
  FaCircleCheck,
  FaReply,
} from "react-icons/fa6";

function SupportTicketDetails() {
  const [status, setStatus] = useState("Open");
  const [reply, setReply] = useState("");

  const ticket = {
    id: "SUP-001",
    title: "Unable to Access Student Portal",
    student: "Rahul Kumar",
    regNo: "22CS101",
    category: "Technical",
    priority: "High",
    createdOn: "31 Jul 2026",
    description:
      "I am unable to log in to the student portal since yesterday. It shows an authentication error even after resetting my password.",
  };

  const handleReply = () => {
    if (!reply.trim()) return;

    alert("Reply Sent Successfully");
    setReply("");
  };

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* Left */}
        <div className="lg:col-span-2 bg-white border rounded-xl shadow-sm">

          {/* Header */}
          <div className="p-6 border-b">

            <h1 className="text-2xl font-bold text-gray-800">
              {ticket.title}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Ticket ID: {ticket.id}
            </p>

          </div>

          {/* Description */}
          <div className="p-6 border-b">

            <h2 className="text-lg font-semibold mb-3">
              Description
            </h2>

            <p className="text-gray-600 leading-7">
              {ticket.description}
            </p>

          </div>

          {/* Conversation */}
          <div className="p-6 border-b">

            <h2 className="text-lg font-semibold mb-5">
              Conversation
            </h2>

            <div className="space-y-4">

              <div className="bg-gray-50 border rounded-lg p-4">
                <p className="font-semibold text-gray-800">
                  Rahul Kumar
                </p>

                <p className="text-gray-600 mt-2">
                  I cannot access the portal after changing my password.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="font-semibold text-blue-700">
                  Admin
                </p>

                <p className="text-gray-600 mt-2">
                  We are checking the authentication service.
                </p>
              </div>

            </div>

          </div>

          {/* Reply */}
          <div className="p-6">

            <h2 className="text-lg font-semibold mb-4">
              Reply
            </h2>

            <textarea
              rows="4"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Write your reply..."
              className="w-full border rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              onClick={handleReply}
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition"
            >
              <FaReply />
              Send Reply
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="bg-white border rounded-xl shadow-sm p-6 h-fit">

          <h2 className="text-lg font-semibold mb-6">
            Ticket Information
          </h2>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Student
              </p>

              <p className="font-medium">
                {ticket.student}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Category
              </p>

              <p className="font-medium">
                {ticket.category}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Created On
              </p>

              <p className="font-medium">
                {ticket.createdOn}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Ticket Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg transition flex justify-center items-center gap-2">
              <FaCircleCheck />
              Update Status
            </button>

          </div>

        </div>

      </div>
    </div>
  </DashboardLayout>
);
}

export default SupportTicketDetails;