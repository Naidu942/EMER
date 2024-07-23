import React from 'react'
import StudentCard from './components/studentCard/StudentCard'
import './App.css'
import stdimage from './assets/image/naiduimage2.png'
const App = () => {
  const student = {
    image: stdimage,
    name: 'Naidu saladi Subrahmanyam ',
    age: 21,
    gender: 'Male',
    bloodGroup: 'O+',
    healthConditions: 'Normal',
    phone: '+91-799-390-5942',
    whatsapp: '+91-799-390-5942',
    location: 'https://maps.google.com/?q=loc:0,0',
    sms: '+91-799-390-5942'
  };
  return (
    <div className='card'>
      <StudentCard student={student}/>
    </div>
  )
}

export default App
