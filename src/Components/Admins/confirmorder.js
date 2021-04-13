
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function ConfirmOrder() {



    return(
        
<body className="staytunt">
<div className="container cont">

<div className="form-div">
  <div className="title">
    <h1 className="text-uppercase title-text">Confirmation Seller</h1>
  </div>

  <div className="form-container">
    <form action="#" className="text-uppercase">
    {/* <label for="fname">SELECT TYPE:<br></br>
	<select name="" id="" className="selectSeller">
		<option value="Starter">Starter</option>
		<option value="Pro">Pro</option>
        <option value="Expert">Expert</option>
	</select>
    </label><br></br> */}
    <label for="fname">SELLER Received:<br></br>
	<select name="" id="" className="selectSeller">
		<option value="Unconfirmed">Unconfirmed</option>
		<option value="Confirmed">Confirmed</option>
	</select>
    </label><br></br>
      <label for="submit">
        <button type="submit" className="text-uppercase button">Submit</button>{" "}
        {/* <br></br> */}
        <a href="/ListSeller" className="text-uppercase button">Cancel</a>
      </label><br></br>
    </form>
  </div>

</div>
</div>
</body>
          )
        }
        export default ConfirmOrder;