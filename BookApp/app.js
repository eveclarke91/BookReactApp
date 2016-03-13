 var ReactDOM = require('react-dom')
    var React = require('react')
    var ReactRouter = require('react-router')
    var Router = ReactRouter.Router
    var Route = ReactRouter.Route
    var Link = ReactRouter.Link
    var IndexRoute = ReactRouter.IndexRoute
    var browserHistory = Router.browserHistory;

    var loginapi =  require ('./loginAPI').api;
    var loggedinapi =  require ('./loginAPI').loggedinapi;

    var Login = require('./login.js' ).LoginPage;
    var Register = require('./register.js' ).RegisterPage;    
    var BookDetail = require('./bookDetail.js' ).BookDetailPage;
    var Comment = require('./comment.js').CommentPage;
    var shelfAPI = require('./bookShelfAPI.js').shelfAPI;
    var userDetails = require('./loginAPI').loggedin;
    var Shelf = require('./bookShelf.js').BookShelfPage;
    var userDetails = require('./loginAPI').loggedin;

    var Books = require('./data').allBooks ;    
    var _ = require('lodash');    

    var SelectBox = React.createClass({
      handleChange : function(e, type,value) {
           e.preventDefault();
           this.props.onUserInput( type,value);
      },
      handleTextChange : function(e) {
            this.handleChange( e, 'search', e.target.value);
      },
      handleSortChange : function(e) {
          this.handleChange(e, 'sort', e.target.value);
      },
      render: function(){
           return (
                <div className="col-md-12">
                <div className = "search">
               <input type="text" placeholder="Search" 
                          value={this.props.filterText}
                          onChange={this.handleTextChange} />
               </div>
               <div className = "sort">
                 Sort by:
                  <select id="sort" value={this.props.order } 
                         onChange={this.handleSortChange} >
                     <option value="title">Alphabetical</option>
                     <option value="age">Newest</option>
                 </select>
                 </div>
             </div>
               );
          }
       });



    var BookItem = React.createClass({
      render: function(){
            return (
              <div className = "row thumbnail" >
                <div className = "book-thumb">
                  <Link to={ '/books/' + this.props.book.isbn}>
                       <img src={this.props.book.imageUrl} width="140" /> </Link>
                </div>                
                
                <div className = "book-status" >
               <BookStatus isbn = {this.props.book.isbn} />
                </div>
                
                <div className = "book-body" >
                  <div className = "book-title"><Link to={ '/books/' + this.props.book.isbn}> {this.props.book.title} </Link></div>
                  <div className = "book-author">{this.props.book.author}</div>
                  <p>{this.props.book.description}</p>
                </div>
                </div>
                 
             
                
               
               );
          }
       });



  var BookStatus = React.createClass({
       getInitialState: function() {
               return { status: '', message: ''};
            },
            addNewStatus: function(s){
                var u = userDetails[0].id;
                
                var i = this.props.isbn;
               
                shelfAPI.add(u, i, s);
                this.setState({message: 'Book Added'})
                this.setState({status: ''});
            },

             handleStatusChange: function(e) {
                this.setState({status : e.target.value});
                this.addNewStatus(e.target.value);
            },

            onStatusChange: function(e) {
                e.preventDefault();
                var comment = this.state.comment.trim();
                this.addNewComment(comment);
            },

            render: function(){

        return (
                <div>
                  <select id="select" onChange={this.handleStatusChange}>
                     <option value="Read">Read</option>
                     <option value="Want to Read">Want to Read</option>
                     <option value="Currently Reading">Currently Reading</option>
                 </select>
             </div>

        );

    }


  });



 var ShelfStatus = React.createClass({

  render: function(){
    var id = userDetails[0].id;
    var read = shelfAPI.getShelfBookStatus("Read" , id);
    var toRead = shelfAPI.getShelfBookStatus("Want to read", id);
    var reading = shelfAPI.getShelfBookStatus("Currently reading", id);


        return (
           <div>
          <h1>Book Shelf</h1>
          <div className = "shelf-list">
          <li>Read({read.length})</li>
          <li>Want to Read({toRead.length})</li>
          <li>Currently Reading({reading.length})</li>
          <li>
          <Link to={ '/shelf/Read'}> Go to book shelf  </Link>
          </li>
          </div>
          </div>


);

}

 });
     var FilteredBookList = React.createClass({
      getInitialState : function() {
          return {};
      },
          render: function(){
              var displayedBooks = this.props.books.map(function(book) {
                  return <BookItem key={book.isbn} book={book} /> ;
              }) ;
              return (
                <div className = "shelf-content">
                      <div className="col-md-10">
                        <ul className="books">
                            {displayedBooks}
                        </ul>
                      </div>
                      <div className = "col-md-2" >
                <ShelfStatus/>
                </div>
                </div>
                  ) ;
          }
      });

    var BookClubApp = React.createClass({
      getInitialState: function() {
           return { search: '', sort: 'title' } ;
      }, 
      handleChange : function(type,value) {
            if ( type == 'search' ) {
                this.setState( { search: value } ) ;
              } else {
                 this.setState( { sort: value } ) ;
              }
      }, 
      render: function(){
            var list = Books.filter(function(b) {
                  return b.title.toLowerCase().search(this.state.search.toLowerCase() ) != -1 ;
                }.bind(this) );
          var filteredList = _.sortBy(list, this.state.sort);
          return (
                <div className="view-container">
                <div className="view-frame">
                   <div className="container-fluid">
                   <div className="row">
                      <SelectBox onUserInput={this.handleChange } 
                             filterText={this.state.search} 
                             sort={this.state.sort} />
                       <FilteredBookList books={filteredList} />

                  </div> 
                  </div>                   
                </div>
              </div>
          );
      }
    });


 var App = React.createClass({
      render : function() {
        return (
          <div>
            <div className = "title-bar" > BookReads</div>
            {this.props.children}
          </div>
        )
      }
    });

    ReactDOM.render( (
      <Router>
          <Route path="/" component={App}>
             <IndexRoute component={BookClubApp} />
              <Route path="books/:isbn" component ={BookDetail} />
              <Route path="comment" component ={Comment} />              
              <Route path="login" component ={Login} />
              <Route path="register" component ={Register} /> 
              <Route path="shelf/:status" component ={Shelf} />
          </Route>
        </Router>
    ),
      document.getElementById('mount-point')
    );

