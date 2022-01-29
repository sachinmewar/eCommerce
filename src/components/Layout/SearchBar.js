import './SearchBar.css'
import SearchButton from './SearchButton';

const SearchBar = () => {
    return(
        <form className='search-bar'>
            <input type='text' id='header-search'> </input>
        </form>
    );
}

export default SearchBar;