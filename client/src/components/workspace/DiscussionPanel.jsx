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
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <div>

            <h2 className="text-2xl font-bold">
              Discussion Board
            </h2>

            <p className="text-gray-500 mt-2">
              Ask doubts, share ideas, and collaborate with your faculty and classmates.
            </p>

          </div>

          <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2">

            <FaPlus />

            New Discussion

          </button>

        </div>

      </div>

      {/* Filter */}

      <div className="bg-white rounded-xl shadow-sm border p-4 flex items-center gap-4">

        <FaFilter className="text-gray-500" />

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>All</option>
          <option>Solved</option>
          <option>Unsolved</option>
          <option>Pinned</option>
        </select>

      </div>

      {/* Discussions */}

      <div className="space-y-5">

        {discussions.map((discussion) => (

          <div
            key={discussion.id}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>

                <div className="flex items-center gap-3 flex-wrap">

                  {discussion.pinned && (
                    <FaThumbtack className="text-orange-500" />
                  )}

                  <h3 className="text-xl font-semibold">
                    {discussion.title}
                  </h3>

                  {discussion.solved && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <FaCircleCheck />
                      Solved
                    </span>
                  )}

                </div>

                <div className="flex gap-5 mt-4 text-gray-500 text-sm">

                  <div className="flex items-center gap-2">

                    {discussion.role === "Faculty" ? (
                      <FaUserTie />
                    ) : (
                      <FaUserGraduate />
                    )}

                    {discussion.author}

                  </div>

                  <div>

                    Topic : {discussion.topic}

                  </div>

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 justify-end">

                  <FaComment />

                  {discussion.replies} Replies

                </div>

                <p className="text-gray-500 text-sm mt-3">
                  {discussion.lastReply}
                </p>

              </div>

            </div>

            <div className="mt-6 flex gap-4">

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg">

                Open Discussion

              </button>

              <button className="border px-5 py-2 rounded-lg hover:bg-slate-100">

                Reply

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State */}

      {discussions.length === 0 && (

        <div className="bg-white rounded-2xl shadow-sm border p-16 text-center">

          <FaCircleQuestion
            className="mx-auto text-gray-400"
            size={60}
          />

          <h2 className="text-2xl font-semibold mt-5">
            No Discussions Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Start the first discussion for this subject.
          </p>

        </div>

      )}

    </div>
  );
}

export default DiscussionPanel;