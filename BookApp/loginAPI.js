var _ = require('lodash');

    var loggedin = [{
      id: 0 ,
      name : '',
      email : ''           
    }];

    var logins = [
       {  id: 1 ,
          name : 'Ian Pan',
          email : 'ip@gmail.com',
          password : 'password'
           
        },
       {  id: 2 ,
          name : 'Dave Don',
          email : 'dd@gmail.com',
          password : 'password'
           
        },
        { 
          id: 3,
          name : 'Cho Lane',
          email : 'cl@gmail.com',
          password : 'password'
        },
        { 
          id: 4,
          name : 'Penny Pen',
          email : 'pp@gmail.com',
          password : 'password'
        }
    ] ;


     var loginAPI = {
          getAll : function() {
              return logins;
          },

         add : function(n,e,p) {
              var id = 1 ;
              var last = _.last(logins) ;
              if (last) {
                 id = last.id + 1 ;
              }
                  console.log( 'Id =  ' + id);
              logins.push({ 'id': id,  
                       name: n, email : e, password: p}) ;

              },

          getid: function(e){
            var index = _.findIndex(logins, function(login) {
              return login.email == e;
            });
            return logins[index].id; 
          },

          getName: function(i){
            var index = _.findIndex(logins, function(login) {
              return login.id == i;
            });
            return logins[index].name; 
          },
          
          verify: function(e,p){
            var index = _.findIndex(logins, function(login) {
                        return login.email == e;
                      } );      
             if (index != -1) {              
                if (logins[index].password == p){
                  return true;
                }else{
                  return false;
                }            
            }else{
              return false;
            }
        }
    }
    var loggedinAPI = {
          getLoggedIn : function() {
            if(loggedin[0].id > 0){
              return true;
            }else{
              return false;
            }
          },

         login: function(i,n,e) {
            loggedin[0].id = i;
            loggedin[0].name = n;
            loggedin[0].email = e;
          },          
    }


    exports.api = loginAPI ;
    exports.loggedinapi = loggedinAPI ;
    exports.loggedin = loggedin;