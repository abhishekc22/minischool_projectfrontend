import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Subject() {
    const [subjects, setSubjects] = useState([]);

    const fetchSubjects = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/subjectall/`);
            if (res.status === 200) {
                console.log(res.data,'???????')
                setSubjects(res.data);
            }
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <>
            <Navbar />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Subject Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Language
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Students Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Teacher Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Teacher Sex
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Teacher Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map(subject => (
                            <tr key={subject.id} className="bg-blue-500 border-b border-blue-400">
                                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    {subject.name}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.language}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.students.length > 0 ? subject.students[0].name : 'N/A'}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.students.length > 0 ? subject.students[0].class_name : 'N/A'}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.teacher.length > 0 ? subject.teacher[0].name : 'N/A'}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.teacher.length > 0 ? subject.teacher[0].sex : 'N/A'}
                                </td>
                                <td className="px-6 py-4">
                                    {subject.teacher.length > 0 ? subject.teacher[0].age : 'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Subject;
