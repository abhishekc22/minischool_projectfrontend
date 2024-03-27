import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Studentlist() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/listall/");
        setStudents(response.data); 
        console.log(response.data, '56565656');
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Roll Number
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "even:bg-gray-50 even:dark:bg-gray-800"
                    : "odd:bg-white odd:dark:bg-gray-900"
                } border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-red-500">
                  {student.name} 
                </td>
                <td className="px-6 py-4" style={{ color: "#333" }}>
                  {student.age}
                </td>
                <td className="px-6 py-4" style={{ color: "#333" }}>
                  {student.class_name}
                </td>
                <td className="px-6 py-4" style={{ color: "#333" }}>
                  {student.roll_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Studentlist;
