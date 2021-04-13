
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
function EditeSellers() {
	const history=useHistory();
	const [ status,setidorder] = useState();
  const [ email , setEmail] = useState("");
	const idOrder=localStorage.getItem('idOrder');
	let idorder;

  // ---------------------get Order to Confirm-----------------------------
useEffect(()=>{
	axios.get(`http://localhost:8080/order/${idOrder}`)
	.then(function (response) {
		setidorder(response.data.status)
    setEmail(response.data.email)
	}).catch(function (err) {
	  console.log(err);
  });
  
},[email,status,idOrder])



// -----------------------Accept Order---------------------------
const handleSubmit = (e) => {
	e.preventDefault();
	var id = idorder.value;
  const Orderupdate = {status : id};
    axios.put(`http://localhost:8080/order/update/${idOrder}`,Orderupdate)
    .then(res => {
	if(res.error){
	  return false
	}else{
        console.log(res.data);
        history.push('/ClientOrder')
      }
  })

  const emaildata = {email};
    axios.post(`http://localhost:8080/send_mail`,emaildata)
    .then(res => {
        if(res.error){
          return false
        }
      })
}


    return(   
<div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-4/4 lg:w-11/12 flex">
      {/* Col */}
      <div className="w-full h-full ml-12 bg-gray-400 hidden lg:block  bg-cover rounded-l-lg" style={{backgroundImage: 'url("../../superadmin/superadminhero.jpg")'}} />
      {/* Col */}
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl text-center">Edit Seller</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>

          <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
			  Type
              </label>
              <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
			  	ref={(e) => idorder = e}
			  >
			  <option value="Confirmed" key="Confirmed">Confirmed</option>
		    <option value="UnConfirmed"key="UnConfirmed">UnConfirmed</option>
			  </select>
            
          </div>

          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit" >
              Edit
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/ListSeller">
              Back
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
          )
        }
        export default EditeSellers;