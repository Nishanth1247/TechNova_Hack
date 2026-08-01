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
    <DashboardLayout >
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left Section */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">

          <h1 className="text-3xl font-bold">
            {ticket.title}
          </h1>

          <p className="text-gray-500 mt-2">
            Ticket ID: {ticket.id}
          </p>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold">
            Description
          </h2>

          <p className="mt-3 text-gray-600 leading-7">
            {ticket.description}
          </p>

          {/* Conversation */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-4">
              Conversation
            </h2>

            <div className="space-y-5">

              <div className="bg-slate-100 rounded-xl p-4">
                <p className="font-semibold">
                  Rahul Kumar
                </p>

                <p className="text-gray-600 mt-2">
                  I cannot access the portal after changing my password.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-semibold">
                  Admin
                </p>

                <p className="text-gray-600 mt-2">
                  We are checking the authentication service.
                </p>
              </div>

            </div>

          </div>

          {/* Reply */}

          <div className="mt-8">

            <textarea
              rows="4"
              placeholder="Write your reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="w-full border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleReply}
              className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaReply />
              Send Reply
            </button>

          </div>

        </div>

        {/* Right Section */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-6">
            Ticket Information
          </h2>

          <div className="space-y-6">

            <div className="flex gap-3">
              <FaUserGraduate className="mt-1 text-blue-700" />
              <div>
                <p className="text-gray-500">Student</p>
                <p>{ticket.student}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaTag className="mt-1 text-blue-700" />
              <div>
                <p className="text-gray-500">Category</p>
                <p>{ticket.category}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaCalendarDays className="mt-1 text-blue-700" />
              <div>
                <p className="text-gray-500">Created On</p>
                <p>{ticket.createdOn}</p>
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Ticket Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex justify-center items-center gap-2">
              <FaCircleCheck />
              Update Status
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default SupportTicketDetails;