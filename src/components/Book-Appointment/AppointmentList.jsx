import React from "react";
import {
  useAppointment,
  AppointmentProvider,
} from "../../context/AppointmentContext";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaRegCalendarCheck } from "react-icons/fa";

const AppointmentListContent = () => {
  const { appointments } = useAppointment();
  const navigate = useNavigate();

  if (!appointments || appointments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-white dark:bg-dark rounded-xl shadow-lg p-8 space-y-4">
        <FaRegCalendarCheck className="w-16 h-16 text-gray-300 dark:text-gray-600" />
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No appointments found
        </p>
        <button
          onClick={() => navigate("/appointments/book")}
          className="mt-4 inline-flex items-center px-4 py-2 border-2 border-pink text-pink hover:bg-pink hover:text-white-whites rounded-lg transition-all duration-200 space-x-2"
        >
          <FaCalendarPlus className="w-5 h-5" />
          <span>Book Your First Appointment</span>
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-white dark:bg-dark rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Appointments
          </h2>
          <button
            className="inline-flex items-center px-4 py-2 border-2 border-pink text-pink hover:bg-pink hover:text-white-bg rounded-lg transition-all duration-200 space-x-2"
            onClick={() => navigate("/appointments/book")}
          >
            <FaCalendarPlus className="w-4 h-4" />
            <span>Book</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs  text-gray-500 dark:text-gray-50 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs  text-gray-500 dark:text-gray-50 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-4 text-left text-xs  text-gray-500 dark:text-gray-50 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-4 text-left text-xs  text-gray-500 dark:text-gray-50 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs  text-gray-500 dark:text-gray-50 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark divide-y divide-gray-200 dark:divide-gray-700">
            {appointments.map((appointment) => (
              <tr
                key={appointment.appointmentId}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 dark:text-gray-100">
                  {appointment.appointmentDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-50">
                  {appointment.appointmentTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-50">
                  {appointment.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-50">
                  {appointment.userEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.appointmentStatus === "pending"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
                          : appointment.appointmentStatus === "confirmed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500"
                      }`}
                    >
                      {appointment.appointmentStatus}
                    </span>
                    {!appointment.synced && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs  bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                        Not synced
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AppointmentList = () => {
  return (
    <AppointmentProvider>
      <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <AppointmentListContent />
      </div>
    </AppointmentProvider>
  );
};

export default AppointmentList;
