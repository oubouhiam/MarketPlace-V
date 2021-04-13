import '../index.css'
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function Home() {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
const [giftproduct , setGiftProduct] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/products`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


const [category , setcategory] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/category`)
    .then(function (response) {
      setcategory(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

const getIdProduct = (category)=>{
  localStorage.setItem('idProduct',category);
  history.push('/sousProduct');


}

const Checkout = (product)=>{
  localStorage.setItem('idProducttobuy',product);
  history.push('/Home/CheckOut');
  console.log(product);

}
const gift_product=localStorage.getItem('idgiftproduct');
useEffect(()=>{

  axios.get(`http://localhost:8080/product/${gift_product}`)
    .then(function (response) {
      setGiftProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


  return (
    <div class="lg:bg-hero-lg bg-cover bg-center bg-indigo-600 bg-opacity-25 ">
  <div>
      <header className="text-pink-900  body-font shadow w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              { category && category.map(item =>(
               <Link onClick={() => getIdProduct(item._id)}><li><a className="bg-pink-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">{item.CategoryName}</a></li></Link>))}
            </ul>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src="http://image.noelshack.com/fichiers/2021/13/7/1617557837-shoplogo.png" style={{height: '70px'}} alt="logo" />
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a href="/loginpage" className="bg-pink-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">Login</a>
            <div className="relative inline-flex">
              <select className=" bg-pink-700  text-white ml-4 py-2 px-3 rounded-lg">
                <option>Language</option>
                <option>EN</option>
              </select>
            </div>
          </div>
        </div>
      </header>  
  </div>

  <div className="min-w-screen min-h-screen  flex items-center ">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left ">
          <h1 className="font-bold uppercase text-2xl mb-5 text-center">Day's Product promotion</h1>
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={giftproduct && giftproduct.productImg} className="w-full relative z-10 border-4 border-pink-700" alt="" />
                <div className="border-4 border-pink-700 absolute top-10 bottom-10 left-10 right-10 z-0" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{giftproduct && giftproduct.Titel}</h1>
                <p className="text-sm">{giftproduct && giftproduct.discription}<a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right" /></a></p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-2xl leading-none align-baseline">{giftproduct && giftproduct.price}</span>
                  <span className="text-2xl leading-none align-baseline">DH</span>
                </div>
                <div className="inline-block align-bottom">
                <Link onClick={() => Checkout(giftproduct._id)}><button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">BUY</button></Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <section className=" py-8">
  <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
  { product && product.map(item =>(
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col border-1 border-pink-600">
    <a href="/">
        <div className="px-4 py-2 ">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">{item.Titel}</h1>
          <h1 className="text-gray-200 font-bold text-xl">By {item.idSeller}</h1>
        </div>
        <img className="h-56 w-full object-cover mt-2"  alt="img" src={item.productImg} />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">{item.price}</h1>
          <Link onClick={() => Checkout(item._id)}><button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">BUY</button></Link> 
          <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">ADD TO CART</button>
        </div>
        </a>
        </div>
        ))}
      </div> 
      </section>
</div>



  );
}

export default Home;
