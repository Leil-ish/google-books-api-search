import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results'
import Header from './Header'

class BooksApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        books:[],
        printType: "All",
        bookType: "All"
    };
  }

  handlePrintFilter(printType) {
    this.setState({
      printType: printType
    })
  }

  handleBookFilter(bookType) {
    console.log(bookType)
    this.setState({
      bookType: bookType
    })
  }

  handleSubmit(searchTerm) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB7gdas0Wojmn2NFFUOaOpxBH1xlsgjxSc`
    
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
         books: data.items
        })
      })
      .catch(err => this.setState({
        error: err.message
      }))
  }
  


  render() {
    
    const error = this.state.error ? <div className="BooksAppError">{this.state.error}</div> : "";

    return (
      <main className='BooksApp'>
        <Header />
        <SearchBar 
          onSubmit={searchTerm => this.handleSubmit(searchTerm)}
          onPrintFilter={printType => this.handlePrintFilter(printType)}
          onBookFilter={bookType => this.handleBookFilter(bookType)}/>
         {error}  
        <Results 
          books={this.state.books} 
          printFilter={this.state.printType}
          bookFilter={this.state.bookType}/>
      </main>
    );
  }
}

export default BooksApp;