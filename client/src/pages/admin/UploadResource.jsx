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
  <DashboardLayout>
    <div className="max-w-5xl mx-auto">

      {/* Page Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Upload Resource
        </h1>

        <p className="mt-2 text-gray-500">
          Upload academic resources and share them with the appropriate audience.
        </p>

      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-8"
        >

          {/* Resource Information */}

          <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Resource Information
            </h2>

            <div className="space-y-6">

              {/* Title */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Resource Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter resource title"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
                />

              </div>

              {/* Category & Department */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

              </div>

              {/* Academic Year */}

              <div>

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Academic Year
                </label>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write a short description..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>

            </div>

          </div>

          {/* File Upload */}

          <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Upload File
            </h2>

            <input
              type="file"
              name="file"
              onChange={handleChange}
              required
              className="block w-full rounded-xl border border-gray-300 px-4 py-3
              file:mr-4
              file:rounded-lg
              file:border-0
              file:bg-blue-50
              file:px-4
              file:py-2
              file:text-blue-600
              file:font-medium
              hover:file:bg-blue-100"
            />

            <p className="mt-2 text-sm text-gray-500">
              Supported formats: PDF, DOCX, PPT, XLSX, ZIP.
            </p>

          </div>

          {/* Buttons */}

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
              Upload Resource
            </button>

          </div>

        </form>

      </div>

    </div>
  </DashboardLayout>
);
}

export default UploadResource;