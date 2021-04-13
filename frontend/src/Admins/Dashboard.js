// import { useHistory } from "react-router-dom";
// import toastr from 'toastr';
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';



function Dashboard() {


      return(

    <div className="h-screen lg:bg-back bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
      <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
            <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/AdminDashboard">
              Home
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/ClientOrder">
            Orders
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/Delivery">
            delivery Service
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 p-3" href="/Logout">
            log out
            </a>
        </div>
      </nav>
      <h1> Welcome To admin Dashboard</h1>
    </div>

              )

}
export default Dashboard;