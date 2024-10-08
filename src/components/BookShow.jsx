/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context'
import BookEdit from './BookEdit'

const BookShow = ({book}) => {
const [showEdit, setShowEdit] = useState(false)
const {deleteBookById} = useBooksContext()

const handleSubmit = ()=>{
  setShowEdit(false)

}

  const handleDeleteClick=()=>{
    deleteBookById(book.id)
  }

  const handleEditClick =()=>{
    setShowEdit(!showEdit)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content=<BookEdit onSubmit={handleSubmit} book={book}/>
  } 
  return (
	<div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
    <div>{content}</div>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>Edit</button>
      <button className="delete" onClick={handleDeleteClick}></button>
    </div>
    </div>
  )
}

export default BookShow