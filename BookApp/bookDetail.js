 var React = require('react')
 var request = require('superagent');

    var BookDetail = React.createClass({
          render: function(){
                return (
                    <div className = 'container' >
                    <div className = 'row'>
                    <div className="col-md-4">
                    <img src="http://placehold.it/150x226" />

                    </div>

                    <div className="col-md-8">
                      <div className = "bookTitle">Book Title</div>
                      <div className = "bookAuthor">by noname</div>
                      <div className = "bookinfo">
                        <span className = "bookStars">5 stars</span>
                        <span className = "bookRating"> 9/10 </span>
                        <span className = "bookReviews"> 11 reviews </span>
                      </div>
                      <div className = "bookBlurb"> Once upon a time......</div>
                      <div className = "bookType">paperback</div>
                      <div className = "bookPublisher" > Penguin books </div>
                      <table className="table table-striped">
                      <tr>
                      <td>Isbn</td>
                      <td>1111111111</td>
                      </tr>
                      <tr>
                      <td>Languge</td>
                      <td>English</td>
                      </tr>
                      <tr>
                      <td>Genre</td>
                      <td>Fiction</td>
                      </tr>
                      </table>

                      <form className = "comment-form">
                      <div className="form-group">
                      <label for="comment-section" class="col-sm-2 control-label">Leave a comment...</label>
                      <textarea className="form-control" name = "comment-section" rows="3"></textarea>
                      </div>
                      <button type="submit" className="btn btn-default">GO</button>
                      </form>

            

                    </div>

                    </div>
                    </div>

                    );
          }
        });
    exports.BookDetailPage = BookDetail ; 
    /*
    var ImagesSection = React.createClass({
          render: function(){
                var thumbImages = this.props.book.images.map(function(img,index) {
                  return (
                          <li>
                           <img key={index} src={img} />
                        </li>
                        ) ;
                    }.bind(this) );
                var mainImage = (
                      <div className="book-images">
                      <img src={this.props.bok.images[0]} 
                            className="phone" />
                    </div>
                    ) ;
              return (
                  <div>
                       {mainImage}
                       <h1>{this.props.book.title}</h1>
                       <p>{this.props.book.description}</p>
                       <ul className="phone-thumbs">
                           {thumbImages}
                       </ul>
                   </div>
                   );
          }
    })

    var BookDetail = React.createClass({
           getInitialState: function() {
               return { phone: null };
           },
         componentDidMount: function() {
            request.get(
                 'assets/books/' + this.props.params.isbn + '.json', function(err, res) {
                     var json = JSON.parse(res.text);
                    if (this.isMounted()) {
                        this.setState({ book : json});
              }
            }.bind(this));
          } ,
          render: function(){
              var display = <p>No book details</p> ; 
                var book = this.state.book ;
              if (book) {
                  display =  <ImagesSection book={book} /> ;
              }
                return (
                        <div>
                      {display}
                    </div>
                    );
          }
        });

    exports.BookDetail = BookDetail ;
    */

