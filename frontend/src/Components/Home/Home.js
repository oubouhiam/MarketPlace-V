import React from 'react';
import './style/home.css';
import product2 from './style/pro.png';
const Home = () => (
  // <body>
  <body>
    
<div class="container">
    <div class="navbar">
      <div class="logo">
        <a href="/">logo<img alt="logo" width="125px" /></a>
      </div>
      <nav>
      <ul id="MenuItems">
        <li><a href="/signUp">SignUp</a></li>
      </ul>
    </nav>
    </div>
  </div>
  
  <div class="small-container">
    <div class="row row-2">
      <h2>All Products</h2>
      <nav>
      <ul id="MenuItems">
        <li><a href="/">Category 1</a></li>
        <li><a href="/">Category 2</a></li>
        <li><a href="/">Category 3</a></li>
        <li><a href="/">Category 4</a></li>
        <li><a href="/">Category 5</a></li>
      </ul>
      </nav>
      <select>
      <option value="">Default Shorting</option>
      <option value="">Short by price</option>
      <option value="">Short by Date</option>
      <option value="">Short by Brand</option>
    </select>
    <nav>
    <ul id="MenuItems">
        <li><i class="fa fa-flag"></i><a href="/">FR</a></li>
        <li><i class="fa fa-flag"></i><a href="/">AR</a></li>
      </ul>
      </nav>

    
    </div>
    <a href="/">$</a>{" "}
    <a href="/">MAD</a>
    <div class="row">
      <div class="col-4">
        <img src={product2} alt="" width="10%" />
        <h4>Dolipran fik skhana kolchi hna gha b</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>150MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Anti rwah fik lmenzla </h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>120MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Mafik walo ta howa merhba</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <p>10 MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" width="10%" />
        <h4>Dolipran fik skhana kolchi hna gha b</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>150MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Anti rwah fik lmenzla </h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>120MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Mafik walo ta howa merhba</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <p>10 MAD</p>
      </div>
  
  
      <div class="col-4">
        <img src={product2} alt="" width="10%" />
        <h4>Dolipran fik skhana kolchi hna gha b</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>150MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Anti rwah fik lmenzla </h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p>120MAD</p>
      </div>
  
      <div class="col-4">
        <img src={product2} alt="" />
        <h4>Mafik walo ta howa merhba</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <p>10 MAD</p>
      </div>
  
  
  

    </div>
  
  </div>

  <div class="footer">
    <div class="container">
      <div class="row">  
        <div class="footer-col-1">
          <img alt="logo" />
          <p>
        Welcome to our Store
        You can now view client in the browser.
        You can now view client in the browser.
        You can now view client in the browser.

          </p>
        </div>
  
        
      </div>
    </div>
  </div>
  
 
  </body>
    );

export default Home;