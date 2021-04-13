import'./styles/addstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
function EdiAdmin(props) {

	const history=useHistory();
	const [FirstName, setFirstName] = useState();
	const [LastName, setLastName] = useState();
	const [Email, setEmail] = useState();
	const [login, setlogin] = useState();
	const [Password, setPassword] = useState();
    const idadmin=localStorage.getItem('idadmin');
    
//   let idadmin;
  // ---------------------get question to update-----------------------------
     useEffect(()=>{
  
      axios.get(`http://localhost:8080/admin/${idadmin}`)
      .then(function (response) {
       
        setFirstName(response.data.FirstName)
        setLastName(response.data.LastName)
        setEmail(response.data.Email)
        setlogin(response.data.login)
        // const [, setNameCategory] = useState("");
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })
  // -----------------------update question---------------------------
      const handleSubmit = (e) => {
          e.preventDefault();
      const Admin = {FirstName,LastName,Email,login,Password};
  
      axios.put(`http://localhost:8080/admin/update/${idadmin}`,Admin)
        .then(res => {
          if(res.error){
            return false
          }else{
            console.log(res.data);
            history.push('/AdminList')
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
							<label for="fname">First name:</label>
							<input type="text" id="fname" name="fname" class="form-control" required value={FirstName}
                onChange={e => setFirstName(e.target.value)}/>
						</div>
						<div class="form-group">
							<label for="lname">Last name:</label>
							<input type="lname" id="lname" name="emailConfirm" class="form-control"required value={LastName}
                onChange={e => setLastName(e.target.value)}/>
						</div>
						<div class="form-group">
							<label for="country">Email</label>
							<input type="email" id="email" name="email" class="form-control" required value={Email}
                onChange={e => setEmail(e.target.value)}/>
						</div>
						<div class="form-group">
							<label for="zip-code">Login</label>
							<input type="text" id="Login" name="Login" class="form-control" required value={login}
                onChange={e => setlogin(e.target.value)}/>
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" id="password" name="password" class="form-control" required value={Password}
                onChange={e => setPassword(e.target.value)}/>
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
        export default EdiAdmin;