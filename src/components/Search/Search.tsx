import * as React from 'react';
//styles
import { Wrapper } from './Search.styles'

export default function Search() {
  return (
    <Wrapper>
        <form className="search-block">
            <h1>Search for books</h1>
            <input type="text" placeholder="Type book name here" />
            <div className="input-select-block">
            <label htmlFor="category-select">Category</label>
                    <select name="pets" id="category-select">
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
            <label htmlFor="sort-select">Sorting by</label>
                    <select name="pets" id="sort-select">
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
            </div>
            <button>Search 🔍︎</button>
        </form>

    </Wrapper>
  )
}
