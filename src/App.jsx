/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {useEffect, useContext} from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import BooksContext from './context/books'
import './App.css'

function App() {
 const {fetchBooks} =  useContext(BooksContext)

  useEffect(()=>{
    fetchBooks()
  },[])


  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
      
    </>
  )
}

export default App
