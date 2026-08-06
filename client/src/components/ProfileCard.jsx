import { FaCircleUser } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

function ProfileCard() {
  const { user } = useAuth();

  const roleColor = {
    admin: "bg-red-100 text-red-700",
    faculty: "bg-blue-100 text-blue-700",
    student: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

      {/* Header */}
      <div
        className={`h-28 flex items-center justify-center ${
          user?.role === "admin"
            ? "bg-gradient-to-r from-red-600 to-red-500"
            : user?.role === "faculty"
            ? "bg-gradient-to-r from-blue-700 to-blue-500"
            : "bg-gradient-to-r from-green-600 to-green-500"
        }`}
      >
        <FaCircleUser className="text-white" size={80} />
      </div>

      {/* Body */}
      <div className="p-6 text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          {user?.name}
        </h2>

        <span
          className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium capitalize ${
            roleColor[user?.role]
          }`}
        >
          {user?.role}
        </span>

        <div className="mt-6 space-y-4 text-left">

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-medium">
              {user?.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Department
            </p>

            <p className="font-medium">
              {user?.department || "Computer Science"}
            </p>
          </div>

          {user?.role === "student" && (
            <>
              <div>
                <p className="text-sm text-gray-500">
                  Register Number
                </p>

                <p className="font-medium">
                  {user?.registerNo || "22CS001"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Semester
                </p>

                <p className="font-medium">
                  {user?.semester || "5"}
                </p>
              </div>
            </>
          )}

          {user?.role === "faculty" && (
            <>
              <div>
                <p className="text-sm text-gray-500">
                  Employee ID
                </p>

                <p className="font-medium">
                  {user?.employeeId || "FAC102"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Designation
                </p>

                <p className="font-medium">
                  {user?.designation || "Assistant Professor"}
                </p>
              </div>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <div>
                <p className="text-sm text-gray-500">
                  Employee ID
                </p>

                <p className="font-medium">
                  {user?.employeeId || "ADM001"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Access Level
                </p>

                <p className="font-medium">
                  Super Administrator
                </p>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProfileCard;