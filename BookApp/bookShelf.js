var React = require('react')
var Router = require('react-router');
var userDetails = require('./loginAPI').loggedin;
var BookAPI = require('./data.js').bookAPI;
var shelfAPI = require('./bookShelfAPI.js').shelfAPI;



var BookShelfPage = React.createClass({

	render: function(){
	 var status = this.props.params.status;
	 var id = userDetails[0].id;
	 var shelf = shelfAPI.getShelfBookStatus(status, id);
    
        if(shelf.length > 0 ){
          var shelfContent = shelf.map(function(shelfItem){
            return <BookShelfItem book={shelfItem} status = {status} />;
          }.bind(this) )
        }


		return(
			<div className = "row">
			<div className = "col-md-12">
			<h1> Test </h1>
			<table className="table table-hover">
			<tr>
			<th>Cover</th>
			<th>Title</th>
			<th>Author</th>
			<th>Rating</th>
			<th>Shelves</th>
			<th>Date Added</th>
			</tr>
			{shelfContent}
	        </table>
	        </div>
			</div>

		);
	}

});

var BookShelfItem = React.createClass({

	render: function(){
		var book = this.props.book;
		var bookDetails = BookAPI.getBook(this.props.book.bookISBN);
		return(


			<tr>
			<td><img src={bookDetails.imageUrl}  height="180" width="70"/></td>
			<td>{bookDetails.title}</td>
			<td>{bookDetails.author}</td>
			<td>{bookDetails.rating}</td>
			<td>{this.props.status}</td>
			<td>{this.props.book.dateAdded}</td>
			</tr>
  

		);
	}

});


exports.BookShelfPage = BookShelfPage;
