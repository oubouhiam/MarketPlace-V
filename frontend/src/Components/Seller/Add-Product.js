// import'./styles/addstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function AddSellerProduct() {



    return(

      <body class="staytunt">
      <div class="container cont">
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2 well">
				<div class="col-sm-12 form-legend">
					<h2>ADD Product</h2>
				</div>
				<div class="col-sm-12 form-column">
					<form action="success" method="post">
						<div class="form-group">
							<label for="fname">Product Name:</label>
							<input type="text" id="Pname" name="Pname" class="form-control" required/>
						</div>
						<div class="form-group">
							<label for="lname">QTY:</label>
							<input type="text" id="qty" name="qty" class="form-control"required/>
						</div>
						<div class="form-group">
							<label for="country">Price</label>
							<input type="number" id="Price" name="Price" class="form-control" required/>
						</div>
						<div class="form-group">
							<label for="zip-code">Images:</label>
							<input type="file" id="Image" name="Image" class="form-control" required/>
						</div>
            <button type="submit" class='btn'>ADD</button>
            <a  href="/SellerProduct" class='btn'>Back</a>
					</form>
				</div>
			</div>
      </div>
		</div>
    </body>
          )
        }
        export default AddSellerProduct;