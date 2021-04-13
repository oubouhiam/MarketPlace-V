
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import {useEffect} from 'react';
import { Link  } from 'react-router-dom';

function AdminDash() {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [Delivry_Name, setDelivry_Name] = useState();

useEffect(()=>{
  axios.get(`https://shopmedic.herokuapp.com/Delivry`)
    .then(function (response) {
      setDelivry_Name(response.data)
      // setType(response.data)
    }).catch(function (err) {
      console.log(err);
  });
    
},[])


// ---------------Delete Delivry-------------------

const deleteDelivry = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`https://shopmedic.herokuapp.com/Delivry/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('Delivry was deleted Succesfully ... ');
  
})
}

}

const getIdDelivry = (id)=>{
  localStorage.setItem('idDelivry',id);
  history.push('/EditDelivry');
  
  }
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
    
    <main className="flex-1  overflow-y-auto transition duration-500 ease-in-out">
      <div class="text-center ... bg-pink-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg w-28">
        <a href="/AddDelivery"> <span>Add Delivry</span> </a>
      </div>
      <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
        duration-500 ease-in-out">
        <div className="flex flex-col mt-2">
  
  
        { Delivry_Name && Delivry_Name.map(item =>(
  
  
          <div className="flex flex-row mt-2">
            <div className="flex w-full items-center justify-between bg-white
              dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
              dark:border-green-300">
              {/* card */}

              <div className="flex">
                <img className="h-12 w-12 rounded-full object-cover" alt="profimg" src="./admins/iconadmin.png"></img>
                <div className="flex flex-col ml-6">
                  <span className="text-lg font-bold">{item.Delivry_Name}</span>
                  <div className="mt-4 flex">
                    <div className="flex">
                      <svg className="h-5 w-5 fill-current
                        dark:text-gray-300" viewBox="0 0 24 24">
                        <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4
                          4 4 0 01-4-4 4 4 0 014-4m0
                          10c4.42 0 8 1.79 8
                          4v2H4v-2c0-2.21 3.58-4 8-4z" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-600
                        dark:text-gray-300 capitalize">
                        {item.Delivry_Name} {' '} {item.Type}
                      </span>
                    </div>
                  </div>
                 
                </div>
                
              </div>
              
              <div className="flex flex-col -mt-10 mr-20">
              <span className="font-semibold text-green-500
								dark:text-green-300">
                {item.Type}
              </span>
            </div>

            </div>
  
            <Link onClick={()=> getIdDelivry(item._id)} className="text-center flex flex-col items-center
              justify-center bg-white dark:bg-gray-800
              dark:text-gray-300 ml-1 px-12 cursor-pointer
              hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >
  
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
              
            </Link>
  
            <Link onClick={() => deleteDelivry(item._id)} className="text-center flex flex-col items-center
              justify-center bg-white dark:bg-gray-800
              dark:text-gray-300 ml-1 px-12 cursor-pointer
              hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </Link>
            
          </div>
  
   
  ))}
  
        </div>
        

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        
      </div>
  
    </main>
    
  </div>
  )
}
export default AdminDash;