import React from 'react';
import DashBoard from '../components/dashboard/DashBoard';
import SideBar from '../components/sideBar/SideBar';
import Header from '../components/header/Header'
function HomePage(props) {
    return (
        <>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />
                <div>
                    <DashBoard />
                </div>
            </div>
        </>

    );
}

export default HomePage;