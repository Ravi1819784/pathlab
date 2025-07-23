import React from 'react'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'
const IPpatientview = () => {

const location=useLocation();
const user=location.state;


  return (
   <>
    <div className="main-op-patient-view">
<Sidebar/>
 <div className="op-container">
      <h2>IP Patient view</h2>
      <div className="op-details">

         <div className="label-group">
          <p><strong>Name</strong> :</p>
          <p>{user.name}</p>
        </div>
        <div className="label-group">
          <p><strong>Age</strong> :</p>
          <p>{user.Age}</p>
        </div>
        <div className="label-group">
          <p><strong>Address</strong> :</p>
          <p>{user.address}</p>
        </div>
        <div className="label-group">
          <p><strong>Gender</strong> :</p>
          <p>{user.male} {user.female}</p>
        </div>
        <div className="label-group">
          <p><strong>Blood group</strong> :</p>
          <p>{user.bg}</p>
        </div>


           <div className="label-group">
          <p><strong>Department</strong> :</p>
          <p>{user.Department}</p>
        </div>

        <div className="btn-row">
          <button className="history-btn">History</button>
          <button className="book-btn">Book Now</button>
        </div>
       
      </div>
    </div>
   </div>
   </>
  )
}

export default IPpatientview

