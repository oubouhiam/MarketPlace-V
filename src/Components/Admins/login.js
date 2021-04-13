import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function LoginSuperAdmin() {

	const history = useHistory();
	const [login, setlogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,password};

	axios.post(`http://localhost:8080/admin/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/DashboardAdmin');
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
			}
		 
		})
	}
 
    return(
    


<div className="container-fluid">
    <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 mx-auto">
                            <h3 className="display-4" >WELCOME BACK ADMIN!!</h3>
                            <div id="toast-container" className="toast toast-warning" color="black"></div>
                             <br></br>
                            <form onSubmit={handleSubmit}>

                                <div className="form-group mb-3"> <input id="inputEmail" type="text" placeholder="UserName" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"value={login}
		  onChange={e => setlogin(e.target.value)}/> </div>
                                <div className="form-group mb-3"> <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"value={password} 
		onChange={e => setPassword(e.target.value)}/><br></br></div>
                                 <button type="submit" onClick={toastr} className="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm" id="login-button">Login</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          )
        }
        export default LoginSuperAdmin;