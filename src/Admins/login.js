import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";
// import adminlogin from './adminlog.jpg'
function LoginSuperAdmin() {

	const history = useHistory();
	const [login, setlogin] = useState();
    const [Password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,Password};

	axios.post(`https://shopmedic.herokuapp.com/admin/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/AdminDashboard');
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
			}
		 
		})
	}
 
    return(
      <div className="flex" >
        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center pt-12 md:pl-12 md:-mb-24">
          <img src="http://image.noelshack.com/fichiers/2021/13/7/1617557837-shoplogo.png" style={{height: '100px'}} alt="logo" />
          </div>
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Espace Admin</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">Email</label>
                <input  id="text" type="text" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  value={login}
                  onChange={e => setlogin(e.target.value)}  />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">Password</label>
                <input id="password" type="password"  placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                 value={Password} 
                 onChange={e => setPassword(e.target.value)}/>
              </div>
              <button  type="submit"className="bg-gray-900 text-white active:bg-pink-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" style={{transition: 'all 0.15s ease 0s'}}>
                                 Sign In</button>
            </form>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
        </div>
      </div>
          )
        }
        export default LoginSuperAdmin;