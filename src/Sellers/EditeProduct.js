// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState,useEffect } from 'react';



  function EditeSellerProduct() {
    const history=useHistory();
const [productImg, setproductImg] = useState();
const [Titel, setTitel] = useState();
const [category, setcategory] = useState();
const [tags, settags] = useState();
const [price, setprice] = useState();
const [Qty, setQty] = useState();
const [discription, setdiscription] = useState();
const [idSeller, setidSeller] = useState();
const idproduct=localStorage.getItem('idproduct');






  // ---------------------get question to update-----------------------------
  useEffect(()=>{
  
    axios.get(`https://shopmedic.herokuapp.com/product/${idproduct}`)
    .then(function (response) {
     
      // setproductImg(response.data.productImg)
      setTitel(response.data.Titel)
      setcategory(response.data.category)
      settags(response.data.tags)
      setprice(response.data.price)
      setQty(response.data.Qty)
      setdiscription(response.data.discription)
      setidSeller(response.data.idSeller)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])




const handleSubmit = (e) => {

  e.preventDefault();
  const Productdata = {productImg,Titel,category,tags,price,Qty,discription,idSeller};
  axios.put(`https://shopmedic.herokuapp.com/product/update/${idproduct}`,Productdata)
  .then(res => {
  if(res.error){
  return false
  }else{
  console.log(res.data);
  history.push('/SellerProduct')
  }
  })
  }

		return (
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-white-500">
      <div className="flex flex-col shadow-xl ">
        <div className="py-6 px-14 bg-gradient-to-tr from-pink-500 to-pink-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
          <h2 className="text-white text-xs uppercase">Update Product</h2>
        </div>
        <div className=" py-6 px-8 space-y-5 bg-white flex flex-col ">
          <form className=" py-6 px-8 space-y-5 flex flex-col " onSubmit={handleSubmit}>
          <input type="text" placeholder="Product image" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={productImg}
            onChange={e => setproductImg(e.target.value)} />
                    <input type="text" placeholder="Titel" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={Titel}
            onChange={e => setTitel(e.target.value)} />

		                  <select className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={category}
                      onChange={e => setcategory(e.target.value)}>
                      <option>Categoy1</option>
                    <option>Categoy2</option>
                    <option>Categoy3</option>
                      <option>Categoy4</option>
                      </select>
                      <input type="text" placeholder="tags" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={tags}
            onChange={e => settags(e.target.value)} />
                      <input type="text" placeholder="price" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={price}
            onChange={e => setprice(e.target.value)} />
                                  <input type="text" placeholder="Qty" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={Qty}
            onChange={e => setQty(e.target.value)} />
                                  <input type="text" placeholder="description" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={discription}
            onChange={e => setdiscription(e.target.value)} />
                                  <input type="text" placeholder="idSeller" className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" value={idSeller}
            onChange={e => setidSeller(e.target.value)} />
          <button className="w-full py-3 bg-pink-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg">Update</button>
          </form>
        </div>
      </div>
    </div>
			
          )
        }
        
        export default EditeSellerProduct;