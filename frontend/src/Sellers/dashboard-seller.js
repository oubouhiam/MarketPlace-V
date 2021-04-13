
function DashboardSeller() {




    return(
     
            <div className="h-screen lg:bg-back bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
      <nav className="bg-white px-8 pt-2 shadow-md my-9">
        <div className="-mb-px flex justify-center">
            <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/DashboardSeller">
              Home
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/SellerProduct">
            Products
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 p-3" href="/Packs">
            Packs
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 p-3" href="/Logout">
            log out
            </a>
        </div>
        </nav>
        <div className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto  flex flex-col">
          <div className="p-3 mx-auto">
            <a href className="text-2xl uppercase font-bold text-indigo-900 ">Welcome</a>
          </div>
          <div className="w-30 h-30 border rounded-3xl border-indigo-900 shadow">
            <img src="https://img.icons8.com/plasticine/200/000000/user-male.png" />
          </div>
          <div className="mt-2 mx-auto">
            <p className="font-mono uppercase text-indigo-700">Med</p>
          </div>
        </div>
        <div className=" mx-auto">
          <i><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M46.58333,46.58333c0,-11.825 9.675,-21.5 21.5,-21.5h35.83333c11.825,0 21.5,9.675 21.5,21.5h14.33333c0,-19.70833 -16.125,-35.83333 -35.83333,-35.83333h-35.83333c-19.70833,0 -35.83333,16.125 -35.83333,35.83333v40.13333h14.33333z" /><path d="M16.48333,78.83333l22.93333,30.1l22.93333,-30.1z" /><g><path d="M125.41667,125.41667c0,11.825 -9.675,21.5 -21.5,21.5h-35.83333c-11.825,0 -21.5,-9.675 -21.5,-21.5h-14.33333c0,19.70833 16.125,35.83333 35.83333,35.83333h35.83333c19.70833,0 35.83333,-16.125 35.83333,-35.83333v-43h-14.33333z" /><path d="M109.65,93.16667l22.93333,-30.1l22.93333,30.1z" /></g></g></g></svg></i>
        </div>
      </div>
        </div>

          )
        }
        export default DashboardSeller;