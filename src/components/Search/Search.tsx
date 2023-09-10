import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../actions/actions'
import store from '../../store/store'
//styles
import { Wrapper } from './Search.styles'
//types
export interface SearchTags {
    search: string,
    category: string,
    sortBy: string
}


const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [searchTags, setSearchTags] = useState<SearchTags>(
        {
          search: '',
          category: 'all',
          sortBy: 'relevance'
        }
      )
    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchTags({...searchTags, [name]: value})
      }


      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTags(searchTags);
        dispatch(searchBooks(searchTags));
        setSearchTags({
          search: '',
          category: '',
          sortBy: 'relevance'
        })
      }
      
      
  return (
    <Wrapper>
        <form className="search-block" onSubmit={handleSubmit}>
            <h1>Search for books</h1>
            <input 
            value={searchTags.search}
            onChange={handleChange}
            type="text" 
            name="search"
            placeholder="Type book name here" 
            />
            <div className="input-select-block">
            <label htmlFor="category-select">
                Category   
                    <select 
                    name="category" 
                    value={searchTags.category} 
                    onChange={handleChange}
                    id="category-select"
                    >
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
                </label>
            <label htmlFor="sort-select">
                Sorting by   
                    <select 
                    name="sortBy" 
                    value={searchTags.sortBy} 
                    onChange={handleChange}
                    id="sort-select"
                    >
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </label>
            </div>
            <button type="submit">Search 🔍︎</button>
        </form>

    </Wrapper>
  )
}

export default Search;
