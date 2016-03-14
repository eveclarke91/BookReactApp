var React = require('react')
var api =  require ('./loginAPI').api;
var loggedinapi =  require ('./loginAPI').loggedinapi;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route

    var LogoutPage = React.createClass({
        componentDidMount: function() {
           this.context.router.push('/');
        },
          render: function(){
            loggedinapi.logout();
            
            return (
                <div></div>
            );
          }
        });

    LogoutPage.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    exports.LogoutPage = LogoutPage;