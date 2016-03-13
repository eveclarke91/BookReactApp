var React = require('react')
var Router = require('react-router');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var userDetails = require('./loginAPI').loggedin;
var BookAPI = require('./data.js').bookAPI;
var shelfAPI = require('./bookShelfAPI.js').shelfAPI;



var BookShelfPage = React.createClass({
	remove : function(i) {
		var bookId = i;
        shelfAPI.remove(bookId);
        console.log(bookId);
        this.setState({}); 
    },



	render: function(){
	 var status = this.props.params.status;
	 var id = userDetails[0].id;
	 var shelf = shelfAPI.getShelfBookStatus(status, id);

	 var read = shelfAPI.getShelfBookStatus("Read" , id);
	 var toRead = shelfAPI.getShelfBookStatus("toRead", id);
	 var reading = shelfAPI.getShelfBookStatus("Reading", id);
	    
        if(shelf.length > 0 ){
          var shelfContent = shelf.map(function(shelfItem){
            return <BookShelfItem book={shelfItem} status = {status} removeHandler={this.remove} />;
          }.bind(this) )
        }else{
          var shelfContent = (
          	<tr>
			<td></td>
			<td>Shelf Empty</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
          	);
        }


		return(
			<div className = "row">
			<div className = "col-md-2">
			<li><Link to={ '/shelf/Read'}>Read({read.length})</Link></li>
			<li><Link to={ '/shelf/toRead'}>Want to Read({toRead.length})</Link></li>
			<li><Link to={ '/shelf/Reading'}>Currently Reading({reading.length})</Link></li>
			</div>
			<div className = "col-md-10">
			<table className="table table-hover">
			<thead>
			<tr>
			<th>Cover</th>
			<th>Title</th>
			<th>Author</th>
			<th>Rating</th>
			<th>Shelves</th>
			<th>Date Added</th>
			</tr>
			</thead>
			<tbody>
			{shelfContent}
			</tbody>
	        </table>
	        </div>
			</div>

		);
	}

});

var BookShelfItem = React.createClass({

	render: function(){
		var book = this.props.book;
		var bookDetails = [];
		var bookDetails = BookAPI.getBook(this.props.book.bookISBN);
		return(


			<tr>
			<td><img src={bookDetails.imageUrl}  height="80" width="50"/></td>
			<td>{bookDetails.title}</td>
			<td>{bookDetails.author}</td>
			<td>{bookDetails.rating}</td>
			<td>{this.props.status}</td>
			<td>{this.props.book.dateAdded}</td>
			<td><button type="button" className="btn btn-warning">Edit</button></td>
			<td><DeleteButton book = {book}  removeHandler={this.props.removeHandler}/></td>
			</tr>
  

		);
	}

});


var DeleteButton = React.createClass({
	handleRemove : function(id) {
         this.props.removeHandler(id);
    },
	
	render: function(){
    return(
		<button type="button" className="btn btn-danger" onClick={() => this.handleRemove(this.props.book.id)}>Remove</button>

	);

	}

});


exports.BookShelfPage = BookShelfPage;
