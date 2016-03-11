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
                <div className="col-md-10">
               <input type="text" placeholder="Search" 
                          value={this.props.filterText}
                          onChange={this.handleTextChange} />
                 Sort by:
                  <select id="sort" value={this.props.order } 
                         onChange={this.handleSortChange} >
                     <option value="name">Alphabetical</option>
                     <option value="age">Newest</option>
                 </select>
             </div>
               );
          }
       });


    var BookItem = React.createClass({
      render: function(){
            return (
                <li className="thumbnail book-listing">
                
                  <Link to={ '/books/' + this.props.book.isbn} className="thumb">
                       <img src={this.props.book.imageUrl} /> </Link>
                
                
                  <Link to={ '/books/' + this.props.book.isbn}> {this.props.book.title} {this.props.book.author}</Link>
                  <p>{this.props.book.description}</p>
                  
                </li>
               ) ;
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
                      <div className="col-md-10">
                        <ul className="books">
                            {displayedBooks}
                        </ul>
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

 /*var BookClub = React.createClass({
      render: function(){
          return (
                <BookClubApp books={books} />
          );
      }
    });*/


 var App = React.createClass({
      render : function() {
        return (
          <div>
            <h1>Book Club App</h1>
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
          </Route>
        </Router>
    ),
      document.getElementById('mount-point')
    );
/*
    ReactDOM.render(
      <BookClubApp books={books} />,
      document.getElementById('mount-point')
    );*/



