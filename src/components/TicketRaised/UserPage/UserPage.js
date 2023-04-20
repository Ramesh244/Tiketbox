import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
// import TicketRaisedForm from '../TicketRaisedForm';
import Table from 'react-bootstrap/Table';
import './UserPage.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";



function UserPage() {

  const [show, setShow] = useState(false)

  const [data, setdata] = useState([]);
  const [arr, setArr] = useState([])
  const navigate = useNavigate();
  const info = useSelector((state) => state.display.data)
  console.log(info, "iam 25th line")
  const [username, setUserName] = useState(window.sessionStorage.getItem("user"))



  useEffect(() => {
    axios.get('http://192.168.4.33:8050/api/ticket/')
      .then(res => {
        let arr=[]
        res.data.map(ke=>{
          if(ke.user==username){
            arr.push(ke)
          }
          
        })
        setdata(arr)
        console.log(res.data, "@@@@@@@@@@@@@@@@");
      })
  }, [])
  const handleClick = (e) => {
    setShow(!show)
  };

  const handleTicket = (e) => {
    console.log(e);
    if (arr.indexOf(e) === -1) {
      arr.push(e)

      let b = [...arr]
      console.log(b, "############");
      setArr(b)
      navigate('/TicketTable', { state: arr });
    }

  }
  return (
    <div className="card">
      <div className='container-fluid'>
        <span ><h1 className='heading'>Welcome:{username}</h1></span>
        <Link to='/RaiseTicket'><button type="submit" className='btn btn-primary py-2 px-4 mt-2' id='ticket' onClick={() => handleClick}>Raise Your Ticket</button></Link>
        <div>
          <h4 className='Ticket_info px-3 mt-2'>Ticket Information</h4>

          {/* {data.map((e) => (
          
          <ul>
            <Link to='/TicketTable' state={{ details: arr }} >
              <li onClick={() => handleTicket(e)}>{e.ticket_no}</li>
            </Link>
            <li >{e.Remarks}</li>
          </ul>

         
        ))} */}
       
            <Table striped bordered hover responsive="sm" size="sm">
              <thead>
                <tr>
                <th>Sr.No</th>
                  <th>Ticket_No</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((e, i) => (
                    <tr>
                      <th>{i+1}</th>
                      <td  className="ticket_color" onClick={() => handleTicket(e)} >{e.ticket_no}</td>
                      <td>{e.Remarks}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            {/* <Table striped bordered hover>
              <thead>
                <tr>
                  <th>user</th>
                  <th>Ticket_no</th>
                  <th>Subject</th>
                  <th>Severity</th>
                  <th>Type</th>
                  <th>Manager</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th>Request_raised_at</th>
                  <th>Comment</th>
                  
                </tr>
              </thead>
              <tbody>
            {  data1.map((e, i) => (
                <tr>
                <td>{i+1}</td>
                  <td>{e.ticket_no}</td>
                  <td>{e.Subject}</td>
                  <td>{e.Severity}</td>
                  <td>{e.Type}</td>
                  <td>{e.Manager}</td>
                  <td>{e.Remarks}</td>
                  <td>{e.Status}</td>
                  <td>{e.request_raised_at}</td>
                  <td>None</td>
                </tr>
                  ))

                }
              </tbody>
            </Table> */}
          </div>
        </div>
      </div>
  
  )
}


export default UserPage
