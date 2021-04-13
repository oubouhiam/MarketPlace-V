
function PacksSeller() {



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
        </div>
          )
        }
        export default PacksSeller;