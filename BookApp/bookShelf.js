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
    save: function(i,r,s){
    	shelfAPI.edit(i, r ,s);
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
            return <BookShelfItem book={shelfItem} status={status} removeHandler={this.remove} saveHandler={this.save}/>;
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
	 getInitialState : function() {
        return {
            mode : '',
            rating : '',
            status : '',
            id : ''

        };                
    },

    editMode: function() {
    	this.setState({mode : 'edit'})
	},

	handleRatingChange: function(e) {
		this.setState({rating: e.target.value});
	},

	handleStatusChange: function(e){
		this.setState({status: e.target.value});

	},

	handleSaveButton: function(){
		var id = this.props.book.id;
		var rating = this.state.rating;
		var status = this.state.status;
		this.setState({mode : ''});
		this.props.saveHandler(id, rating, status);


	},

	render: function(){
		var book = this.props.book;
		var bookDetails = [];
		var bookDetails = BookAPI.getBook(this.props.book.bookISBN);
		var leftButtonHandler = this.editMode;

		var statusWord = '';

		if(this.props.status == "Read"){
			statusWord = "After Reading";
		}else if(this.props.status == "toRead"){
			statusWord = "Want to Read";
		}else {
			statusWord = "Currently Reading";
		}

		var fields = [
            <td><img src={bookDetails.imageUrl}  height="80" width="50"/></td>,
			<td>{bookDetails.title}</td>,
			<td>{bookDetails.author}</td>,
			<td>{book.rating}</td>,
			<td>{statusWord}</td>,
			<td>{book.dateAdded}</td>,
			<td> <input type="button" className='btn btn-warning '
                                 value = 'edit'
                                 onClick={leftButtonHandler} /></td>,
			<td><DeleteButton book={book}  removeHandler={this.props.removeHandler}/></td>
                   ] ;

		

		if (this.state.mode == 'edit' ) {
			var leftButtonHandler = this.handleSaveButton;

            var fields = [
            <td><img src={bookDetails.imageUrl}  height="80" width="50"/></td>,
			<td>{bookDetails.title}</td>,
			<td>{bookDetails.author}</td>,
			<td><select id="select" onChange={this.handleRatingChange}>
                     <option value="1">1 Star</option>
                     <option value="2">2 Stars</option>
                     <option value="3">3 Stars</option>
                     <option value="4">4 Stars</option>
                     <option value="5">5 Stars</option>
                 </select></td>,
			<td key ={'status'}> 
			<select id="select" onChange={this.handleStatusChange}>
					<option value="Read" selected disabled>Book Status</option>
                     <option value="Read">Read</option>
                     <option value="toRead">Want to Read</option>
                     <option value="Reading">Currently Reading</option>
                 </select></td>,
			<td>{this.props.book.dateAdded}</td>,
			<td><button type="button" className="btn btn-warning" onClick={leftButtonHandler}>Save</button></td>,
			<td><DeleteButton book = {book}  removeHandler={this.props.removeHandler}/></td>
                   ] ;



		}
		return(


			<tr>
		     {fields}
			
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
