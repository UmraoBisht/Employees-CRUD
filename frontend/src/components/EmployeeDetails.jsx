import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { User } from "lucide-react";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/employees/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);
  if (!employee)
    return (
      <tr className="text-center border-b dark:border-gray-700 px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <td colSpan="6" className="px-4 py-3">
          Employee not Found!
        </td>
      </tr>
    );

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
                    Address
                  </th>
                  <th scope="col" className="px-4 py-3">
                    City
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Zip
                  </th>
                  {employee.contactMethods.map((cm, index) => (
                    <th scope="col" key={index} className="px-4 py-3">
                      {cm.contact_method}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-blue-900 whitespace-nowrap dark:text-white flex "
                  >
                    <User />
                    <span>{employee._id}</span>
                  </th>
                  <td className="px-4 py-3">{employee.address}</td>
                  <td className="px-4 py-3">{employee.address}</td>
                  <td className="px-4 py-3">{employee.city}</td>
                  <td className="px-4 py-3">{employee.country}</td>
                  <td className="px-4 py-3">{employee.zip}</td>
                  {employee.contactMethods.map((cm, index) => (
                    <td key={index} className="px-4 py-3">
                      {cm.value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeDetails;
