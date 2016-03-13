 var React = require('react')
 var request = require('superagent');
 var bookAPI = require('./data').bookAPI;
 var commentAPI = require('./commentsAPI').commentAPI;  
 var loginAPI =  require ('./loginAPI').api;
 var userDetails = require('./loginAPI').loggedin;
 


    var BookDetail = React.createClass({
          getInitialState: function() {
               return { bookinfo: null };
           },
         componentDidMount: function() {
            var isbn = this.props.params.isbn;
            var bookdata = bookAPI.getBook(isbn);
            this.setState({bookinfo: bookdata});  
          } ,
          render: function(){
            var display = <h1>No Details</h1>
            var bookdetails = this.state.bookinfo;

            if(bookdetails){
              display = (
                <div className = 'container' >
                      <div className = 'row'>
                        <div className="col-md-4">
                          <img src={bookdetails.imageUrl}  height="377" width="250"/>
                        </div>

                        <div className="col-md-8">
                          <div className = "bookTitle">{bookdetails.title}</div>
                          <div className = "bookAuthor">{bookdetails.author}</div>
                          <div className = "bookinfo">
                            <span className = "bookStars">{bookdetails.starRating}</span>
                            <span className = "bookRating">{bookdetails.rating}</span>
                            <span className = "bookReviews">{bookdetails.reviews}</span>
                          </div>
                          <div className = "bookBlurb"> {bookdetails.description}</div>
                          <div className = "bookType">{bookdetails.printType}</div>
                          <div className = "bookPublisher" > {bookdetails.publisher}</div>
                          <table className="table table-striped">
                            <tr>
                            <td>Isbn</td>
                            <td>{bookdetails.isbn}</td>
                            </tr>
                            <tr>
                            <td>Languge</td>
                            <td>{bookdetails.language}</td>
                            </tr>
                            <tr>
                            <td>Genre</td>
                            <td>{bookdetails.genre}</td>
                            </tr>
                          </table>
                          
                        </div>
                      </div>
                      <div className = "row" >

                        <CommentForm isbn = {bookdetails.isbn} />
                      </div>
                    </div>

                );
            }
                return (
                  <div>
                    {display}
                    </div>
                    );
          }
        });

    


    var CommentArea = React.createClass({
      
       render: function(){
        var allComments = commentAPI.getAllComments(this.props.isbn);

        if(allComments.length > 0 ){
          var items = allComments.map(function(commentitem){
            return <CommentItem comment={commentitem} />;
          }.bind(this) )
        }

        var display = (
          <div className="col-md-12">
            <div className = "comment-review">
                Comment Section
              </div>
              <div>No Comments</div>

            </div>);

        if(items){
          display = (
            <div className="col-md-12">          
              <div className = "comment-review">
                Comment Section
              </div>
              {items}
            </div>
            );
        }
        return(
          <div>{display}</div>          
          );
       }

    });

    var CommentItem = React.createClass({   
       render: function(){
        return(   
          <div className = "commentItem">       
            <div className = "commentHeader">
              <span className = "userName">{loginAPI.getName(this.props.comment.userID)}</span>
              <span className = "rating">5/10</span>
              <span className = "reviewDate">{this.props.comment.date}</span>
            </div>
            <div className = "commentBody">{this.props.comment.content}</div>
          </div>
          );
       }
    });


    var CommentForm = React.createClass({
      getInitialState: function() {
               return { comment: '', message: ''};
            },
            addNewComment: function(c){
                var u = userDetails[0].id;
                var i = this.props.isbn;

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
               
                commentAPI.add(u, i, d, c);
                this.setState({message: 'Thank you.'})
                this.setState({comment: ''});
            },

             handleCommentChange: function(e) {
                this.setState({comment : e.target.value});
            },

            onSubmit : function(e) {
                e.preventDefault();
                var comment = this.state.comment.trim();
                this.addNewComment(comment);
            },

      render: function() {
        return(
          <div>
          <div className="row">
          <div className="col-md-12">
          {this.state.message}
          </div>
          </div>
           <form className = "comment-form">
            <div className="form-group">
            <label htmlFor="comment-section" className="col-sm-2 control-label">Leave a comment...</label>
            <textarea className="form-control" name = "comment-section" rows="3" onChange={this.handleCommentChange}></textarea>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.onSubmit}>GO</button>
          </form>
          <CommentArea isbn={this.props.isbn}/>
          </div>

          );


      }



    })

    

 exports.BookDetailPage = BookDetail ; 
 

