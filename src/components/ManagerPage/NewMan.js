import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import './Manager.css'

function NewMan() {

  const [accept, setAccept] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [chek, setChek] = useState(false)
  const [reject, setreject] = useState('rejected')
  const [data, setData] = useState([])
  const [id, setId] = useState('')
   const [note, setNote] = useState('')
  const info = useSelector((state) => state.display.data)
  console.log(info,"iam 20th line")
  // const [username, setUserName] = useState(info)
  const { state } = useLocation()
  const [check, setCheck] = useState(false)
  const [username, setUserName] = useState(window.sessionStorage.getItem("user"))

  //getting data from api:
  useEffect(() => {
    axios.get("http://192.168.4.33:8050/api/ticket/").then(res =>{
      
    
      let arr=[]
        res.data.map(ke=>{
          if(ke.user==username){
            arr.push(ke)
          }
          if(ke.Report_To==username){
            arr.push(ke)
          }
    })
    console.log(data);
    setData(arr)
    // setData(res.data)
    console.log(res.data, "@@@@@@@@@@@@@@@@");
  })
  }, [data])
  
  const call=()=>{  
    // axios.get("http://192.168.4.33:8050/api/ticket/")
    // .then(response =>
    //   setData(response.data)
    
    // )

  }
  
  useEffect(() => {
    call()
  }, [])

  const handleManager=(e)=>{
    console.log(e);
    setId(e.id)
    setShow(true)
    call();
  }

  const handleSubmit = (e) => {
    console.log("http://192.168.4.33:8050/api/ticket/" + id + "/", "Osman");
    axios.patch("http://192.168.4.33:8050/api/managercomment/" + id + "/", { "id": id, "Mgr_comment": note })
      .then(res => {
        console.log(res, "osman ")
        call() 
      })
      setNote("")
    setShow(false)
console.log(note);
  }

  const handleAccept = (e1) => {
    console.log(e1.id);
    axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
      "id": e1.id,
      "Status": "accepted"
    })
      .then(res => {
        console.log(res, "osman ")
        //   setapi(res.data)       
      })
  }
  
  const handleReject = (e1) => {
    axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
      "id": e1.id,
      "Status": "rejected"
    })
      .then(res => {
        console.log(res, "osman ")
        //   setapi(res.data)       
      })

  }
  
  const handlePending = (e) => {
    e.preventDefault();
    setCheck(true)
  }
  // console.log(pending,"im from line 75");
  return (
    <div className="card">
      <div className="container-fluid" >
        <h2 className='color_text1'>Welcome manager page: {username}</h2>
        <div>
          <button class="btn btn-primary" onClick={handlePending}>Pending Request</button>
        </div>
        <div class="table_design mt-2">
          <Table striped bordered hover responsive="sm" size="sm">
            <thead>
              <tr>
                <th>user</th>
                <th>Ticket_no</th>
                <th>Subject</th>
                <th>Severity</th>
                <th>Type</th>
                <th>Report_To</th>
                <th>Remarks</th>
                {/* <th>Accept/Reject</th> */}
                <th>Status</th>
                <th>request_raised_at</th>
                 
                <th>Mgr_comment</th>
                <th>Admin_comment</th>
                


              </tr>
            </thead>



            <tbody>
              {data.map((e, ind) => (
                <tr >
                  <td>{e.user}</td>
                  <td>{e.ticket_no}</td>
                  <td>{e.Subject}</td>
                  <td>{e.Severity}</td>
                  <td>{e.Type}</td>
                  <td>{e.Report_To}</td>
                  <td>{e.Remarks}</td>
                   {/* { <td>

                  <button type="button" class="btn btn-outline-primary" onClick={() => handleAccept(e)}>accepted</button>
                  <button type="button" class="btn btn-outline-danger" onClick={() => handleReject(e)}>rejected</button>
                </td> }
                  {
                    chek ?
                      <td>{accept}</td>
                      &&
                      <td className="reject_color">{reject}</td>
                      : */}
                      <td>{e.Status}</td>

                  {/* }  */}
                  <td>{e.request_raised_at}</td> 
                  <td>{e.Mgr_comment}</td> 
                  <td>{e.Admin_comment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr className='hr_line mt-2' />
        </div>


        <h4 className='reject_color mt-3'>Pending Requests:</h4>
        <div className=" mt-3">
          {
            check ?

              <Table striped bordered hover responsive="sm" >
                <thead>
                  <tr>
                    <th>user</th>
                    <th>Ticket_no</th>
                    <th>Subject</th>
                    <th>Severity</th>
                    <th>Type</th>
                    <th>Report_To</th>
                    <th>Remarks</th>
                    <th>Accept/Reject</th>
                    <th>Status</th>
                    <th>request_raised_at</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((e, i) => {
                      return e.Status === "raised" ?
                        <tr>
                          <td>{e.user}</td>
                          <td>{e.ticket_no}</td>
                          <td>{e.Subject}</td>
                          <td>{e.Severity}</td>
                          <td>{e.Type}</td>
                          <td>{e.Report_To}</td>
                          <td>{e.Remarks}</td>
                          <td>
                            <button type="button" class="btn btn-outline-primary" onClick={() => handleAccept(e)}>accepted</button>
                            <button type="button" class="btn btn-outline-danger" onClick={() => handleReject(e)}>rejected</button>
                            
                          </td>
                          {
                            chek ?
                              <td>{accept}</td>
                              &&
                              <td className="reject_color">{reject}</td>
                              :
                              <td>{e.Status}</td>

                          }
                          <td>{e.request_raised_at}</td>
                          <td><button type="button" class="btn btn-outline-danger" onClick={() =>  handleManager(e)}>Manager_commnet</button></td>
                        </tr>
                        : null
                    })
                  }
                </tbody>
              </Table>
              : null}
        </div>
      </div>
      <div>
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}></input>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" style={{marginLeft:"5px"}}>Submit</Button>
              </Modal.Body>

            </Modal>
          </div>
        </div>
    </div>
  )
}

export default NewMan








