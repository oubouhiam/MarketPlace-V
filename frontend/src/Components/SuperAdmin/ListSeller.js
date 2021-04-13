import'./styles/dashstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery'; 
import filetext from './text.txt';
// import { Document,pdfjs,Page   } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function ListSeller() {

  const history = useHistory();
  //----------- show gategory added in datatable------------
  const [seller , setseller] = useState(null);
  useEffect(()=>{
  
    axios.get(`http://localhost:8080/seller`)
      .then(function (response) {
        setseller(response.data)
      }).catch(function (err) {
        console.log(err);
    });
    
  },[])
  
// ---------------Delete admin-------------------

const deleteSeller = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`http://localhost:8080/seller/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}

const getIdSeller = (id)=>{
localStorage.setItem('idseller',id);
history.push('/editseller');

}
$(document).ready(function(){
  $(".displaymsg").click(function(){
    $(".modal-body").load(filetext);
  });
});



// const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
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
						<h2>Manage <b>Sellers</b></h2>
					</div>
				</div>
			</div>
                  <table className="table table-striped table-hover">
				<thead>
					<tr>
            <th>Username</th>
						<th>Status</th>
						<th>Type</th>
						<th>docummant</th>
            <th>Action</th>
            {/* <th>Product</th>
            <th>Bought</th>
            <th>Price</th>
						<th>Actions</th> */}
					</tr>
				</thead>
        { seller && seller.map(item =>(
                <tbody>
                <tr>
        <td>{item.Username}</td>
          <td>{item.type}</td>
          <td>{item.status}</td>
          <button data-toggle="modal" data-target="#exampleModal" class="displaymsg"> <td> {item.docummant}</td></button>
          <td>		
          <Link  onClick={()=> getIdSeller(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="fa fa-edit"></i></Link>
          <Link onClick={() => deleteSeller(item._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></Link>

        </td>
        </tr>
             </tbody>
             ))}
			</table>
      {/* <a className="table-a" variant="primary" href="/addadmins"><i className="fa fa-user-plus"></i>Button</a> */}
      {/* <Document file={filetext} 
      /> */}
      {/* <Page /> */}
      {/* <Document /> */}
      {/* <div>
      <Document
        file={filetext}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div> */}
      </div>
      </div>
      </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Docummant</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {/* Msgfromdoc */}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-closemsg" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                </main>
              </div>
        
        </body>
          )
        }
        export default ListSeller;