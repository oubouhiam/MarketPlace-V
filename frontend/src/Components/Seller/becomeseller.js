import'./Styles/becomeseller.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function LoginSeller() {




    return(
        <body class="become-seller-body">
        <section class="signup-section pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="signup-area">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="signup-left-area">
                                    <h2 class="title">Become a seller</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Error rem architecto commodi aut omnis officiis.</p>
                                    <div class="sign-up-form-area">
                                        <form class="signup-form">
                                            <div class="row">
                                                <div class="col-lg-12 form-group">
                                                    <input type="text" name="fname" placeholder="Your Full Name"/>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <input type="email" name="email" placeholder="Your Email"/>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <input type="text" name="username" placeholder="UserName"/>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <input type="file" name="file"/>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <input type="password" id="myInput" name="password" placeholder="password"/>
                                                    <a href="#0" id="show-pass-one" class="show-pass"><i class="fa fa-eye"></i></a>
                                                </div>
                                                <div class="col-lg-12 form-group text-left">
                                                    <span class="control">Already Seller with Us? <a href="/LoginSeller"> sign in</a></span>
                                                </div>
                                                <div class="col-lg-12 form-group">
                                                    <input type="submit" class="cmn-btn" value="sign up"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="signup-right-area">
                                    <h2 class="title">Welcome To Our Store </h2>
                                    <p>Please Read All Terms and Conditions</p>
                                    <p>By clicking on "Register" you agree to The Company's' Terms and Conditions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </body>
          )
        }
        export default LoginSeller;