import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
function LoginSeller() {
  const history = useHistory();

	const [fname, setfname] = useState();
    const [lname, setlname] = useState();
	const [email, setemail] = useState();
    const [Username, setUsername] = useState();
    const [docummant, setdocummant] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
  
    const user = {fname,lname,email,Username,docummant,Password};
  
    axios.post(`http://localhost:8080/seller/add`, user)
      .then(res => {
          if(res.error){
          return false
        }else{
          
           console.log(res.data);
                 history.push('/seller')
                 toastr.info("Account Added! Please With until Admin Accept Your Documents Thanks for Your Time")
        }
      })
    }

    return(
      <div className="flex" >
            <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center pt-12 md:pl-12 md:-mb-24">
        <img src="http://image.noelshack.com/fichiers/2021/13/7/1617557837-shoplogo.png" style={{height: '100px'}} alt="logo" />
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Seller register</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">First Name</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={fname}
                    onChange={e => setfname(e.target.value)} 
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">Last Name</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={lname}
                    onChange={e => setlname(e.target.value)} 
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={email}
                    onChange={e => setemail(e.target.value)} 
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">Company Files</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={docummant}
                    onChange={e => setdocummant(e.target.value)} 
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">UserName</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={Username}
                    onChange={e => setUsername(e.target.value)} 
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">Password</div>
            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=""
            				value={Password}
                    onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={toastr} type="submit"className="bg-gray-900 text-white active:bg-pink-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" style={{transition: 'all 0.15s ease 0s'}}>
                               Sign In</button>
                               </div>
          </form>

          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center"> Login <a
           className="cursor-pointer text-indigo-600 hover:text-indigo-800" href="//seller">Here</a></div>
        </div>
      </div>
    
    </div>

       

          )
        }
        export default LoginSeller;