// backend/routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// Get all doctors
router.get('/doctors', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Patient requests appointment
router.post('/request-appointment', async (req, res) => {
  const { patientName, doctorId } = req.body;
  const appointment = await Appointment.create({ patientName, doctorId });
  res.json(appointment);
});

// Doctor responds to appointment
router.post('/doctor-response', async (req, res) => {
  const { appointmentId, status } = req.body;
  const appointment = await Appointment.findByIdAndUpdate(
    appointmentId,
    { status },
    { new: true }
  );
  res.json(appointment);
});

module.exports = router;
