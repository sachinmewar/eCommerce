import './SearchBar.css'
import SearchButton from './SearchButton';

const SearchBar = () => {

    const clickButtonHandler = () => {
        console.log("Search button Clicked");
    }

    return(
        <form>
        <div className='searchBar-container'>
            <input type="text"/>
        </div>
        {/* <div className='new-expense__actions'>
          <button type = "submit" onClick={clickButtonHandler}>
              submit
          </button> */}
        {/* </div> */}
      </form>
    );
}

export default SearchBar;