import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { exportExcel } from '../../util/exportExcel'
import customerapi from '../../api/customerapi.js'
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar"
const MySwal = withReactContent(Swal)
let token;
function Customer(props) {

    const [customers, setCustomers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [per_page, setPer_page] = useState(10);

    useEffect(() => {
        const params = {
            page,
            per_page
        }
        customerapi.getAll(params).then(res => {
            setCustomers(res.result)
            setTotal(res.count);
        }).catch(err => console.log(err))

    }, [page, per_page])

    const handleRemove = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.value) {
                await this.props.delete_category(id, token);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const changeItemPerPage = e => {
        setPage(1);
        setPer_page(e.target.value)

    }


    // const downloadExcel = () => {
    //     const key = 'products'
    //     exportExcel(key)
    // }

    return (
        <>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />
                <div className="content-inner">
                    {/* Page Header*/}
                    <header className="page-header">
                        <div className="container-fluid">
                            <h2 className="no-margin-bottom">Customer</h2>
                        </div>
                    </header>
                    {/* Breadcrumb*/}
                    <div className="breadcrumb-holder container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Customer</li>
                        </ul>
                    </div>
                    <section className="tables pt-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center">
                                            <h3 className="h4">Data Table Customer</h3>
                                            <button onClick={() => this.downloadExcel()} style={{ border: 0, background: "white" }}> <i className="fa fa-file-excel-o"
                                                style={{ fontSize: 18, color: '#1d7044' }}> Excel</i></button>
                                        </div>
                                        <form
                                            className="form-inline md-form form-sm mt-0" style={{ justifyContent: 'flex-end', paddingTop: 5, paddingRight: 20 }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <select onChange={changeItemPerPage}>
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                                <input
                                                    name="searchText"
                                                    value={searchText}
                                                    className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                                    aria-label="Search" />
                                            </div>
                                            <Link to="/customers/add" className="btn btn-primary" > Create</Link>
                                        </form>
                                        <div className="card-body">
                                            <div className="table-responsive ">
                                                <table className="table table-hover table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Username</th>
                                                            <th>Fullname</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Address</th>
                                                            <th>Created at</th>
                                                            <th>Updated at</th>
                                                            <th>Deleted at</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {customers ?
                                                            customers.map((item, index) => (
                                                                <tr>
                                                                    <th scope="row">{(per_page * (page - 1)) + index + 1}</th>
                                                                    <td>{item.user}</td>
                                                                    <td>{item.full_name}</td>
                                                                    <td>{item.email}</td>
                                                                    <td>{item.phone}</td>
                                                                    <td>{item.address}</td>
                                                                    <td>{item.created_at ? new Date(item.created_at).toDateString() : ''}</td>
                                                                    <td>{item.updated_at ? new Date(item.updated_at).toDateString() : ''}</td>
                                                                    <td>{item.deleted_at ? new Date(item.deleted_at).toDateString() : ''}</td>
                                                                    <td style={{ textAlign: "center" }}>
                                                                        <div>
                                                                            {!item.deleted_at ?
                                                                                < span title='Edit' className="fix-action"><Link to={`/customers/edit/${item.user}`}> <i className="fa fa-edit"></i></Link></span> : ''}
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )) : null}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    {Array.from({ length: Math.floor(total / per_page) + 1 }).map((item, index) => (
                                        <li class={page == index + 1 ? "page-item active" : "page-item"}>
                                            <a class="page-link" onClick={() => setPage(index + 1)}>{index + 1}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </section>
                    {/* Page Footer*/}
                    {/* <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            {Array.from({ length: Math.floor(total / per_page) + 1 }).map((item, index) => (
                                <li class={page == index + 1 ? "page-item active" : "page-item"}>
                                    <a class="page-link" onClick={() => setPage(index + 1)}>{index + 1}</a>
                                </li>
                            ))}
                        </ul>
                    </nav> */}
                </div >
            </div>
        </>
    );
}

export default Customer;