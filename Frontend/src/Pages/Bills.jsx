import React, { useEffect, useState } from 'react'
import Card from '../Components/Cards/Card'
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Due from './Due';


function Bills() {
 const [filter,setFilter]=useState(false);

 const [showBill,SetShowBill]=useState([])
 const user = useSelector(selectUser);
 
 const printInvoice=(billNo,energyUsage,billDate,billStatus)=>{

  const doc = new jsPDF();

  doc.text(`Bill No ${billNo} \n Date : ${billDate} \n Payment Status : $ ${billStatus} \n Total Energy Usage : ${energyUsage}`,10,20) 
  
  doc.save(`Energy_Invoice_${billDate}.pdf`)
 }




//API Intreagration
const userEmail = user.email

const apiUrl = process.env.REACT_APP_API_URL;

const pendingDues = "Pending" ? showBill.filter(bill => bill.billStatus.match("Pending")):"No pending dues";
const PaidTransactions = "Paid" ? showBill.filter(bill => bill.billStatus.match("Paid")):"No Trasactions";

useEffect(()=>{
  fetch(apiUrl+'/ShowPreviousBills/'+userEmail)
  .then(res=>res.json())
  .then(res=>SetShowBill(res.previousBills
    ))
},[userEmail,apiUrl])


const [keyword,setKeyword] = useState("");


// const filteredBills = keyword
//     ? PaidTransactions.filter(bill => bill.billNo.toLowerCase().includes(keyword.toLowerCase())) || pendingDues.filter(bill => bill.billNo.toLowerCase().includes(keyword.toLowerCase()))
//     : PaidTransactions || pendingDues;

const filteredBills = keyword
    ? [
        ...PaidTransactions.filter(bill => bill.billNo.toLowerCase().includes(keyword.toLowerCase())),
        ...pendingDues.filter(bill => bill.billNo.toLowerCase().includes(keyword.toLowerCase()))
      ]
    : [...PaidTransactions];


const searchHandler=(event)=>{
 setKeyword(event.target.value);
}
  return (
    <div className='MainPage'>
      <div className='header_section'>
      <h4>My Previous Bills </h4>
      <input type='text' placeholder='search Bill No' className="searchbox" value={keyword} onChange={searchHandler}/>
      </div>
   
    <ul className='card_bills'>
     
    
    </ul>

      <ul className='card_bills'>
    
      {filteredBills.length > 0 ? filteredBills.map((myList) => (
          <li key={myList.billNo}>
            Bill No - {myList.billNo} Generated on {myList.billDate}
              {
              myList.billStatus === "Paid" &&
            <button onClick={() => printInvoice(myList.billNo, myList.energyUsage, myList.billDate, myList.billStatus)}  >
              Download
          </button>
           
            }

           
          </li>
        )) : <li>No matching bills found</li>}        
      </ul>
      <Due myDue={pendingDues}/>
    
    </div>
  )
}

export default Bills