import'../index.css';
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function ListAdmins() {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [admin , setAdmin] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/admin`)
    .then(function (response) {
      setAdmin(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

const name=localStorage.getItem('name');



// ---------------Delete admin-------------------

const deleteadmin = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`http://localhost:8080/admin/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}
const getIdadmin = (id)=>{
localStorage.setItem('idadmin',id);
history.push('/EditeAdmin');

}



axios.get(`http://localhost:8080/admin`)
.then(function (response) {
  numAdmin = response.data.length
  console.log(numAdmin);
}).catch(function (err) {
  console.log(err);
});
let numAdmin =5;
//   axios.get(`hhttp://localhost:8080/admin`)
// .then(res => {

//   useState=
//           numAdmin = res.data.length

     
      
// })


const logOut =()=>{

  localStorage.removeItem('token')
  history.push('/superAdmin');
  }
    return(
      <div className="h-screen lg:bg-back bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
        <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
        <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/AdminList">
              Welcome {name}
            </a>
            <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/AdminList">
              Home
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/AdminList">
            ADMINS
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/ListSeller">
            Sellers
            </a>
            <Link  onClick={logOut}><a href="/Logout" class="flex items-center">
				<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
				</svg>
				<span class="ml-4 capitalize font-medium">log out</span>
			</a></Link>
        </div>
      </nav>
  
  <main className="flex-1  overflow-y-auto transition
		duration-500 ease-in-out">
    <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out">
      <h2 className="text-4xl font-medium capitalize">Admins  <span className="text-sm">
          <strong>{numAdmin}</strong>

        </span></h2>
      <a
        href="/addadmins"
					class="flex items-center text-white-600 focus:outline-none border
					rounded-full py-2 px-6 leading-none bg-pink-700 w-28
					select-none hover:text-pink-600 hover:bg-green-300 my-3">
					<span>Add Admins</span>
				</a>
      <div className=" transition duration-500
				ease-in-out" />
      <div className="flex flex-col mt-2">
      { admin && admin.map(item =>(


        <div className="flex flex-row mt-2">
          <div className="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
            {/* card */}
            <div className="flex">
              <img className="h-12 w-12 rounded-full object-cover" alt="profimg" src="./superadmin/profileSuperadmin.png"></img>
              <div className="flex flex-col ml-6">
                <span className="text-lg font-bold">{item.FirstName}</span>
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
                      {item.FirstName} {' '} {item.LastName}
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      15 aug 2019
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      {item.Email}
                    </span>
                  </div>
                </div>
               
              </div>
            </div>            
          </div>

          <Link onClick={()=> getIdadmin(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >

            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            
          </Link>

          <Link onClick={() => deleteadmin(item._id)} className="text-center flex flex-col items-center
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
        export default ListAdmins;