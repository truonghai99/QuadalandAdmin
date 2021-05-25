import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar"
import companyapi from '../../api/companyapi.js'

const AddCompany = () => {

    const MySwal = withReactContent(Swal)
    const history = useHistory();

    const [user, setUser] = useState({});

    useEffect(() => {
        // customerapi.getCustomerByUsername(username).then(res => setUser(res)).catch(err => console.log(err));
        // console.log(user);
    }, [])

    const setValue = (e) => {
        var temp = {}
        Object.assign(temp, user)
        temp[e.target.name] = e.target.value;
        setUser(temp);
    }

    const onRoleChange = e => {
        const rolename = e.target.value;
        const t = { ...user, role: rolename };
        setUser(t);
    }

    const addCompany = async (e) => {
        e.preventDefault();
        // console.log(user);
        // userapi.addUser(user);
        // const { full_name, address, phone, email} = user;
        // const data = {full_name, address, phone, email}
        companyapi.addCompany(user, addCompanySuccess, addCompanyError);
    }

    const addCompanySuccess = () => {
        Swal.fire(
            'Success!',
            'Added customer successfully.',
            'success'
        );
        history.goBack();
    }

    const addCompanyError = (err) => {
        Swal.fire(
            'Error!',
            err[0],
            'error'
        );
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
                            <h2 className="no-margin-bottom">Form Company</h2>
                        </div>
                    </header>
                    {/* Breadcrumb*/}
                    <div className="breadcrumb-holder container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/company">Company</Link></li>
                            <li className="breadcrumb-item active">Add Company</li>
                        </ul>
                    </div>
                    {/* Forms Section*/}
                    <section className="forms">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Form Elements */}
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center">
                                            <h3 className="h4">Descriptions</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" >
                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Username</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="text" name="username" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Fullname</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="text" name="full_name" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Phone</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="number" name="phone" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Address</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="text" name="address" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Email</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="email" name="email" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Facebook</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="facebook" name="facebook" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Instagram</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="instagram" name="instagram" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Twitter</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="twitter" name="twitter" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <div className="col-sm-4 offset-sm-3">
                                                        <button type="reset" className="btn btn-secondary" style={{ marginRight: 2 }}>Cancel</button>
                                                        <button type="submit" className="btn btn-primary" onClick={addCompany}>Save changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Page Footer*/}

                </div>
            </div>
        </>
    )
}

export default AddCompany;