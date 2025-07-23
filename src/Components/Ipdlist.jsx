import React from 'react'
import Sidebar from './Sidebar'
import {Link,useNavigate} from "react-router-dom"
import Table from 'react-bootstrap/Table';
import { RiFilterLine } from "react-icons/ri";
const Ipdlist = ({ap1,setEdit}) => {

  const navigate=useNavigate();

  const next=(user)=>{

    navigate("/ippatientview",{state:user});
  }

  return (
   <> <div className="main-opdList">
    <Sidebar/>
    <div className="right-list">
    <div className="right-list-nav">

        <div className="filter"><h2>filter</h2> <RiFilterLine />
</div>
 <h2 style={{color:"rgba(12,12,12)",letterSpacing:"4px"}}>I P D</h2>
      
        <div className="search-listbar"> <div className="search-list"><input type="search" /></div>
    <button className='search-btn'>search</button>
        </div>
        
    </div>
    <div className="list-form"> <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Date</th>
            <th>Phone</th>
              <th>Gender</th>
                       <th>Department</th>
                      <th>Patient View</th>

        </tr>
      </thead>
      <tbody>

       {ap1.map((items,index)=><>{ <tr key={index}>
          <td>{items.name}</td>
          <td>{items.Age}</td>
          <td>{items.date}</td>
           <td>{items.phone}</td>
            <td>{items.male} {items.female}</td> 
                    <td>{items.Department}</td>
               <td><button className='btn-view' onClick={()=>next(items)}>View</button></td>
               <Link to="/registration-ipd"> <button onClick={()=>setEdit(items)}>Edit</button></Link>
              
        </tr>}</>)}
      </tbody>
    </Table></div>
    </div>
    </div>
      </>
  )
}

export default Ipdlist
