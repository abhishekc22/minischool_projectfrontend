import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Searchmodal({ isOpen, onClose, clearUserDetails }) {
  const [query, setQuery] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      
      setUserDetails(null);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/namebaselist/${query}`); 
      setUserDetails(response.data[0]);
      console.log(response,'>>>>>>>>>>>>>>>>>>>>>>')
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="text" value={query} onChange={handleChange} placeholder="Enter student name" className="border border-gray-300 rounded-lg p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
      </form>

      {userDetails && (
        <div>
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>
          <div className="modal-container fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full">
            <div className="modal-content bg-white p-6 rounded-lg">
              <h2>User Details</h2>
              <p>Name: {userDetails.name}</p>
              <p>class: {userDetails.class_name}</p>
              <p>Age: {userDetails.age}</p>
              <p>Rollno: {userDetails.roll_number}</p>
              <button onClick={onClose} className="bg-red-800 text-white px-4 py-2 rounded-lg absolute top-0 right-0">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchmodal;
