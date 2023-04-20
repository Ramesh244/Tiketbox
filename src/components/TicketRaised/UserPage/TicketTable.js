import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './TicketTable.css'


function TicketTable() {

    const { state } = useLocation();
    console.log(state,"@@@@@@@@@@");
    // const{details}=location.state
    // console.log(details)
        // console.log(data1);
        // const handleclick=()=>{
        //     return(
        //         <Redirect  to="/home" />
        //     )
        // }
    return (
        <div class="table-wrapper" >
            <Table class="fl-table">
                <thead>
                    <tr>
                        <th>user</th>
                        <th>Ticket_no</th>
                        <th>Subject</th>
                        <th>Severity</th>
                        <th>Type</th>
                        <th>Report To</th>
                        <th>Remarks</th>
                        <th>Status</th>
                        <th>Request_raised_at</th>
                       
                        <th>Mgr_comment</th>
                        <th>Admin_comment</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((e)=>(
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
                       </tr> 
                    ))}
                </tbody>
            </Table>
            <Link to="/userpage"><span><button class="btn btn-outline-success" id="abc">Back</button></span></Link>
        </div>
    )
}

export default TicketTable


