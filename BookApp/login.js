var React = require('react')
var api =  require ('./loginAPI').api;
var loggedinapi =  require ('./loginAPI').loggedinapi;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var browserHistory = Router.browserHistory;
//var Redirect = Router.Redirect; 
//import { browserHistory } from 'react-router'

//var RouterPropTypes = require('react-router').PropTypes;

//Navbar.contextTypes = {
  //history: RouterPropTypes.history,
//};






    var LoginPage = React.createClass({

        getInitialState: function() {
               return {email: '', password: '', message: ''};
            },
           
           
            handleEmailChange: function(e) {
                this.setState({email : e.target.value});
            },
            handlePasswordChange: function(e) {
                this.setState({password : e.target.value});
            },
            

            verifyLogin: function(e, p) {
               var valid = api.verify(e, p);

               if(valid){
                var id = api.getid(e);
                loggedinapi.login(id,e,p);
                this.context.router.push('/books');

                //this.browserHistory.pushState(null, '/register');

                //<Redirect from='/login' to='/register' />
                //this.context.router.transitionTo('register');
                //this.context.router.transitionTo('/register');
                //window.location = "http://localhost:8080/BookApp/";// cant figure out this redirecting shit
                //<Redirect from="/login" to="/register"/>
                //this.transitionTo('/register');

                //mixins: [ History ],
                //navigateToHelpPage () {
                    //this.history.pushState(null, `/register`);
                //}
                //Router.browserHistory.push('/BookApp/#/register');
                //browserHistory.push('BookApp/#/register');

               }else{
                this.setState({message: 'Login not found'});

               }


            },



            onSubmit : function(e) {
                e.preventDefault();
                var email = this.state.email.trim();
                var password = this.state.password.trim();
                this.verifyLogin(email, password);
            },
          render: function(){
                return (
                        <div>
                        <h1>Login Page</h1>

                            <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                            {this.state.message}
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="Email1">Email address</label>
                                        <input type="email" className="form-control" id="Email1" placeholder="Email" onChange={this.handleEmailChange}/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="Password1">password</label>
                                        <input type="password" className="form-control" id="Password1" placeholder="Password" onChange={this.handlePasswordChange}/>
                                      </div>
                                      <button type="submit" className="btn btn-default" onClick={this.onSubmit}>submit</button>
                                    </form>
                                    <Link to={ '/register'}>Register Here</Link>
                                </div>
                            </div>
                        </div>
                    );
          }
        });

    LoginPage.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    exports.LoginPage = LoginPage;