
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUserGraduate,
  FaCalendarDays,
  FaTag,
  FaCircleCheck,
  FaReply,
} from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTicket,
  getReplies,
  sendReply,
  updateStatus,
} from "../../api/supportApi";

function SupportTicketDetails() {
  const [status, setStatus] = useState("Open");
  const [reply, setReply] = useState("");

  const { id } = useParams();

const [ticket, setTicket] = useState(null);

const [replies, setReplies] = useState([]);

useEffect(() => {

    loadTicket();

    loadReplies();

}, [id]);

const loadTicket = async () => {

    const data = await getTicket(id);

    setTicket(data);

    setStatus(data.status);

};

const loadReplies = async () => {

    const data = await getReplies(id);

    setReplies(data);

};

  const handleReply = async () => {

    if (!reply.trim())
        return;

    await sendReply(id, reply);

    setReply("");

    loadReplies();

};

if (!ticket) {
  return (
    <DashboardLayout>
      <div className="p-8">
        Loading...
      </div>
    </DashboardLayout>
  );
}

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

  {replies.length === 0 ? (

    <p className="text-gray-500">
      No replies yet.
    </p>

  ) : (

    replies.map((item) => (

      <div
        key={item.id}
        className={`rounded-lg p-4 border ${
          item.name === "Admin"
            ? "bg-blue-50 border-blue-100"
            : "bg-gray-50"
        }`}
      >

        <p className="font-semibold">
          {item.name}
        </p>

        <p className="mt-2 text-gray-600">
          {item.message}
        </p>

      </div>

    ))

  )}

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
                {new Date(ticket.created_at).toLocaleDateString()}
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
                <option>Closed</option>
              </select>
            </div>

            <button
    onClick={async () => {

        await updateStatus(id, status);

        alert("Status Updated");

    }}
    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg flex justify-center items-center gap-2"
>
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