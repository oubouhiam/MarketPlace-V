
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery'; 
import filetext from './text.txt';
// import { Document,pdfjs,Page   } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function ListSeller() {

  const history = useHistory();
  //----------- show gategory added in datatable------------
  const [seller , setseller] = useState(null);
  useEffect(()=>{
  
    axios.get(`https://shopmedic.herokuapp.com/seller`)
      .then(function (response) {
        setseller(response.data)
      }).catch(function (err) {
        console.log(err);
    });
    
  },[])




  
// ---------------Delete admin-------------------

const deleteSeller = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`https://shopmedic.herokuapp.com/seller/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}

const getIdSeller = (id)=>{
localStorage.setItem('idseller',id);
history.push('/editseller');

}
$(document).ready(function(){
  $(".displaymsg").click(function(){
    $(".modal-body").load(filetext);
  });
});



// const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }



const logOut =()=>{

  localStorage.removeItem('token')
  history.push('/superAdmin');
  }









    return(
      
      <div className="h-screen lg:bg-back bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
        <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
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
  <main className="flex-1 overflow-y-auto transition
		duration-500 ease-in-out">
    <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out">
      <h2 className="text-4xl font-medium capitalize">Sellers</h2>

        
      </div>
      <div className="b transition duration-500
				ease-in-out" />
      <div className="flex flex-col mt-2">


      { seller && seller.map(item =>(


        <div className="flex flex-row mt-2">
          <div className="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
            {/* card */}



            <div className="flex">
              <img className="h-12 w-12 rounded-full object-cover" alt="profimg" src="./superadmin/profileSuperadmin.png"></img>
              <div className="flex flex-col ml-6">
                <span className="text-lg font-bold">{item.Username}</span>
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
                      {item.Username} {' '} {item.type}
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      {item.status}
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="flex flex-col -mt-10 mr-20">
              <span className="font-semibold text-green-500
								dark:text-green-300">
                {item.type}
              </span>
            </div>
            
          </div>

          <Link onClick={()=> getIdSeller(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >

            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            
          </Link>

          <Link onClick={() => deleteSeller(item._id)} className="text-center flex flex-col items-center
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
      














      

  </main>
  
</div>

          )
        }
        export default ListSeller;