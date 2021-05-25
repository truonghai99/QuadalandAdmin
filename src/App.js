import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Property from './components/product/Product';
import Company from './components/company/Company';
import Customer from './components/customer/Customer';
import Contact from './components/contact/contact';
import Role from './components/role/Role';
import User from './components/user/User';
import AboutPage from './pages/AboutPage';
import Help from './pages/Help';
import Login from './components/login/Login';
// import ActionProduct from './components/product/ActionProduct';
import AddProperty from "./components/property/AddProperty";
import SideBar from './components/sideBar/SideBar';
// import ActionCustomer from './components/customer/ActionCustomer';
import ActionRole from './components/role/ActionRole';
import ActionUser from './components/user/ActionUser';
import LoginPage from './pages/LoginPage';
import UpdateUser from './components/user/UpdateUser';
import ChangePassword from "./components/change-password";
import UpdateCustomer from './components/customer/UpdateCustomer';
import AddCustomer from './components/customer/AddCustomer';
import AddCompany from './components/company/AddCompany';
import UpdateCompany from './components/company/UpdateCompany';
import UpdateProperty from './components/product/UpdateProperty';
import PropertySaleMethods from './components/PropertySaleMethods/PropertySaleMethods';
import MediaTable from "./components/media";


function App() {


  return (
    <Router>
      <Route exact path="/login" component={LoginPage}></Route>

      {/* <Header /> */}
      {/* <div className="page-content d-flex align-items-stretch"> */}
      {/* <SideBar /> */}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/about" component={AboutPage}></Route>
      <Route exact path="/help" component={Help}></Route>
      <Route exact path="/property" component={Property}></Route>
      <Route exact path="/property/add" component={AddProperty}></Route>
      <Route exact path="/company" component={Company}></Route>
      <Route exact path="/companies/add" component={AddCompany}></Route>
      <Route exact path="/customer" component={Customer}></Route>
      <Route exact path="/customers/add" component={AddCustomer}></Route>
      <Route exact path="/contacts" component={Contact}></Route>
      <Route exact path="/roles" component={Role}></Route>
      <Route exact path="/propertysalemethods" component={PropertySaleMethods}></Route>
      <Route exact path="/roles/add" component={ActionRole}></Route>
      <Route exact path="/users" component={User}></Route>
      <Route exact path="/users/add" component={ActionUser}></Route>
      <Route exact path="/users/edit/:username" component={UpdateUser}></Route>
      <Route exact path="/change-password" component={ChangePassword}></Route>
      <Route exact path="/customers/edit/:username" component={UpdateCustomer}></Route>
      <Route exact path="/property/edit/:slug" component={UpdateProperty}></Route>
      <Route exact path="/companies/edit/:username" component={UpdateCompany}></Route>
      <Route exact path="/media" component={MediaTable}></Route>
    </Router>
  );
}

export default App;
