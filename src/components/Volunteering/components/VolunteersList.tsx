import React from "react";
import { FaCalendarPlus, FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Volunteer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  skills: string[];
  status: "Active" | "Inactive" | "Pending";
  joinedDate: string;
}

// Sample data - replace with your actual data source
const volunteers: Volunteer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    nationality: "USA",
    skills: ["First Aid", "Communication", "Leadership"],
    status: "Active",
    joinedDate: "2024-01-15",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "+9876543210",
    nationality: "UK",
    skills: ["Teaching", "Organization", "Teamwork"],
    status: "Active",
    joinedDate: "2024-02-01",
  },
];

const VolunteersList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white-bg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 dark:bg-dark">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Volunteers
          </h2>
          <button
            className="inline-flex items-center px-4 py-2 border-2 border-pink text-pink hover:bg-pink hover:text-white-bg rounded-lg transition-all duration-200 space-x-2"
            onClick={() => navigate("/volunteer/register")}
          >
            <FaCalendarPlus className="w-4 h-4" />
            <span>Register</span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 dark:text-gray-400 bg-white-bg3 dark:bg-[#000]">
              <th className="px-4 py-3">Volunteer</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Skills</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Joined Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-dark">
            {volunteers.map((volunteer) => (
              <tr
                key={volunteer.id}
                className="text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-xs  text-gray-500 dark:text-gray-400">
                          {volunteer.firstName[0]}
                          {volunteer.lastName[0]}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {volunteer.firstName} {volunteer.lastName}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {volunteer.nationality}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div>
                    <p>{volunteer.email}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {volunteer.phone}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex flex-wrap gap-1">
                    {volunteer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs  leading-none text-pink rounded-full bg-pink/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 font-semibold leading-tight rounded-full 
                    ${
                      volunteer.status === "Active"
                        ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                        : volunteer.status === "Inactive"
                        ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100"
                        : "text-orange-700 bg-orange-100 dark:bg-orange-700 dark:text-orange-100"
                    }`}
                  >
                    {volunteer.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(volunteer.joinedDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteersList;
