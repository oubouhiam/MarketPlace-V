import'./Styles/becomeseller.css';
import './Styles/dashboardseller.css';
import './Styles/statistic.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function DashboardSeller() {




    return(
        
<body>
    <div className="grid">      
    <aside className="sidenav sellernav">
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
            <ul className="navList navlistseller">
              <li className="navList__heading">Seller<i className="far fa-file-alt"></i></li>
                <li>
                <a href="/SellerProduct"><li className="subList__item">Product</li></a>
                <a href="/Packs"><li className="subList__item">Buy Packs</li></a>
                <a href="/Statistics"><li className="subList__item">Statistics</li></a>
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
         

     <div class="container pt-5 pb-5">
      <h1 class="text-center pt-4 pb-4 h4">This is Your Statistics of Your Shop</h1>
    <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p class="mb-0 text-muted">Sales</p>
                                                    <h2>1000MAD</h2>
                                                </div>
                                                <span class="badge badge-pill badge-cyan font-size-12">
                                                   <i class="fa fa-arrow-up"></i>
                                                    <span class="font-weight-semibold ml-1">6.71%</span>
                                                </span>
                                            </div>
                                            <div class="m-t-40">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge badge-primary badge-dot mr-2"></span>
                                                        <span class="text-gray font-weight-semibold font-size-13">Monthly Goal</span>
                                                    </div>
                                                    <span class="text-dark font-weight-semibold font-size-13 mt-2">70% </span>
                                                </div>
                                                <div class="progress progress-sm w-100 m-b-0 mt-2">
                                                    <div class="progress-bar bg-primary" style={{"width" : "70%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p class="mb-0 text-muted">Product</p>
                                                    <h2>10</h2>
                                                </div>
                                            </div>
                                            <div class="m-t-40">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge badge-primary badge-dot mr-2"></span>
                                                        <span class="text-gray font-weight-semibold font-size-13">Monthly Goal</span>
                                                    </div>
                                                    <span class="text-dark font-weight-semibold font-size-13 mt-2">70% </span>
                                                </div>
                                                <div class="progress progress-sm w-100 m-b-0 mt-2">
                                                    <div class="progress-bar bg-primary" style={{"width" : "70%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p class="mb-0 text-muted">FeedBacks</p>
                                                    <h2>-10</h2>
                                                </div>
                                                <span class="badge badge-pill badge-cyan badge-red">
                                                   <i class="fa fa-arrow-down"></i>
                                                    <span class="font-weight-semibold   ml-1">6.71%</span>
                                                </span>
                                            </div>
                                            <div class="m-t-40">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex align-items-center">
                                                        <span class="badge badge-primary badge-dot mr-2"></span>
                                                        <span class="text-gray font-weight-semibold font-size-13">Monthly Goal</span>
                                                    </div>
                                                    <span class="text-dark font-weight-semibold font-size-13 mt-2">60% </span>
                                                </div>
                                                <div class="progress progress-sm w-100 m-b-0 mt-2">
                                                    <div class="progress-bar bg-primary" style={{"width" : "70%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
      
                            </div>
    </div>

        </main>
      
      </div>

</body>
          )
        }
        export default DashboardSeller;