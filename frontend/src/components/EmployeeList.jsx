import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Trash2, User } from "lucide-react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  console.log(import.meta.env.VITE_API_BASE_URL);
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/employees`)
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const deleteEmployee = (id) => {
    axios
      .delete(`/api/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((emp) => emp._id !== id));
        toast.success("Employee deleted successfully!");
      })
      .catch((error) => toast.error("Employee failed to delete!"));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 max-h-screen">
      <div className="mx-auto h-full max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto h-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Employee ID
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Employee name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.length === 0 ? (
                  <tr className="text-center border-b dark:border-gray-700 px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <td colSpan="3" className="px-4 py-3">
                      No Employees System
                    </td>
                  </tr>
                ) : (
                  employees.map((emp) => (
                    <tr key={emp._id} className="border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-blue-700 hover:text-blue-900 whitespace-nowrap dark:text-white"
                      >
                        <Link to={`/employees/${emp._id}`} className="flex">
                          <User />
                          <span>{emp._id.slice(0, 6)}...</span>
                        </Link>
                      </th>
                      <td className="px-4 py-3 font-bold">{emp.name}</td>
                      <td className="px-4 py-3 flex items-center justify-end">
                        <button
                          type="button"
                          onClick={() => deleteEmployee(emp._id)}
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeList;
