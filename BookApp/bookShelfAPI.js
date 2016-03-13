var _ = require('lodash');

   
    var shelf = [
       {  
          id:1,
          userID: 1 ,
          bookISBN : '211-555-12-12',
          status : 'Read',
          rating : 4,
          dateAdded: '02/05/16'
          
           
        },

        {  
          id:2,
          userID: 1 ,
          bookISBN : '111-223-23-22',
          status : 'Reading',
          rating : 4,          
          dateAdded: '11/03/14'
          
           
        },


        {  
          id:3,
          userID: 1 ,
          bookISBN : '922-998-34-21',
          status : 'Reading',
          rating : 4,
          dateAdded: '10/03/16'
          
           
        },

        {  
          id:4,
          userID: 1 ,
          bookISBN : '144-344-34-44',
          status : 'Read',
          rating : 4,
          dateAdded: '02/05/16'
          
           
        },

        {  
          id:5,
          userID: 1 ,
          bookISBN : '332-311-31-21',
          status : 'Read',
          rating : 4,
          dateAdded: '01/01/16'
          
           
        }
           




        ];

         var shelfAPI = {
          getAllShelfBooks : function(i) {
            var allbooks = [];
            shelf.map(function(element){
              if(element.userID == i){
                allbooks.push({ 'id': element.id, userID : element.userID, bookISBN : element.bookISBN, rating: element.rating, status: element.status});
              }
            })

              return allbooks;
          },


         getShelfBookStatus : function(s, i) {
          var bookStatus = [];
          shelf.map(function(element){
            if (element.userID == i && element.status == s){
              bookStatus.push({'id': element.id, bookISBN : element.bookISBN, rating: element.rating, dateAdded: element.dateAdded });

            }

          })
          return bookStatus;

         },



         add : function(u,i,s,r) {
              var id = 1 ;
              var last = _.last(shelf) ;
              if (last) {
                 id = last.id + 1 ;
              }

                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();

                if(dd<10) {
                    dd='0'+dd
                } 
                if(mm<10) {
                    mm='0'+mm
                } 
                var d = dd+'/'+mm+'/'+yyyy;

              shelf.push({ 'id': id, userID: u, bookISBN : i, status: s, rating: r, dateAdded: d}) ;
              console.log(shelf[id-1]);

              },



         remove : function(i){
          var e;
          shelf.map(function(element){
            if(element.id == i){
            e = element;
              }
            })
            var i = shelf.indexOf(e);
            shelf.splice(i, 1);
          },


          edit : function(i, r, s){
            var index = _.findIndex(shelf, function(item) {
               return item.id == i;
            });  
               
           if (index != -1) {
             shelf[index].status = s;
              shelf[index].rating = r;
            }
          },
         


      
          
    }
    
    exports.shelfAPI = shelfAPI ;
    