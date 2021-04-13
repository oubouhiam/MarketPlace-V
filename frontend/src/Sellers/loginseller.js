import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";
function LoginSeller() {

	const history = useHistory();
	const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  // const [status] = useState();


	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {Username,Password};

	axios.post(`http://localhost:8080/seller/login`, user)
		.then(res => {
			if(!res.data.message){ 
       let status= res.data.status;

       localStorage.setItem("status", status);
        if(status == "InActive"){
          var yesno = window.confirm(
          "This Account is not activated! Yet please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
        }else if (status == "Block"){
        var yesno = window.confirm(
          "This Account is Blocked! please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
      }else{
        let token= res.data.token;
        localStorage.setItem("token", token);
        history.push('/DashboardSeller');
        toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)
      }
    
    
    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )
		 
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
          <p className="text-center text-3xl">Espace Seller</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input  id="text" type="text" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            value={Username}
            onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input id="password" type="password"  placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              value={Password} 
              onChange={e => setPassword(e.target.value)}
              />
             </div>
            <button onClick={toastr} type="submit"className="bg-gray-900 text-white active:bg-pink-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" style={{transition: 'all 0.15s ease 0s'}}>
                               Sign In</button>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center"> Become a Seller <a
           className="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/becomeseller">Click Here</a></div>
                     <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center"> Ecpace Admin <a
           className="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/admin">Click Here</a></div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
      </div>
    </div>



          )
        }
        export default LoginSeller;