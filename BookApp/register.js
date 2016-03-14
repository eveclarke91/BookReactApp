var api =  require ('./loginAPI').api;
var React = require('react')
var _ = require('lodash') ;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link



   
    var RegisterPage = React.createClass({
        validateEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
            getInitialState: function() {
               return { name: '', email: '', password: '', confirm: '', message: '', emailerror: '', passworderror: ''};
            },
            addNewLogin: function(n, e, p){
                api.add(n, e, p);
                this.setState({message: (<div className="validation-success">Thank you for registering, proceed to <Link to={ '/'}>Login Page</Link></div>)})
                this.setState({name: '', email: '', password: '', confirm: '', emailerror: '', passworderror: ''});
            },
        
            handleNameChange: function(e) {
                this.setState({name : e.target.value});
            },
            handleEmailChange: function(e) {
                this.setState({email : e.target.value});
            },
            handlePasswordChange: function(e) {
                this.setState({password : e.target.value});
            },
            handleConfirmPassChange: function(e) {
                this.setState({confirm : e.target.value});
            },

            onSubmit : function(e) {
                e.preventDefault();
                var name = this.state.name.trim();
                var email = this.state.email.trim();
                var password = this.state.password.trim();
                var confirm = this.state.confirm.trim();
                var emailtest = this.validateEmail(email);

                if(!emailtest){
                    this.setState({emailerror: (<div className="validation-error">Email Error</div>)})
                }
                if(password !== confirm){
                    this.setState({passworderror: (<div className="validation-error">password error</div>)})               
                }

                if(emailtest && password == confirm){
                    this.addNewLogin(name, email, password);                    
                }else{
                    this.setState({ });
                }

                
            },
          render: function(){
                return (
                        <div>

                            <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                            <h2>Register Here</h2>
                            {this.state.message}

                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-md-offset-4">
                                    <form>
                                    <div className="form-group">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" className="form-control" id="Name" placeholder="Name" onChange={this.handleNameChange} />
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="Email1">Email address</label>
                                        <input type="email" className="form-control" id="Email1" placeholder="Email" onChange={this.handleEmailChange}/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="Password1">password</label>
                                        <input type="password" className="form-control" id="Password1" placeholder="Password" onChange={this.handlePasswordChange}/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="Password2">Confirm password</label>
                                        <input type="password" className="form-control" id="Password2" placeholder="Confirm Password" onChange={this.handleConfirmPassChange}/>
                                      </div>
                                      
                                      <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                                    </form>
                                    {this.state.emailerror}
                                    {this.state.passworderror}
                                </div>
                            </div>
                            
                        </div>
                    );
          }
        });

    exports.RegisterPage = RegisterPage;