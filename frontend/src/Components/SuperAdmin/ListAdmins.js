import'./styles/dashstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function ListAdmins(props) {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [admin , setAdmin] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/admin`)
    .then(function (response) {
      setAdmin(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

// ---------------Delete admin-------------------

const deleteadmin = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`http://localhost:8080/admin/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}
const getIdadmin = (id)=>{
localStorage.setItem('idadmin',id);
history.push('/EditeAdmin');

}
// const logOut =()=>{

//   localStorage.removeItem('token')
//   this.props.history.push('/superAdmin');
//   }
    return(
      
        <body>
            <div className="grid">      
                <aside className="sidenav">
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
                    <ul className="navList">
                      <li className="navList__heading">Admin<i className="far fa-file-alt"></i></li>
                        <li>
                        <a href="/AdminList"><li className="subList__item">List</li></a>
                        <a href="/addadmins"><li className="subList__item">ADD</li></a>
                      </li>
                      <li className="navList__heading">Seller<i className="far fa-file-alt"></i></li>
                      <li>
                      <a href="/ListSeller"><li className="subList__item">List</li></a>
                    </li>
                    </ul>
                    <Link > <a href="/SuperAdmin" >
            <div className="logoutdash">
            LogOut
            </div>
            </a>
            </Link>
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
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Admins</b></h2>
					</div>
				</div>
			</div>
                  <table className="table table-striped table-hover">
				<thead>
					<tr>
            <th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Login</th>
						<th>Actions</th>
					</tr>
				</thead>

        { admin && admin.map(item =>(
                <tbody>
                <tr>
        <td>{item.FirstName}</td>
          <td>{item.LastName}</td>
          <td>{item.Email}</td>
          <td>{item.login}</td>
          <td>		
          <Link  onClick={()=> getIdadmin(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></Link>
          <Link onClick={() => deleteadmin(item._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></Link>

        </td>
        </tr>
             </tbody>
             ))}
			</table>
      <a className="table-a" variant="primary" href="/addadmins"><i className="fa fa-user-plus"></i>Button</a>

      </div>
      </div>
      </div>
                </main>
              </div>
        
        </body>
          )
        }
        export default ListAdmins;