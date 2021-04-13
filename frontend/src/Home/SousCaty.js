import '../index.css'
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function Home() {


    const idProduct=localStorage.getItem('idProduct');
    const CategoryName=localStorage.getItem('CategoryName');

  const history = useHistory();
//----------- show gategory added in datatable------------
const [product2 , setProduct] = useState();
useEffect(()=>{

  axios.get(`http://localhost:8080/products/${idProduct}`)
    .then(function (response) {
        console.log(response.data);
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])







  return (
    <div>
        <div>
  <header className="text-pink-900 bg-blue-200 body-font shadow w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src="http://image.noelshack.com/fichiers/2021/13/7/1617557837-shoplogo.png" style={{height: '70px'}} alt="logo" />
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a href="#" className="bg-pink-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
              Login
            </a>
            <a href="#" className="bg-pink-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
              Cart
            </a>
            <div className="relative inline-flex">
        <select className=" bg-pink-700  text-white ml-4 py-2 px-3 rounded-lg">
          <option>Language</option>
          <option>AR</option>
          <option>EN</option>
        </select>
      </div>
          </div>
        </div>
      </header>  
</div>

     
  <section className="bg-white py-8">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
      { product2 && product2.map(item =>(
// { product2 && product2.productImg}
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="/">
          <img className="hover:grow hover:shadow-lg" alt="img" src={item.productImg} />
          <div className="pt-3 flex items-center justify-between">
            <p className>{item.Titel}</p>
          </div>
          <p className="pt-1 text-gray-900">{item.price} MAD</p>
          <p className="pt-1 text-gray-900">By {item.idSeller}</p>
          <p className="pt-1 text-gray-400">TAGS: {item.tags}</p>
        </a>
      </div>
            ))}

                  {/* <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="/">
          <img className="hover:grow hover:shadow-lg" alt="img" src={ product2 && product2.productImg} />
          <div className="pt-3 flex items-center justify-between">
            <p className>{ product2 && product2.Titel}</p>
          </div>
          <p className="pt-1 text-gray-900">{product2 && product2.price} MAD</p>
          <p className="pt-1 text-gray-900">By {product2 && product2.idSeller}</p>
          <p className="pt-1 text-gray-400">TAGS: {product2 && product2.tags}</p>
        </a>
      </div>
       
      </div> */}
      </nav>
      </div>
      
  </section>
  
  
</div>



  );
}

export default Home;
