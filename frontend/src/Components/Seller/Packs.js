import'./Styles/packs.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function PacksSeller() {



    return(
<body>

<div id="generic_price_table">   
<section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="price-heading clearfix">
                        <h1>Packs Pricing</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container packcontainer">
            
            <div class="row">
                <div class="col-md-4">
                

                    <div class="generic_content clearfix">
                        
                        <div class="generic_head_price clearfix">
                        

                            <div class="generic_head_content clearfix">
                            
                            
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Pro</span>
                                </div>
           
                                
                            </div>

                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">MAD</span>
                                    <span class="currency">3000</span>
                                    <span class="month">/MON</span>
                                </span>
                            </div>
                 
                            
                        </div>                            
  
                        <div class="generic_feature_list">
                        	<ul>
                            	<li><span>50</span> produits</li>
                                <li><span>Livraison</span> Standard</li>
                            </ul>
                        </div>
 
                        <div class="generic_price_btn clearfix">
                        	<a href="/">BUY</a>
                        </div>
                             
                    </div>
      
                        
                </div>
                
                <div class="col-md-4">
                
 
                    <div class="generic_content active clearfix">
            
                        <div class="generic_head_price clearfix">
                        
             
                            <div class="generic_head_content clearfix">
                     
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>Expert</span>
                                </div>
                          
                                
                            </div>

                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">MAD</span>
                                    <span class="currency">5000</span>
                                    <span class="month">/MON</span>
                                </span>
                            </div>
                       
                            
                        </div>                            

                        <div class="generic_feature_list">
                        	<ul>
                            	<li><span>Unlimited</span> Product</li>
                                <li><span>Express delivery</span> by MarketStore</li>
                            </ul>
                        </div>
          
                        
            
                        <div class="generic_price_btn clearfix">
                        	<a href="/">BUY</a>
                        </div>
                                    
                    </div>
                    
                    
                </div>
               
            </div>	
           
            
        </div>
    </section>   
    <footer>
    	<a class="bottom_btn" href="/DashboardSeller">Back</a>
    </footer>          
</div>
</body>
          )
        }
        export default PacksSeller;