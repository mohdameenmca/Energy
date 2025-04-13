import React, { useState } from 'react'
import './Common.css'
function Due(props) {
    const data= props.myDue
    
    const [due,setDue]=useState("No pending");
    console.log(data)
    // const [paymentinfo,setPaymentinfo]=useState(false);
    const apiURL = process.env.REACT_APP_API_URL;
   
    const paymentHandler=async(mybillNo)=>{
      try{
        const res = await fetch(`${apiURL}/approveDue/${mybillNo}`,{
          'method':'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body : JSON.stringify({
            billStatus:"Paid",
            billNo:mybillNo
          })
        })
        const data = res.json();
        if(data.success){
          console.log("Payment Success",data)
        }
        else{
          console.log("Payment failed",data)
        }
      }
      catch(e){
       console.log(e.message)
      }
    }
  return (
    <div className='due'>
        <p>Outstanding Payment Details</p>
        <ul>
        {
          data.map((due)=>{
       return(
        <li key={due.billNo} >
        {due.billNo}: The bill is due on {due.billDate}
        <button onClick={()=>paymentHandler(due.billNo)}>Payment</button>
      </li>
       )
         
        
          })
        }
        </ul>

       
   
    </div>
  )
}

export default Due