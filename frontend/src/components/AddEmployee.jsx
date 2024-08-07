import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserRoundPen, UserRoundPlus } from "lucide-react";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [contactMethods, setContactMethods] = useState([
    { contact_method: "", value: "" },
  ]);
  const navigate = useNavigate();

  const addEmployee = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/employees`, {
        name,
        address,
        city,
        country,
        zip,
        contactMethods,
      })
      .then(() => {
        toast.success("Employee added successfully!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const addContactMethod = () => {
    setContactMethods([...contactMethods, { contact_method: "", value: "" }]);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 max-h-screen">
      <div className="relative p-4 w-full max-w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 w-full">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Employee
            </h3>
          </div>
          <form onSubmit={addEmployee} className="w-full">
            <div className="flex justify-center items-center flex-col w-full gap-3">
              <div className="w-full">
                <label
                  for="name"
                  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="address"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="city"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="country"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="zip_code"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Zip Code"
                  id="zip_code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full relative">
                <label
                  for="contact_method"
                  className="block text-left mb-2 text-sm font-medium py-4 text-gray-900 dark:text-white"
                >
                  Contact Method
                </label>
                <div className="w-full flex flex-col gap-3">
                  {contactMethods.map((cm, index) => (
                    <div
                      key={index}
                      className="flex w-full gap-3 flex-col md:flex-row"
                    >
                      <select
                        value={cm.contact_method}
                        onChange={(e) => {
                          const newContactMethods = [...contactMethods];
                          newContactMethods[index].contact_method =
                            e.target.value;
                          setContactMethods(newContactMethods);
                        }}
                        id="contact_method"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full md:w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 h-fit"
                      >
                        <option defaultValue={""}>Select contact method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                      <div className="w-full">
                        <input
                          value={cm.value}
                          onChange={(e) => {
                            const newContactMethods = [...contactMethods];
                            newContactMethods[index].value = e.target.value;
                            setContactMethods(newContactMethods);
                          }}
                          placeholder="Value"
                          type={cm.value}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-12 absolute right-0 top-2"
                  onClick={addContactMethod}
                >
                  <UserRoundPen />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="text-white flex justify-center items-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full "
            >
              <UserRoundPlus />
              <span className="pl-2">Add new Employee</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEmployee;
