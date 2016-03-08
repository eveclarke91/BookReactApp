var api =  require ('./loginAPI').api;
var React = require('react')
var _ = require('lodash') ;



    var LoginList = React.createClass({
        render : function() {
          var logins = api.getAll();
          var items = logins.map(function(login,index) {
                 return <LoginItem key={index} login={login} /> ;
             }.bind(this) )
          return (
            <div>
                  {items}
                  </div>
            );
        }
   }) ;
        
        var LoginItem = React.createClass({
                render : function() {
                  return (
                        <div >
                          <p>{this.props.login.name}</p>
                          <p>{this.props.login.email}</p>
                          <p>{this.props.login.password}</p>
                        </div>  
                  );
                }
           }) ;        

    var RegisterPage = React.createClass({
            getInitialState: function() {
               return { name: '', email: '', password: '', confirm: ''};
            },
            addNewLogin: function(n, e, p){
                api.add(n, e, p);
                this.setState({name: '', email: '', password: '', confirm: ''});
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
                this.addNewLogin(name, email, password);
            },
          render: function(){
                return (
                        <div>
                        <h1>Register Page</h1>

                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
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
                                      
                                      <button type="submit" className="btn btn-default" onClick={this.onSubmit}>submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <LoginList />
                                </div>
                            </div>
                        </div>
                    );
          }
        });

    exports.RegisterPage = RegisterPage;