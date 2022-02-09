import "./Pagination.css"

const Pagination = (props) => {

    const onClickNextButtonhandler = () => {
        props.onClickNext();
    }

    const onClickPrevButtonhandler = () => {
        props.onClickPrevious();
    }
    return(
        <div className="pagination-container">
            <button onClick={onClickPrevButtonhandler}> prev </button>
            <div id="pageNumber"> Page : {props.pageNumber} </div>
            <button onClick = {onClickNextButtonhandler}> next </button>
        </div>
    )
}

export default Pagination;