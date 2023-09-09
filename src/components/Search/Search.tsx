import * as React from 'react';
//styles
import { Wrapper } from './Search.styles'

export default function Search() {
  return (
    <Wrapper>
        <form className="search-block">
            <h1>Search for books</h1>
            <input type="text" placeholder="Type book name here" />
            <button>Search 🔍︎</button>
        </form>

    </Wrapper>
  )
}
