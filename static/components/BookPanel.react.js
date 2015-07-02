var React = require('react');
var BookStore = require('../stores/BookStore').BookStore;
var BookActions = require('../actions/BookActions').BookActions;
var SearchPanel = require('./SearchPanel.react').SearchPanel;
var BookTable = require('./BookTable.react').BookTable;
var BookForm = require('./BookForm.react').BookForm;

var BookPanel = React.createClass({
    getInitialState: function() {
        return BookStore.getState();
    },
    render: function() {
        return(
            <div className="row">
                <div className="one-half column">
                    <SearchPanel></SearchPanel>
                    <BookTable books={this.state.books} />
                </div>
                <div className="one-half column">
                    <BookForm
                        book={this.state.editingBook}
                        message={this.state.message}
                    />
                </div>
                <br />
            </div>
        );
    },
    _onChange: function() {
        this.setState( BookStore.getState() );
    },
    componentWillUnmount: function() {
        BookStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function() {
        BookStore.addChangeListener(this._onChange);
    }
});

module.exports.BookPanel = BookPanel ;