import {Link,useHistory } from 'react-router-dom';
import React from 'react';

    function Loginpage() {

        const history = useHistory();

        const SuperAdmin = ()=>{
            history.push('/SuperAdmin');
          }
          const Admin = ()=>{
            history.push('/Admin');
          }
          const Seller = ()=>{
            history.push('/seller');
          }

      return (
  
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="container">
            <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  login  <span className="text-pink-600">Page</span>
                </h2>
                <h3 className="text-xl md:text-3xl mt-10">Welcome</h3>
              </div>
              <div className="flex flex-wrap mt-10 justify-center">
                <div className="m-3">
                <Link onClick={() => SuperAdmin()}> <button  title="SuperAdmin" className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">SuperAdmin</span>
                  </button></Link>
                </div>
                <div className="m-3">
                <Link onClick={() => Admin()}> <button  title="Admin" className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Admin</span>
                  </button></Link>
                </div>
                <div className="m-3">
                <Link onClick={() => Seller()}> <button  title="Seller" className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Seller</span>
                  </button></Link>
                </div>
                <div className="m-3">
                <button  title="Client" className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Client</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default Loginpage;