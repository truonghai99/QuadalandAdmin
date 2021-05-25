import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="content-inner">
            {/* Page Header*/}
            <header className="page-header">
                <div className="container-fluid">
                    <h2 className="no-margin-bottom">Contact</h2>
                </div>
            </header>
            {/* Breadcrumb*/}
            <div className="breadcrumb-holder container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">contacts</li>
                </ul>
            </div>
            <section className="tables pt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header d-flex">
                                    <h3 className="h4">Data Table contacts</h3>
                                </div>
                                <form
                                    className="form-inline md-form form-sm mt-0"
                                    style={{
                                        justifyContent: "flex-end",
                                        paddingTop: 5,
                                        paddingRight: 20
                                    }}
                                >
                                    <div>
                                        <button style={{ border: 0, background: "white" }}>
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                        <input
                                            name="searchText"
                                            value={searchText}
                                            className="form-control form-control-sm ml-3 w-75"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                    </div>
                                    {/* <Link to="/contacts/add" className="btn btn-primary">
                      Create
                    </Link> */}
                                </form>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Number</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Content</th>
                                                    <th>CreatedAt</th>
                                                    <th style={{ textAlign: "center" }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr >
                                                    <th scope="row">1</th>
                                                    <td>a</td>
                                                    <td>b</td>
                                                    <td>c</td>
                                                    <td> <p className="text-truncate" style={{ width: 300 }}>
                                                        d
                                                                </p>
                                                    </td>
                                                    <td>e</td>
                                                    <td style={{ textAlign: "center" }}>
                                                        <div>
                                                            {/* <span className="fix-action">
                                          <Link to={`/contacts/edit/${item.id}`}>
                                            {" "}
                                            <i className="fa fa-edit"></i>
                                          </Link>
                                        </span> */}
                                                            <span title='Delete'

                                                                className="fix-action"
                                                            >
                                                                <Link to="#">
                                                                    {" "}
                                                                    <i
                                                                        className="fa fa-trash"
                                                                        style={{ color: "#ff00008f" }}
                                                                    ></i>
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <nav
                                aria-label="Page navigation example"
                                style={{ float: "right" }}
                            >
                                <ul className="pagination">
                                    <Paginator
                                        pageSize={10}
                                        totalElements={total}
                                        onPageChangeCallback={e => {
                                            this.pageChange(e);
                                        }}
                                    />
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;