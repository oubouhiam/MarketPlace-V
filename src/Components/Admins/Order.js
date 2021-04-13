import'./Styles/order.css';
import logo from './Styles/product.jpg'

function Adminorder() {


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



<div class="container grid-container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={logo} alt="list"/>
        <div class="card-body">
          <h5 class="card-title">Dolipran</h5>
          <p class="card-text">Client : Yassine</p>
          <p class="card-text">Adress : Agadir</p>
          <p class="card-text">Price : 150MAD</p>
          <p class="card-text">Status : Unconfimed</p>
          <button type="button" class="closemodel1" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Confirm</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={logo} alt="list"/>
        <div class="card-body">
          <h5 class="card-title">Dolipran</h5>
          <p class="card-text">Client : Yassine</p>
          <p class="card-text">Adress : Agadir</p>
          <p class="card-text">Price : 150MAD</p>
          <p class="card-text">Status : Unconfimed</p>
          <button type="button" class="closemodel1" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Confirm</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={logo} alt="list"/>
        <div class="card-body">
          <h5 class="card-title">Dolipran</h5>
          <p class="card-text">Client : Yassine</p>
          <p class="card-text">Adress : Agadir</p>
          <p class="card-text">Price : 150MAD</p>
          <p class="card-text">Status : Unconfimed</p>
          <button type="button" class="closemodel1" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Confirm</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={logo} alt="list"/>
        <div class="card-body">
          <h5 class="card-title">Dolipran</h5>
          <p class="card-text">Client : Yassine</p>
          <p class="card-text">Adress : Agadir</p>
          <p class="card-text">Price : 150MAD</p>
          <p class="card-text">Status : Unconfimed</p>
          <button type="button" class="closemodel1" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Confirm</button>
        </div>
      </div>
    </div>
    </div>
    
  </div>
  


        </main>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmation Order</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="#">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
	<select name="" id="" className="form-control">
		<option value="Unconfirmed">Unconfirmed</option>
		<option value="Confirmed">Confirmed</option>
	</select>
          </div>
          <div class="modal-footer">
        <button type="button" class="closemodelorder" data-dismiss="modal">Close</button>
        <button  type="submit" class="savelorder">Send message</button>
      </div>
          </form>
      </div>

      
    </div>
    
  </div>
</div>
      </div>

</body>
  )
}
export default Adminorder;