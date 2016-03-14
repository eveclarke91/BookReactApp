var _ = require('lodash');

   
    var comments = [
       {  
          id:1,
          userID: 1 ,
          bookISBN : '211-555-12-12',
          date : '02-01-16',
          content : 'This book is the best!!'
           
        },

        {  
          id:2,
          userID: 2,
          bookISBN : '211-555-12-12',
          date : '06-01-11',
          content : 'My Favourite Book!'
           
        },

        {   
          id:3,
          userID: 2 ,
          bookISBN : '717-722-62-63',
          date : '09-09-16',
          content : 'Read this book again and still love it!'
           
        },

        {   
          id:4,
          userID: 1 ,
          bookISBN : '717-722-62-63',
          date : '12-01-15',
          content : 'This book was so interesting. It keeps you hooked right to the end.'
           
        },

        {   
          id:5,
          userID: 1 ,
          bookISBN : '717-722-62-63',
          date : '12-01-15',
          content : 'Not as good as i thought it would be'
           
        },

        {   
          id:6,
          userID: 2 ,
          bookISBN : '404-222-11-11',
          date : '12-01-15',
          content : 'Good Read. Definately recommend it.'
           
        },

        {   
          id:7,
          userID: 1 ,
          bookISBN : '688-108-11-11',
          date : '12-01-15',
          content : 'Excellent book.'
           
        },


        ];

        var commentAPI = {
          getAllComments : function(i) {
            var allComments = [];
            comments.map(function(element){
              if(element.bookISBN == i){
                allComments.push({ 'id': element.id, userID: element.userID, bookISBN : element.bookISBN, date: element.date, content: element.content});
              }
            })

              return allComments;
          },

         add : function(u,i,d,c) {
              var id = 1 ;
              var last = _.last(comments) ;
              if (last) {
                 id = last.id + 1 ;
              }
              comments.push({ 'id': id, userID: u, bookISBN : i, date: d, content: c}) ;
              console.log(comments[id-1]);

              },

          
    }
    
    exports.commentAPI = commentAPI ;
    