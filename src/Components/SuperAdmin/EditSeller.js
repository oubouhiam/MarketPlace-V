import'./styles/addstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
function EditeSellers() {

	const history=useHistory();
	// const [status, setStatus] = useState();
	// const [type, setType] = useState();
	const [ setStatus] = useState();
	const [ setType] = useState();
	const idseller=localStorage.getItem('idseller');
	let idSeller;
	let idSeller2;
  // ---------------------get seller to update-----------------------------
  useEffect(()=>{
  
	axios.get(`http://localhost:8080/seller/${idseller}`)
	.then(function (response) {
	 
		setStatus(response.data.status)
		setType(response.data.type)
	
	}).catch(function (err) {
	  console.log(err);
  });
  
  })
  // -----------------------update seller---------------------------
  const handleSubmit = (e) => {
	e.preventDefault();
	var id = idSeller.value;
	var id2 = idSeller2.value;
const Sellerupdate = {status : id,type:id2};

axios.put(`http://localhost:8080/seller/update/${idseller}`,Sellerupdate)
  .then(res => {
	if(res.error){
	  return false
	}else{
	  console.log(res.data);
	  history.push('/ListSeller')
	}
   
  })

}
    return(
      
      <body class="staytunt">
      <div class="container cont">
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2 well">
				<div class="col-sm-12 form-legend">
					<h2>Add Admins</h2>
				</div>
				<div class="col-sm-12 form-column">
					<form  data-parsley-validate onSubmit={handleSubmit}>
						<div class="form-group">
							<label for="fname">Type:</label>
              <select name="" id="" className="form-control"ref={(e) => idSeller = e}>
 		<option value="Starter" key="Starter">Starter</option>
		<option value="Pro"key="Pro">Pro</option>
        <option value="Expert"key="Expert">Expert</option>
       	</select>
						</div>
						<div class="form-group">
							<label for="lname">Status:</label>
							<select name="" id="" className="form-control"ref={(e) => idSeller2 = e}>
	<option value="Inactive">Inactive</option>
 		<option value="Active">Active</option>
         <option value="Block">Block</option>
	</select>
						</div>
            <button type="submit" id="Addadmin" class='btn'>ADD</button>
					</form>
				</div>
			</div>
      </div>
		</div>
    </body>

          )
        }
        export default EditeSellers;