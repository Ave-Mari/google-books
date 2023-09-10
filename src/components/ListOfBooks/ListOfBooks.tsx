import React from 'react';
//types
export interface Book {

}


const ListOfBooks: React.FC = ({ books, error }) {
  return (
    <section>
        <ul>
        {books.map((book) => {
            <li
            key={book.id}
            >
                {/* <img src={book.image} alt={book.title}></img> */}
                <p>{book.category}</p>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
            </li>
        })}
        </ul>
    </section>
  )
}

export default ListOfBooks;