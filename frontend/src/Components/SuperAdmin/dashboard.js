// import {useEffect, useState} from 'react';

// import { Link  } from 'react-router-dom';
// import axios from 'axios';
import'./styles/dashstyle.css';

function Question() {


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
            <a href="/Logout" >
            <div className="logoutdash">
            LogOut
            </div>
            </a>
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
         
        </main>
      
      </div>

</body>
  )
}
export default Question;