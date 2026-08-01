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
    <DashboardLayout >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-2">
          Create Announcement
        </h1>

        <p className="text-gray-500 mb-8">
          Publish official announcements for students and faculty.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}

          <div>
            <label className="block font-medium mb-2">
              Announcement Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter announcement title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="6"
              name="description"
              placeholder="Write announcement details..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          {/* Priority & Target */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-medium mb-2">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Normal</option>
                <option>High</option>
                <option>Emergency</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Target Audience
              </label>

              <select
                name="target"
                value={formData.target}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>All Students</option>
                <option>Faculty</option>
                <option>Entire College</option>
                <option>Final Year</option>
                <option>Second Year</option>
              </select>
            </div>

          </div>

          {/* Department & Publish Date */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-medium mb-2">
                Department
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>All</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>Mechanical</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Publish Date
              </label>

              <input
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

          </div>

          {/* File Upload */}

          <div>
            <label className="block font-medium mb-2">
              Attachment
            </label>

            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* Acknowledgement */}

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="acknowledgement"
              checked={formData.acknowledgement}
              onChange={handleChange}
            />

            <label>
              Require student acknowledgement
            </label>
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              className="px-6 py-3 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-800 text-white hover:bg-blue-900"
            >
              Publish Announcement
            </button>

          </div>

        </form>
      </div>
    </DashboardLayout>
  );
}

export default CreateAnnouncement;