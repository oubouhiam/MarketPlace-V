function DashboardSeller() {




    return(

    
    <div className="h-screen flex">
    <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
      transition duration-500 ease-in-out">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
          transition duration-500 ease-in-out text-center">
        MarketPlace
        </h1>
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="./seller/sellericon.png" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          Seller <br></br> Basic<br></br>
        </span>
                  <a class="font-semibold text-gray-700 dark:text-gray-400
           mb-2 transition
          duration-500 ease-in-out text-green-400" href="/Packs">Upgrade</a>
      </div>
      <ul>
              <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/DashboardSeller" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Dashboard</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/SellerProduct" className="focus:text-pink-500 dark-focus:text-pink-400 focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Product</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Packs" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Buy Packs</span>
            </span>
          </a>
        </li>
                <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Statistics" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Statistics</span>
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
        <div className="mt-1 mb-4 flex items-center justify-between">
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


  
  
  

  <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
      <div className="w-full lg:w-1/5">
        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">230k</div>
              <div className="text-sm text-gray-400">Sales</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5">
        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">3456</div>
              <div className="text-sm text-gray-400">Customers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5">
        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">3456</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5">
        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">12658</div>
              <div className="text-sm text-gray-400">Orders</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5">
        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">$948'560</div>
              <div className="text-sm text-gray-400">Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
    </main>
    
  </div>
          )
        }
        export default DashboardSeller;