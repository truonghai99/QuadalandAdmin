import React from 'react';

function ActionRole(props) {
    return (
        <div className="content-inner">
            {/* Page Header*/}
            <header className="page-header">
                <div className="container-fluid">
                    <h2 className="no-margin-bottom">Forms Role</h2>
                </div>
            </header>
            {/* Breadcrumb*/}
            <div className="breadcrumb-holder container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Role</li>
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
                                    <h3 className="h4">Description</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-horizontal">
                                        <div className="form-group row">
                                            <label className="col-sm-3 form-control-label">Name Role</label>
                                            <div className="col-sm-9">
                                                <input name="name" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="form-group row">
                                            <label className="col-sm-3 form-control-label">Description</label>
                                            <div className="col-sm-9">
                                                <input name="desc" type="text" placeholder="Note" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="form-group row">
                                            <label className="col-sm-3 form-control-label">Active</label>
                                            <div className="col-sm-9">
                                                <div className="i-checks">
                                                    <input type="checkbox"
                                                        name="defaultActive"
                                                        className="checkbox-template" />
                                                    <label htmlFor="checkboxCustom1"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="form-group row">
                                            <div className="col-sm-4 offset-sm-3">
                                                <button type="reset" className="btn btn-secondary" style={{ marginRight: 2 }}>Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ActionRole;