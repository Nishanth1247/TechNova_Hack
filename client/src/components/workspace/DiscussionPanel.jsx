import { useState } from "react";
import {
  FaCircleQuestion,
  FaUserGraduate,
  FaUserTie,
  FaThumbtack,
  FaComment,
  FaCircleCheck,
  FaFilter,
  FaPlus,
} from "react-icons/fa6";

function DiscussionPanel({
    role,
    subjectId
}) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const discussions = [
    {
      id: 1,
      title: "Difference between BFS and DFS?",
      author: "Rahul Kumar",
      role: "Student",
      topic: "Graphs",
      replies: 6,
      solved: true,
      pinned: true,
      lastReply: "Faculty • 10 mins ago",
    },
    {
      id: 2,
      title: "Need explanation for AVL Rotation",
      author: "Priya S",
      role: "Student",
      topic: "Trees",
      replies: 3,
      solved: false,
      pinned: false,
      lastReply: "Student • 25 mins ago",
    },
    {
      id: 3,
      title: "Assignment 3 Submission Clarification",
      author: "Dr. Kumar",
      role: "Faculty",
      topic: "Assignments",
      replies: 14,
      solved: false,
      pinned: true,
      lastReply: "Faculty • 1 hour ago",
    },
  ];

  return (
  <div className="space-y-5">

    {/* Header */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Discussion Board
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Ask questions, share ideas and collaborate with your faculty and classmates.
          </p>

        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">

          <FaPlus size={14} />

          New Discussion

        </button>

      </div>

    </div>

    {/* Filter */}
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center gap-3">

      <FaFilter className="text-gray-400" />

      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500"
      >
        <option>All</option>
        <option>Solved</option>
        <option>Unsolved</option>
        <option>Pinned</option>
      </select>

    </div>

    {/* Discussion Cards */}
    <div className="space-y-4">

      {discussions.map((discussion) => (

        <div
          key={discussion.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-blue-300 hover:shadow-md transition"
        >

          <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

            {/* Left */}
            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">

                {discussion.pinned && (
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                    <FaThumbtack className="text-orange-600 text-sm" />
                  </div>
                )}

                <h3 className="text-lg font-semibold text-gray-800">
                  {discussion.title}
                </h3>

                {discussion.solved && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">

                    <FaCircleCheck size={12} />

                    Solved

                  </span>
                )}

              </div>

              <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-gray-500">

                <div className="flex items-center gap-2">

                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">

                    {discussion.role === "Faculty" ? (
                      <FaUserTie className="text-blue-600 text-sm" />
                    ) : (
                      <FaUserGraduate className="text-green-600 text-sm" />
                    )}

                  </div>

                  <span>{discussion.author}</span>

                </div>

                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                  {discussion.topic}
                </span>

              </div>

            </div>

            {/* Right */}
            <div className="lg:text-right">

              <div className="flex items-center justify-start lg:justify-end gap-2 text-gray-600">

                <FaComment className="text-blue-500" />

                <span className="font-medium">
                  {discussion.replies} Replies
                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">
                {discussion.lastReply}
              </p>

            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-gray-100">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm transition">

              Open Discussion

            </button>

            <button className="border border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm transition">

              Reply

            </button>

          </div>

        </div>

      ))}

    </div>

    {/* Empty State */}
    {discussions.length === 0 && (

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-16 text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center">

          <FaCircleQuestion
            className="text-gray-400"
            size={34}
          />

        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          No Discussions Yet
        </h3>

        <p className="text-gray-500 mt-2">
          Start the first discussion for this subject.
        </p>

      </div>

    )}

  </div>
);
}

export default DiscussionPanel;