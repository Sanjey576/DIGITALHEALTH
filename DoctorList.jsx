// src/pages/DoctorList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await axios.get('http://localhost:5000/api/doctors');
      setDoctors(res.data);
    }
    fetchDoctors();
  }, []);

  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>
      {doctors.map((doc) => (
        <div className="doctor-card" key={doc._id}>
          <h3>{doc.name}</h3>
          <p>Specialization: {doc.specialization}</p>
          <button>Request Appointment</button>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
