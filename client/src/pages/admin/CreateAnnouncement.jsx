import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { createAnnouncement } from "../../api/announcementApi";
import { useNavigate } from "react-router-dom";

function CreateAnnouncement() {

  

  const [formData, setFormData] = useState({
  title: "",
  description: "",
  priority: "Medium",
  target_role: "all",
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    await createAnnouncement(formData);

    alert("Announcement Created Successfully!");

    navigate("/admin/announcements");

  } catch (err) {

    console.error(err);

    alert("Failed to create announcement.");

  }
};

  const navigate = useNavigate();

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
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

              </div>

              {/* Target */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Target Audience
                </label>

                <select
    name="target_role"
    value={formData.target_role}
    onChange={handleChange}
>
    <option value="all">All Users</option>
    <option value="student">Students</option>
    <option value="faculty">Faculty</option>
</select>

              </div>
            </div>
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