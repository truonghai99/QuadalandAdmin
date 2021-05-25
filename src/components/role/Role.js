import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar"
import roleapi from "../../api/roleapi";

function Role(props) {

    const [roleList, setRoleList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log('rerender');
        roleapi.getAll(successCallback, failedCallback);
    }, []);

    const successCallback = (res) => {
        setRoleList(res)
    }

    const failedCallback = (err) => {
        console.log(err);
    }

    return (
        <>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />
                <div className="content-inner">
                    {/* Page Header*/}
                    <header className="page-header">
                        <div className="container-fluid">
                            <h2 className="no-margin-bottom">Roles</h2>
                        </div>
                    </header>
                    {/* Breadcrumb*/}
                    <div className="breadcrumb-holder container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Roles</li>
                        </ul>
                    </div>
                    <section className="tables pt-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center">
                                            <h3 className="h4">Data Table Roles</h3>
                                        </div>
                                        <form
                                            className="form-inline md-form form-sm mt-0" style={{ justifyContent: 'flex-end', paddingTop: 5, paddingRight: 20 }}>
                                            {/* <div>
                                                <button style={{ border: 0, background: 'white' }}><i className="fa fa-search" aria-hidden="true"></i></button>
                                                <input name="searchText"
                                                    value={searchText} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                                    aria-label="Search" />
                                            </div> */}
                                            {/* <Link to="/roles/add" className="btn btn-primary" >Create</Link> */}
                                        </form>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Number</th>
                                                            <th>Name Role</th>
                                                            {/* <th>Description</th> */}
                                                            {/* <th style={{ textAlign: "center" }}>Active</th>
                                                            <th style={{ textAlign: "center" }}>Action</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {roleList ? roleList.map((item, index) => (
                                                            <tr >

                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item.name}</td>
                                                                {/* <td>b</td> */}
                                                                {/* <td style={{ textAlign: "center" }}>
                                                                    <div className="i-checks">
                                                                        <input type="checkbox" checked={false} className="checkbox-template" />
                                                                    </div>
                                                                </td> */}
                                                                {/* <td style={{ textAlign: "center" }}>
                                                                    <div>
                                                                        <span title='Edit' className="fix-action"><Link to={`/roles/edit/1`}> <i className="fa fa-edit"></i></Link></span>
                                                                        <span title='Delete' className="fix-action"><Link to="#"> <i className="fa fa-trash" style={{ color: '#ff00008f' }}></i></Link></span>
                                                                    </div>
                                                                </td> */}
                                                            </tr>
                                                        )) : <h1>No items</h1>}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <nav aria-label="Page navigation example" style={{ float: "right" }}>
                  <ul className="pagination">
                  <Paginator
                        pageSize={10}
                        totalElements={total}
                        onPageChangeCallback={(e) => {this.pageChange(e)}}
                      />
                  </ul>
                </nav> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Page Footer*/}
                </div>
            </div>
        </>
    );
}

export default Role;