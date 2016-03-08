var _ = require('lodash');

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

              }
         

/*getLogin : function(e, p) {
               var result = null ;
                 var index = _.findIndex(posts, function(post) {
                        return post.id == id;
                      } );      
                   if (index != -1) {                 
                      result = posts[index];
                      }
              return result ;
              }*/
        

             
          }


    exports.api = loginAPI ;