import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';

function SellerProduct() {

  const history = useHistory();

  //----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
useEffect(()=>{

  axios.get(`https://shopmedic.herokuapp.com/product`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


const name=localStorage.getItem('name');



// ---------------Delete admin-------------------

const deleteProduct = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`https://shopmedic.herokuapp.com/product/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}
const getIdProduct = (id)=>{
localStorage.setItem('idproduct',id);
history.push('/editProduct');

}
const giftProduct = (id)=>{
  localStorage.setItem('idgiftproduct',id);
  history.push('/');

  
  }







    return(
    
            <div className="h-screen bg-gradient-to-r from-green-400 to-white-500 bg-opacity-25 ">
      <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
            <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/DashboardSeller">
            Home
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/SellerProduct">
            Products
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="#">
            Packs
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 p-3" href="/Logout">
            log out
            </a>
        </div>
        </nav>
  
  <main className="flex-1  overflow-y-auto transition duration-500 ease-in-out">
            <div class="text-center ... bg-pink-700 hover:bg-green-500 text-white ml-4 py-2 px-3 rounded-lg w-28 justify-items-center">
        <a href="/AddSellerProduct"> <span>Add Product</span> </a>
      </div>
      <div className=" transition duration-500
				ease-in-out" />
      <div className="flex flex-col mt-2">

      { product && product.map(item =>(

        <div className="flex flex-row mt-2">
          <div className="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
            {/* card */}



            <div className="flex">
              <img className="h-12 w-12 object-cover" alt="profimg" src={item.productImg}></img>
              <div className="flex flex-col ml-6">
                <span className="text-lg font-bold">{item.Titel}</span>
                <div className="mt-4 flex">
                  <div className="flex">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                       {item.Qty}	in stock
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
                      {item.currentDate}
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      {item.price} MAD	
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
            
            <div className="flex flex-col -mt-10 mr-20">

                
              <span className="font-semibold text-gray-500
								dark:text-green-300">
                {item.status}
              </span>
                
            
            </div>
          
          </div>

          <Link onClick={()=> getIdProduct(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >

            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            
          </Link>

          <Link onClick={() => deleteProduct(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </Link>
          <Link onClick={() => giftProduct(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
             <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
          </svg>
          </Link>
          
        </div>

        ))}
        
      </div>

        










      
  

  </main>
  
</div>

          )
        }
        export default SellerProduct;