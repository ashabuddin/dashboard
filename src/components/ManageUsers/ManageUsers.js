//import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaTrash,FaEdit,FaUsers, FaUserCog, FaDownload, FaPlus, FaSearch, FaSquarespace, FaCircleNotch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const users = [
  {
    id: 1111,
    name: 'Arif Uddin',
    userName: 'Arif Uddin',
    email: 'ashab@gmail.com',
    view: 'view detail',
    date: '7:00 PM 20 sep 2021'
  },
  {
    id: 2222,
    name: 'Harun Rashid',
    userName: 'Harun Rashid',
    email: 'ashab@gmail.com',
    view: 'view detail',
    date: '7:00 PM 20 sep 2021'
  },
  {
    id: 3333,
    name: 'Ashab Uddin',
    userName: 'Ashab Uddin',
    email: 'ashab@gmail.com',
    view: 'view detail',
    date: '7:00 PM 20 sep 2021'
  },
  {
    id: 4444,
    name: 'Mahabub Islam',
    userName: 'Mahabub Islam',
    email: 'ashab@gmail.com',
    view: 'view detail',
    date: '7:00 PM 20 sep 2021'
  },
  {
    id: 5555,
    name: 'Asif Aslam',
    userName: 'ASif Aslam',
    email: 'ashab@gmail.com',
    view: 'view detail',
    date: '7:00 PM 20 sep 2021'
  },
]

const ManageUsers = () => {

  return (
    <div className="container-fluid">
      <div className="row">

        <div className=" px-2 py-3 bg-light">
         
        <div className="d-flex justify-content-between">
                    <div>
                    <h5 style={{color:'#006435'}}>Dashboard // Admin</h5>
                    <p style={{fontSize:'12px', color:'gray'}}>Add, Edit, Delete Users</p>
                    </div>
                    <div>
                        <button style={{backgroundColor:'#006854', color:'white'}} className="btn">Dashboard</button>
                    </div>
                </div>

                <h5>Summary</h5>

                <div className="d-flex justify-content-between">

                    <div className="d-flex summary-option">
                        <div className="me-3">
                            <div className="icon">
                          <FaUserCog/>
                          </div>
                        </div>
                        <div>
                          <h6>Admins</h6>
                          <p>5 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaUsers/>
                        </div>
                        </div>
                        <div>
                          <h6>Users</h6>
                          <p>541 Users</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaSquarespace/>
                        </div>
                        </div>
                        <div>
                          <h6>Gropus</h6>
                          <p>55 Groups</p>
                        </div>
                    </div>

                    <div className="d-flex summary-option">
                        <div className="me-3">
                        <div className="icon">
                          <FaCircleNotch/>
                        </div>
                        </div>
                        <div>
                          <h6>Roles</h6>
                          <p>25 Roles</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-4 justify-content-between">
                    <div>
                    <button className="download-btn">
                    <i><FaDownload/></i>
                        Donwload CSV
                    </button>

                    <button className="download-btn">
                        <i><FaDownload/></i>
                        Donwload PDF
                    </button>
                    </div>

                    <button className="add-btn">
                    
                    <i><FaPlus/></i>
                        Add User
                    </button>
                </div>

                <div className="mt-5 mb-3 w-50 ms-auto">

                  <div className="form-group has-search">
                   <span className="form-control-feedback"><FaSearch/></span>
                     <input type="text" style={{backgroundColor:"#E6E6E7"}} className="form-control" placeholder="Search"/>
                </div>
                </div>

          <Table striped bordered hover>
            <thead className="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Crunte Date</th>
                <th scope="col">User Datils</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>

                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.date}</td>
                  <td>{user.view}</td>

                  <td>

                    <Link
                      className="btn btn-outline-primary mr-2"
                    ><FaEdit/>
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                    ><FaTrash/>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;