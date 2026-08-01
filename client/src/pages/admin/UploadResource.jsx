import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function UploadResource() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Study Material",
    department: "All",
    year: "All",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Resource uploaded successfully!");
  };

  return (
    <DashboardLayout >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">

        <h1 className="text-3xl font-bold">
          Upload Resource
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Upload academic resources and assign them to the appropriate audience.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}

          <div>

            <label className="block font-medium mb-2">
              Resource Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter resource title"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Category & Department */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block font-medium mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Study Material</option>
                <option>Timetable</option>
                <option>Question Paper</option>
                <option>Lab Manual</option>
                <option>Circular</option>
                <option>Placement</option>
              </select>

            </div>

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

          </div>

          {/* Year */}

          <div>

            <label className="block font-medium mb-2">
              Academic Year
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>All</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Final Year</option>
            </select>

          </div>

          {/* Description */}

          <div>

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* File */}

          <div>

            <label className="block font-medium mb-2">
              Upload File
            </label>

            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              className="border px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg"
            >
              Upload Resource
            </button>

          </div>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default UploadResource;