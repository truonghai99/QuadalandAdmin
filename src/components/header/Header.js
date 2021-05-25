import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import authApi from "../../api/authApi";
import axiosadmin from '../../api/axiosadmin';

function Header(props) {

  const history = useHistory();


  const logOut = () => {
    authApi.logOut(logOutSuccess);
  }

  const logOutSuccess = () => {
    delete axiosadmin.defaults.headers.common["Authorization"];
    localStorage.removeItem('token');
    history.replace('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token?', token);
    if (token) {
      axiosadmin.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [])

  return (
    <header className="header">
      <nav className="navbar">
        {/* Search Box*/}
        <div className="search-box">
          <button className="dismiss">
            <i className="icon-close" />
          </button>
          <form id="searchForm" action="#" role="search">
            <input type="search" placeholder="What are you looking for..." className="form-control" />
          </form>
        </div>
        <div className="container-fluid">
          <div className="navbar-holder d-flex align-items-center justify-content-between">
            {/* Navbar Header*/}
            <div className="navbar-header">
              {/* Navbar Brand */}<Link to="/" className="navbar-brand d-none d-sm-inline-block">
                <div className="brand-text d-none d-lg-inline-block"><strong>admin quadaland</strong></div></Link>
            </div>
            {/* Navbar Menu */}
            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              {/* Search*/}
              {/* <li className="nav-item d-flex align-items-center"><Link id="search" to="#"><i className="icon-search" /></Link></li> */}
              {/* Notifications*/}
              {/* <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell-o" /><span className="badge bg-red badge-corner">1</span></a>
                  <ul aria-labelledby="notifications" className="dropdown-menu">
                    <li><Link rel="nofollow" to="#" className="dropdown-item">
                      <div className="notification">
                        <div className="notification-content"><i className="fa fa-envelope bg-green" />You have 6 new messages </div>
                        <div className="notification-time"><small>4 minutes ago</small></div>
                      </div></Link></li>
                    <li><Link rel="nofollow" to="#" className="dropdown-item all-notifications text-center"> <strong>view all notifications</strong></Link></li>
                  </ul>
                </li> */}
              {/* Languages dropdown    */}
              {/* <li className="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="https://i.ibb.co/QrtCN5s/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></a>
                <ul aria-labelledby="languages" className="dropdown-menu">
                  <li><Link rel="nofollow" to="#" className="dropdown-item"> <img src="https://i.ibb.co/QrtCN5s/GB.png" alt="English" className="mr-2" />German</Link></li>
                  <li><Link rel="nofollow" to="#" className="dropdown-item"> <img src="https://i.ibb.co/SnpwbfX/VN.png" alt="English" className="mr-2" />Viet Nam</Link></li>
                </ul>
              </li> */}
              {/* Logout    */}
              {/* <li className="nav-item">
                <span className="d-none d-sm-inline" onClick={() => logOut()}>Log out</span>
              </li> */}

              <  li className="nav-item"><Link onClick={logOut} className="nav-link logout"> <span className="d-none d-sm-inline">LogOut</span><i className="fa fa-sign-out" /></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;