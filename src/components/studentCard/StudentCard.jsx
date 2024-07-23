import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaSms, FaUser, FaVenusMars, FaHeartbeat, FaTint } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import './StudentCard.css';

const StudentCard = ({ student }) => {
  const { image, name, mother,father,age, gender, bloodGroup, healthConditions, phone, whatsapp, location, sms } = student;

  return (
    <div className="student-card">
      <div className="student-card-header">
        <img src={image} alt={name} className="student-image" />
        <h2 className="student-name">{name}</h2>
      </div>
      <div className="student-card-body">
      <p className="student-info"><CgProfile /> Mother: {mother}</p>
      <p className="student-info"><CgProfile /> Father: {father}</p>
        <p className="student-info"><FaHeartbeat /> Age: {age}</p>
        <p className="student-info"><FaVenusMars /> Gender: {gender}</p>
        <p className="student-info"><FaTint /> Blood Group: {bloodGroup}</p>
        <p className="student-info"><FaHeartbeat /> Health Conditions: {healthConditions}</p>
      </div>
      <div className="student-card-footer">
        <a href={`tel:${phone}`} className="contact-icon"><FaPhone /></a>
        <a href={`https://wa.me/${whatsapp}`} className="contact-icon"><FaWhatsapp /></a>
        <a href={location} className="contact-icon"><FaMapMarkerAlt /></a>
        <a href={`sms:${sms}`} className="contact-icon"><FaSms /></a>
      </div>
    </div>
  );
};

export default StudentCard;
