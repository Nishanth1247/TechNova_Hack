import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function CreateAnnouncement() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Normal",
    target: "All Students",
    department: "All",
    publishDate: "",
    acknowledgement: false,
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Announcement Created Successfully!");
  };

  return (
  <DashboardLayout>
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Create Announcement
        </h1>

        <p className="mt-2 text-gray-500">
          Publish official announcements for students and faculty.
        </p>

      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-8"
        >

          {/* Announcement Details */}

          <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Announcement Details
            </h2>

            <div className="space-y-6">

              {/* Title */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Announcement Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter announcement title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />

              </div>

              {/* Description */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  placeholder="Write announcement details..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />

              </div>

            </div>

          </div>

          {/* Announcement Settings */}

          <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Announcement Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Priority */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Normal</option>
                  <option>High</option>
                  <option>Emergency</option>
                </select>

              </div>

              {/* Target */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Target Audience
                </label>

                <select
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>All Students</option>
                  <option>Faculty</option>
                  <option>Entire College</option>
                  <option>Final Year</option>
                  <option>Second Year</option>
                </select>

              </div>

              {/* Department */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Department
                </label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>All</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>Mechanical</option>
                </select>

              </div>

              {/* Publish Date */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Publish Date
                </label>

                <input
                  type="date"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

          </div>

          {/* Attachment */}

          <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Attachment
            </h2>

            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="block w-full rounded-xl border border-gray-300 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-600 file:font-medium hover:file:bg-blue-100"
            />

          </div>

          {/* Acknowledgement */}

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                name="acknowledgement"
                checked={formData.acknowledgement}
                onChange={handleChange}
                className="h-5 w-5 rounded accent-blue-600"
              />

              <div>

                <p className="font-medium text-gray-700">
                  Require Student Acknowledgement
                </p>

                <p className="text-sm text-gray-500">
                  Students must confirm they have read this announcement.
                </p>

              </div>

            </label>

          </div>

          {/* Footer Buttons */}

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">

            <button
              type="button"
              className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Publish Announcement
            </button>

          </div>

        </form>

      </div>

    </div>
  </DashboardLayout>
);
}

export default CreateAnnouncement;