 var React = require('react')
 var request = require('superagent');
 var bookAPI = require('./data').bookAPI;
 var commentAPI = require('./commentsAPI').commentAPI;  
 var loginAPI =  require ('./loginAPI').api;


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

                          <form className = "comment-form">
                            <div className="form-group">
                            <label htmlFor="comment-section" className="col-sm-2 control-label">Leave a comment...</label>
                            <textarea className="form-control" name = "comment-section" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-default">GO</button>
                          </form>
                        </div>
                      </div>
                      <div className = "row" >
                        <CommentArea isbn={bookdetails.isbn}/>
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

    

 exports.BookDetailPage = BookDetail ; 
 

