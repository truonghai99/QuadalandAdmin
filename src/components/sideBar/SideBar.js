import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <nav className="side-navbar">
            {/* Sidebar Header*/}
            <div className="sidebar-header d-flex align-items-center">
                {/* <div className="avatar"><img src={newUser && newUser.avatar ? newUser.avatar : 'https://i.ibb.co/NCdx7FF/avatar-Default.png'} alt="notfound" className="img-fluid rounded-circle" /></div>
          <div className="title">
            <h1 className="h4">{newUser && newUser.name ? newUser.name : null}</h1>
            <p><b style={{fontWeight: 600}}>{newUser ? newUser.role.nameRole : null}</b></p>
          </div> */}
            </div>
            {/* Sidebar Navidation Menus*/}
            <span className="heading">Main</span>
            {/* {(nameRole === 'superadmin' || nameRole === 'admin') ? */}
            <ul className="list-unstyled">
                <li><Link to="/"> <i className="icon-home" />Home </Link></li>
                <li><Link to="/customer"> <i className="icon-interface-windows" />Customer</Link></li>
                <li><Link to="/property"> <i className="icon icon-website" />Property</Link></li>
                <li><Link to="/company"> <i className="icon icon-list-1" />Company</Link></li>
                <li><Link to="/users"> <i className="icon icon-user" />Users</Link></li>
                <li><Link to="/roles"> <i className="icon icon-bars" />Roles</Link></li>
                <li><Link to="/propertysalemethods"> <i className="icon icon-bars" />Sale Method</Link></li>
                {/* <li><Link to="/propertysalemethods"> <i className="icon icon-bars" />Property Sale Methods</Link></li> */}
                <li> <Link to="/contacts"> <i className="icon-mail" />Contacts </Link></li>
                <li> <Link to="/media"> <i className="icon-card" />Media </Link></li>
                <li> <Link to="/change-password"> <i className="icon icon-bars" />Change Password </Link></li>
            </ul>
            {/* : */}
            <ul className="list-unstyled">
                <li><Link to="/"> <i className="icon-home" />Home </Link></li>
            </ul>
            {/* } */}
            <span className="heading">Extras</span>
            <ul className="list-unstyled">
                <li> <Link to="/about"> <i className="icon-screen" />Abount </Link></li>
                <li> <Link to="/help"> <i className="icon-flask" />Help </Link></li>
            </ul>
        </nav>
    );
}

export default SideBar;