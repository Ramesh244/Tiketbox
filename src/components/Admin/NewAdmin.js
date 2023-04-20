import axios from 'axios'
import './admin.css'
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NewAdmin() {
  const [data1, setdata1] = useState([])
  const [note, setNote] = useState('')
  const [check, setCheck] = useState(false)
  const [id, setId] = useState('')
  const [username, setUserName] = useState(window.sessionStorage.getItem("user"))


  const info = useSelector((state) => state.display.data)
  console.log(info, "iam 25th line")
  // const [username, setUserName] = useState(info)
  // const [complete, setComplete] = useState([])
  // const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // getting data from api:
  const call=()=>{  
    axios.get("http://192.168.4.33:8050/api/ticket/")
    .then(response =>
      setdata1(response.data)
    
    )

  }
  
  useEffect(() => {
    call()
  }, [])

  const [idd, setidd] = useState()
  const [obj1, setobj1] = useState({})

  const handleComplete = (e1) => {
    console.log(e1.id);
    axios.patch("http://192.168.4.33:8050/api/ticket/" + e1.id + "/", {
      "id": e1.id,
      "Status": "completed"
    })
      .then(res => {
        console.log(res, "osman ")
        call()
        //   setapi(res.data)       
      })

  }
  const handleAdmin = (e) => {
    console.log(e);
    // const abc= e.id
    // console.log(abc);
    setId(e.id)

    setShow(true)
  }
  // console.log(obj1.id);

  const handleClick = (e) => {

    console.log("http://192.168.4.33:8050/api/ticket/" + id + "/", "Osman");
    // axios.patch("http://192.168.4.33:8050/api/ticket/" + id + "/", { "id": id, "Admin_comment": note })
    axios.patch("http://192.168.4.33:8050/api/admincomment/" + id + "/", { "id": id, "Admin_comment": note })
      .then(res => {
        console.log(res, "osman ")
        call() 
      })
      setNote("")
    setShow(false)
console.log(note);
  }


  const handlePending = (e) => {
    e.preventDefault();
    // axios.get("http://192.168.4.33:8050/api/ticket/").then(res => {
    //   setdata1(res.data)
      call()
    // })
    setCheck(true)
  }

  return (
    <div className="card">
      <div className='container-fluid'>
        <h2 className='color_text'>Welcome to admin page:{username}</h2>
        <div>
          <button class="btn btn-primary" onClick={handlePending}>Pending Request</button>
        </div>
        <div class="table_design mt-2">
          <Table striped bordered hover responsive="sm" size='sm'>
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
                {/* <th>complete</th> */}
                {/* <th>Add Comment</th> */}
                <th>Mgr_comment</th>
                <th>Admin_comment</th>

              </tr>
            </thead>
            <tbody>
              {data1.map((e, index) => (
                <tr>
                  <td>{e.user}</td>
                  <td>{e.ticket_no}</td>
                  <td>{e.Subject}</td>
                  <td>{e.Severity}</td>
                  <td>{e.Type}</td>
                  <td>{e.Report_To}</td>
                  <td>{e.Remarks}</td>
                  <td>{e.Status}</td>
                  <td>{e.request_raised_at}</td>
                  <td>{e.Mgr_comment}</td>
                  <td>{e.Admin_comment}</td>
                  

                  {/* <td ><button class="btn btn-outline-info" onClick={() => handleSubmit(e)}>Complete</button></td> */}
                  {/* <td ><button class="btn btn-outline-info" onClick={() => handleAdmin(e)}>Admin_comment</button></td> */}
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
                    <th>Status</th>
                    <th>request_raised_at</th>
                    <th>Complete</th>
                    <th>Add_comment</th>
                    {/* <th>Add_comment</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    data1.map((e, i) => {
                      return e.Status != "completed" ?
                        <tr>
                          <td>{e.user}</td>
                          <td>{e.ticket_no}</td>
                          <td>{e.Subject}</td>
                          <td>{e.Severity}</td>
                          <td>{e.Type}</td>
                          <td>{e.Report_To}</td>
                          <td>{e.Remarks}</td>
                          <td>{e.Status}</td>
                          <td>{e.request_raised_at}</td>
                          <td ><button class="btn btn-outline-success" onClick={() => handleComplete(e)}>Complete</button></td>
                          <td ><button class="btn btn-outline-info" onClick={() => handleAdmin(e)}>Admin_comment</button></td>
                        </tr>

                        : null
                    })
                  }
                </tbody>
              </Table>
              : null}
        </div>
        <div>
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}></input>
                <Button onClick={(e) => handleClick(e)} variant="primary" style={{marginLeft:"5px"}}>submit</Button>
              </Modal.Body>

            </Modal>
          </div>
        </div>

      </div>
    </div>

  )
}

export default NewAdmin
