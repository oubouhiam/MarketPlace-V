import'./Styles/Dashboard.css';
import'./Styles/adddelivry.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import {useEffect} from 'react';
import { Link  } from 'react-router-dom';
function DelivryList() {

	// const history=useHistory();
	// const [Delivry_Name, setDelivry_Name] = useState();
	// const [Type, setType] = useState();
  const history = useHistory();
//----------- show gategory added in datatable------------
const [Delivry_Name, setDelivry_Name] = useState();
const [Delivry_Name2,setDelivry_Name2] = useState();
// const [ setType] = useState();
let idDelivry;
useEffect(()=>{
  axios.get(`http://localhost:8080/Delivry`)
    .then(function (response) {
      setDelivry_Name2(response.data)
      // setType(response.data)
    }).catch(function (err) {
      console.log(err);
  });
    
},[])

const handleSubmit = (e) => {
	
  e.preventDefault();
  const id = idDelivry.value;
const Delivrydata = {Delivry_Name,Type:id};
    axios.post(`http://localhost:8080/Delivry/add`,Delivrydata)
      .then(res => {
        if(res.error){
        return false
    }else{
       console.log(res.data);
       window.location.reload();
    }
  },[])
}






// ---------------Delete Delivry-------------------

const deleteDelivry = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`http://localhost:8080/Delivry/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('Delivry was deleted Succesfully ... ');
  
})
}

}

const getIdDelivry = (id)=>{
  localStorage.setItem('idadmin',id);
  history.push('/EditeAdmin');
  
  }



    return(
      
        <body>
            <div className="grid">      
            <aside className="sidenav adminnav">
          <div className="sidenav__brand">
            <i className="fa fa-car sidenav__brand-icon"></i>
            <a className="sidenav__brand-link" href="/">Pharma<span className="text-light">Place</span></a>
            <i className="fas fa-times sidenav__brand-close"></i>
          </div>
          <div className="sidenav__profile">
            <div className="sidenav__profile-avatar"></div>
            <div className="sidenav__profile-title text-light">Yassine ch</div>
          </div>
          <div className="row row--align-v-center row--align-h-center">
            <ul className="navList navlistadmin">
              <li className="navList__heading">Clients<i className="far fa-file-alt"></i></li>
                <li>
                <a href="/ProblemOrder"><li className="subList__item">List delivery problems</li></a>
                <a href="/ClientOrder"><li className="subList__item">Confirm orders</li></a>
                <a href="/Delivery"><li className="subList__item">Add delivery people</li></a>
              </li>
            </ul>
          </div>
        </aside>
              
                <main className="main">
                  <div className="main-header">
                    <div className="main-header__intro-wrapper">
                      <div className="main-header__welcome">
                        <div className="main-header__welcome-title text-light">Welcome, Yassine</div>
                        <div className="main-header__welcome-subtitle text-light">How are you today?</div>
                      </div>
                      <div className="quickview">
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-overview">
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--document">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light"> Managment <strong>Seller</strong></h3>
                        <p className="overviewCard-subtitle">19</p>
                      </div>
                    </div>
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--calendar">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Admin</strong></h3>
                        <p className="overviewCard-subtitle">15</p>
                      </div>
                    </div>
                    
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--mail">
                        <i className="fa fa-user"></i>
                      </div>

                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Super Admin</strong></h3>
                        <p className="overviewCard-subtitle">50</p>
                      </div>

                    </div>
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--photo">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Seller</strong></h3>
                        <p className="overviewCard-subtitle">17</p>
                      </div>
                    </div>  
                  </div>
                  <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title table-title-admin">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Delivery Man</b></h2>
					</div>
				</div>
			</div>
                  <table className="table table-striped table-hover">
				<thead>
					<tr>
                    <th>ID</th>
            <th>Delivry Name</th>
            <th>Type</th>
						<th>Actions</th>
					</tr>
			</thead>        
        { Delivry_Name2 && Delivry_Name2.map(item =>(
                <tbody>
                <tr>
        <td>1</td>
          <td>{item.Delivry_Name}</td>
          <td>{item.Type}</td>
          <td>		
          <Link  onClick={()=> getIdDelivry(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></Link>
          <Link onClick={() => deleteDelivry(item._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></Link>

        </td>
        </tr>
             </tbody>
             ))}
			</table>


      <input type="checkbox" name="showForm" id="showForm" class="showForm"/>

<div class="formdelevery">
  <h2>Add Delivry Man</h2>
  <form data-parsley-validate onSubmit={handleSubmit}>
    <div class="left section">
    <input type="text" name="name" placeholder="Delevery Name" required value={Delivry_Name}
                onChange={e => setDelivry_Name(e.target.value)}/>
      <select name="" id="" ref={(e) => idDelivry = e}>
		<option value="Standard">Standard</option>
		<option value="Express">Express</option>
	</select>
    </div>
    <button type="submit" class="sendForm left">Send</button>
    <label for="showForm" class="closeFormLabel left">Cancel</label>
  </form>

</div>      
<label for="showForm" class="table-a"><i className="fa fa-user-plus"></i>ADD</label>

      </div>
      </div>
      </div>
                </main>
              </div>
        
        </body>
          )
        }
        export default DelivryList;