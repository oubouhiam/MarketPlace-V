import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
// ______________HOME__________________
import Home from '../Home/Home';
import SignUp from '../Home/SignUp';
// ______________SUPERADMIN__________________
//Admins
import superDash from '../SuperAdmin/dashboard';
import ListAdmins from '../SuperAdmin/ListAdmins';
import addadmins from '../SuperAdmin/addAdmins';
import LoginSup from '../SuperAdmin/login';
import EditeAdmin from '../SuperAdmin/EditeAdmin';
//Seller
import ListSeller from '../SuperAdmin/ListSeller';
import EditeSeller from '../SuperAdmin/EditSeller';
// ______________ADMIN__________________
import AdminDash from '../Admins/Dashboard';
import AdminOrder from '../Admins/Order';
import ConfirmOrder from '../Admins/confirmorder';
import ProblemOrder from '../Admins/ProblemOrder';
import Delivery from '../Admins/DeliveryList';
import LoginAdmin from '../Admins/login';

// ______________SELLERS__________________
import Loginseller from '../Seller/loginseller';
import BecomeSeller from '../Seller/becomeseller';
import DashboardSeller from '../Seller/dashboard-seller';
import Statistics from '../Seller/statistics';
import SellerProduct from '../Seller/seller-product';
import AddSellerProduct from '../Seller/Add-Product';
import Packs from '../Seller/Packs';
import PrivateRoute from '../authtification/PrivateRoute';


// ______________Private Route__________________
// import Categories from '../Dash/Categories';

function Routes() {
  return (
<BrowserRouter>
      <Switch> 
      {/* // ______________Client Route__________________ */}
          <Route  path="/" exact component={Home}/> 
          <Route  path="/SignUp" exact component={SignUp}/> 
      {/* // ______________SupperAdmin Route__________________ */}
        {/* Admins */}
          <Route  path="/SuperAdmin" exact component={LoginSup}/> 
          <Route  path="/AdminList" exact component={ListAdmins}/> 
          <Route  path="/addadmins" exact component={addadmins}/> 
          <Route  path="/dashboardsup" exact component={superDash}/> 
          <Route  path="/EditeAdmin" exact component={EditeAdmin}/> 
          {/* seller */}
          <Route  path="/ListSeller" exact component={ListSeller}/> 
          <Route  path="/editseller" exact component={EditeSeller}/> 
      {/* // ______________Admins Route__________________ */}
      <PrivateRoute  path="/Admin" exact component={LoginAdmin}/> 
      <PrivateRoute  path="/DashboardAdmin" exact component={AdminDash}/> 
      <PrivateRoute  path="/ClientOrder" exact component={AdminOrder}/> 
      <PrivateRoute  path="/ConfirmOrder" exact component={ConfirmOrder}/>
      <PrivateRoute  path="/ProblemOrder" exact component={ProblemOrder}/>  
      <PrivateRoute  path="/Delivery" exact component={Delivery}/>  
      {/* // ______________Seller Route__________________ */}
      <PrivateRoute  path="/seller" exact component={Loginseller}/> 
      <PrivateRoute  path="/becomeseller" exact component={BecomeSeller}/>  
      <PrivateRoute  path="/DashboardSeller" exact component={DashboardSeller}/>  
      <PrivateRoute  path="/Statistics" exact component={Statistics}/>  
      <PrivateRoute  path="/SellerProduct" exact component={SellerProduct}/> 
      <PrivateRoute  path="/AddSellerProduct" exact component={AddSellerProduct}/> 
      <PrivateRoute  path="/Packs" exact component={Packs}/> 




          {/* // ______________Private Route__________________ */}
          {/* <PrivateRoute  path="/quiz" exact component={Quiz}/>  */}
      </Switch>
</BrowserRouter>
  );
}
export default Routes;