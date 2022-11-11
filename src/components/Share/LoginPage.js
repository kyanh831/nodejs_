import React, { Component } from 'react'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            errMessage: ''
        }
    }
    handleShowHidePassword = () => {

        this.setState({
            showPassword: !this.state.showPassword
        })
        console.log(this.state.showPassword);
    }
    render() {
        return (
            <>  
                <section className="coming-wrap sec-space text-center">
                    <div className="container">
                        <div className='box-login row'>
                            <div className='col-lg-4 col-md-4 col-xs-2 box-login-img'>
                            </div>
                            <div className='col-lg-8 col-md-8 col-xs-10 box-login-content'>
                                <div className='box-login-title'>
                                    <h3>Wellcom to <strong>kyAnhStore247</strong></h3>
                                    <a href="/"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" />  </a>
                                </div>
                                <h1>LOGIN</h1>
                                <form>
                                    <div className='box-login-input'>
                                        <div className='login-input-name'>
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                        </div>
                                        <div className='login-input-pass'>
                                            <div className="form-floating">
                                                <input type={`${this.state.showPassword ? "text" : "password"}`} className="form-control" id="floatingPassword" placeholder="Password"/>
                                                <label htmlFor="floatingPassword">Password</label>
                                                <i className={`fa-regular ${this.state.showPassword ? "fa-eye-slash" : "fa-eye"}`} onMouseDown={()=> this.handleShowHidePassword()} onMouseUp={()=> this.handleShowHidePassword()}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn-login'>
                                        <button className='btn'>Create new</button>
                                        <button className="theme-btn-sm-2 btn-block" type="submit">LOGIN <i className="fa fa-long-arrow-right"></i> </button>
                                    </div>          
                                </form>
                                <div className='login-by-f-g'>
                                    <div className='forget-pass'>
                                        <a href='/'>Forget password?</a>
                                    </div>
                                    <p>Or login by</p>
                                    <div className='login-icon'>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-google-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-logo pb-15">
                            <a href="/"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" />  </a>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default LoginPage