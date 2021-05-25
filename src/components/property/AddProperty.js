import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import propertyapi from '../../api/propertyapi'
import SideBar from '../sideBar/SideBar.js';
import Header from "../header/Header";
import slugify from "slugify";
import {
    GoogleMap,
    LoadScript,
    Marker
} from '@react-google-maps/api';
import "./style.css"

const AddProperty = () => {
    const MySwal = withReactContent(Swal)
    const history = useHistory();
    const [property, setProperty] = useState({});
    const [coordinate, setCoordinate] = useState({});

    useEffect(() => {
    }, [])

    const setValue = (e) => {
        var temp = {};
        const { value, name } = e.target;
        Object.assign(temp, property)
        // temp[e.target.name] = e.target.value;
        temp[name] = value;
        if (name === 'title') {
            temp.slug = slugify(value)
        }
        setProperty(temp);
        // const data = {...temp.details, {co}}
    }

    const setDetails = e => {
        var temp = {}
        const {name} = e.target;
        Object.assign(temp, property);
        temp.details[e.target.name] = e.target.value;
        if (name == 'title') {
            temp.slug = slugify(e.target.toLowerCase())
        }
        setProperty(temp)
    }

    const onSaleMethodsChange = e => {
        const sale_methodname = e.target.value;
        const t = { ...property, sale_method: sale_methodname };
        setProperty(t);

    }

    const addProperty = async (e) => {
        e.preventDefault();
        var { slug, title, description, address, area, price, sale_method } = property;
        //var coordinate = { latitude: coordinate.lat.toString(), longitude: coordinate.lng.toString() };
        area = parseInt(area);
        price = parseInt(price);
        const { lat, lng } = coordinate;
        const latitude = '' + lat;
        const longitude = '' + lng;
        const data = { slug, sale_method, details: { title, description, area, price, coordinate: {
            latitude, longitude
        } } }
        //console.log("new", newProperty);
        console.log(data);
        propertyapi.addProperty(data, addPropertySuccess, addPropertyError);
    }

    const addPropertySuccess = () => {
        Swal.fire(
            'Success!',
            'Added property successfully.',
            'success'
        );
        history.goBack();
    }

    const addPropertyError = (err) => {
        Swal.fire(
            'Error!',
            err[0],
            'error'
        );
    }

    const onMapClick = e => {
        console.log(e);
        setCoordinate({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    }

    return (
        <>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />
                <div className="content-inner">
                    {/*Page Header*/}
                    <header className="page-header">
                        <div className="container-fluid">
                            <h2 className="no-margin-bottom">Form Add Property</h2>
                        </div>
                    </header>
                    {/* Breadcrumb*/}
                    <div className="breadcrumb-holder container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/property">Property</Link></li>
                            <li className="breadcrumb-item active">Add Property</li>
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
                                                    <label className="col-sm-3 form-control-label">Slug</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="text" name="slug" className="form-control" value={property.slug} />
                                                    </div>
                                                </div>
                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Title</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="text" name="title" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Description</label>
                                                    <div className="col-sm-3">
                                                        <textarea onChange={setValue} type="text" name="description" className="form-control" />
                                                    </div>
                                                </div>
                                                
                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Area</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="number" name="area" className="form-control area-input" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Price</label>
                                                    <div className="col-sm-3">
                                                        <input onChange={setValue} type="price" name="price" className="form-control area-input" />
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Coordinate</label>

                                                    <div className="col-sm-3">
                                                        <LoadScript
                                                            googleMapsApiKey="AIzaSyD3f7zKjWfHwPEddYaeTIqivDYBXOH87Mk"
                                                        >
                                                            <GoogleMap
                                                                mapContainerStyle={{
                                                                    width: '400px',
                                                                    height: '400px'
                                                                }}
                                                                center={{
                                                                    lat: 12.215012,
                                                                    lng: -42.1293123
                                                                }}
                                                                zoom={10}
                                                                onDblClick={onMapClick}
                                                            >
                                                                { /* Child components, such as markers, info windows, etc. */}
                                                                <>
                                                                    <Marker
                                                                        position={
                                                                            coordinate
                                                                        } />
                                                                </>
                                                            </GoogleMap>
                                                        </LoadScript>
                                                    </div>
                                                </div>
                                                <div className="line" />
                                                <div className="form-group row">
                                                    <label className="col-sm-3 form-control-label">Sale Methods</label>
                                                    <div className="col-sm-9">
                                                        <select onChange={onSaleMethodsChange}>
                                                            <option value="for_rent">For Rent</option>
                                                            <option value="for_sale">For Sale</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="line" />
                                                <div className="form-group row">
                                                    <div className="col-sm-4 offset-sm-3">
                                                        <button type="reset" className="btn btn-secondary" style={{ marginRight: 2 }}>Cancel</button>
                                                        <button type="submit" className="btn btn-primary" onClick={addProperty}>Save changes</button>
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
            </div>

        </>

    )

}
// function AddProperty(props) {
//     return (
//         <div className="content-inner">
//             {/* Page Header*/}
//             <div className='sweet-loading'>

//             </div>
//             <header className="page-header">
//                 <div className="container-fluid">
//                     <h2 className="no-margin-bottom">Forms Producer</h2>
//                 </div>
//             </header>
//             {/* Breadcrumb*/}
//             <div className="breadcrumb-holder container-fluid">
//                 <ul className="breadcrumb">
//                     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
//                     <li className="breadcrumb-item active">Producer</li>
//                 </ul>
//             </div>
//             {/* Forms Section*/}
//             <section className="forms">
//                 <div className="container-fluid">
//                     <div className="row">
//                         {/* Form Elements */}
//                         <div className="col-lg-12">
//                             <div className="card">
//                                 <div className="card-header d-flex align-items-center">
//                                     <h3 className="h4">Description</h3>
//                                 </div>
//                                 <div className="card-body">
//                                     <form className="form-horizontal"  >
//                                         <div className="form-group row">
//                                             <label className="col-sm-3 form-control-label">Name Producer</label>
//                                             <div className="col-sm-9">
//                                                 <input name="name" type="text" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <label className="col-sm-3 form-control-label">Description</label>
//                                             <div className="col-sm-9">
//                                                 <input name="desc" type="text" placeholder="Note" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <label className="col-sm-3 form-control-label">Address</label>
//                                             <div className="col-sm-9">
//                                                 <input name="address" type="text" placeholder="Note" className="form-control" />
//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <label className="col-sm-3 form-control-label">Categories</label>
//                                             <div className="col-sm-9">

//                                                 <div className="i-checks" style={{ display: 'inline-block', paddingRight: 35 }} >
//                                                     <input name="categoryId" type="radio" className="radio-template" />

//                                                     <label>lll</label>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <label htmlFor="fileInput" className="col-sm-3 form-control-label">Image</label>
//                                             <div className="col-sm-9">
//                                                 <input type="file" className="form-control-file" />
//                                                 <div className="fix-cart">
//                                                     <img src={'http://via.placeholder.com/400x300'} id="output" className="fix-img" alt="avatar" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <label className="col-sm-3 form-control-label">Active</label>
//                                             <div className="col-sm-9">
//                                                 <div className="i-checks">
//                                                     <input type="checkbox"
//                                                         name="isActive"
//                                                         className="checkbox-template" />
//                                                     <label htmlFor="checkboxCustom1"></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="line" />
//                                         <div className="form-group row">
//                                             <div className="col-sm-4 offset-sm-3">
//                                                 <button type="reset" className="btn btn-secondary" style={{ marginRight: 2 }}>Cancel</button>
//                                                 <button type="submit" className="btn btn-primary">Save changes</button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

export default AddProperty;