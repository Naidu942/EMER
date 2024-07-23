import React from 'react'
import StudentCard from './components/studentCard/StudentCard'
import './App.css'
import stdimage from './assets/image/girlimage.png'
const App = () => {
  const student = {
    image: stdimage,
    name: 'Sunitha',
    mother:'Anitha',
    father:"Subrahmanyam",
    age: 13,
    gender: 'Female',
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
