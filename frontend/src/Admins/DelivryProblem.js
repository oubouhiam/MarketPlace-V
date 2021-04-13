//      import { useHistory } from "react-router-dom";
// import toastr from 'toastr';
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
function ProblemOrder() {



    return(
        

    <div className="h-screen flex">
    <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
      transition duration-500 ease-in-out">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
          transition duration-500 ease-in-out text-center">
        MarketPlace <br></br>Dashboard
        </h1>
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="./admins/iconadmin.png" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          Admin nM SuperAdmin <br></br>
        </span>
      </div>
      <ul>
              <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/AdminDashboard" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Dashboard</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/ProblemOrder" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">List delivery problems</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/ClientOrder" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Confirm orders</span>
            </span>
          </a>
        </li>
                <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Delivery" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Add delivery people</span>
            </span>
          </a>
        </li>
      </ul>
      <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
        <a href="/Logout" class="flex items-center">
          <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
              2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
              0 012-2h9z"></path>
          </svg>
          <span class="ml-4 capitalize font-medium">log out</span>
        </a>
  
      </div>
    </nav>
    
    <main className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
      duration-500 ease-in-out">
      <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
        duration-500 ease-in-out">
        <h2 className="text-4xl font-medium capitalize">Admins</h2>
        <div className="mt-1 mb-4 flex items-center justify-between">
          <span className="text-sm">
  
            <strong>199</strong>
  
          </span>
          <div className="flex items-center select-none">
            <span className="hover:text-pink-500 cursor-pointer mr-3">
              <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                <path d="M505 442.7L405.3
                  343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
                  44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
                  208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
                  2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
                  0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
                  0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
                  128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
            </span>
            <input className="bg-transparent focus:outline-none" placeholder="Search in activity" />
          </div>
          
        </div>
        <div className="border dark:border-gray-700 transition duration-500
          ease-in-out" />

  
  
  
<section class="text-gray-700 body-font">
<h1 class="title-font font-medium text-3xl text-gray-900 text-center">Delivry Problem</h1>
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img className="h-16 w-16 rounded-full text-indigo-500 w-12 h-12 mb-3 inline-block " 
        src="./admins/delivryadmin.png" alt="Logo" />
                 <h1 class="title-font font-medium text-3xl text-gray-900">Yassine Cherkaoui </h1>
         <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com" class="leading-relaxed">Yassin@gmail.com</a></p>
          <p><a href="tel:0621114160" class="leading-relaxed">0621114160</a></p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img className="h-16 w-16 rounded-full text-indigo-500 w-12 h-12 mb-3 inline-block " 
        src="./admins/delivryadmin.png" alt="Logo" />
                 <h1 class="title-font font-medium text-3xl text-gray-900">Yassine Cherkaoui </h1>
         <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com" class="leading-relaxed">Yassin@gmail.com</a></p>
          <p><a href="tel:0621114160" class="leading-relaxed">0621114160</a></p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img className="h-16 w-16 rounded-full text-indigo-500 w-12 h-12 mb-3 inline-block " src="./admins/delivryadmin.png" alt="Logo" />
                 <h1 class="title-font font-medium text-3xl text-gray-900">Yassine Cherkaoui </h1>
         <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com" class="leading-relaxed">Yassin@gmail.com</a></p>
          <p><a href="tel:0621114160" class="leading-relaxed">0621114160</a></p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img className="h-16 w-16 rounded-full text-indigo-500 w-12 h-12 mb-3 inline-block " src="./admins/delivryadmin.png" alt="Logo" />
                 <h1 class="title-font font-medium text-3xl text-gray-900">Yassine Cherkaoui </h1>
         <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com" class="leading-relaxed">Yassin@gmail.com</a></p>
          <p><a href="tel:0621114160" class="leading-relaxed">0621114160</a></p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <img className="h-16 w-16 rounded-full text-indigo-500 w-12 h-12 mb-3 inline-block " src="./admins/delivryadmin.png" alt="Logo" />
                 <h1 class="title-font font-medium text-3xl text-gray-900">Yassine Cherkaoui </h1>
         <p> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com" class="leading-relaxed">Yassin@gmail.com</a></p>
          <p><a href="tel:0621114160" class="leading-relaxed">0621114160</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

  
  
  
  
  
  
  
  
  
  
  
        
      </div>
  
    </main>
    
  </div>



    )
}
export default ProblemOrder;
  
