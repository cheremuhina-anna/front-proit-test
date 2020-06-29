import React from "react";
import ReactPaginate from "react-paginate";
// import Table from "./table";

class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // offset: 0,
            // perPage: 5,
            // currentPage: 0
            offset: this.props.offset,
            perPage: this.props.limit,
            currentPage: this.props.currentPage
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.props.fetchData(this.state.offset, this.state.perPage)
        });

    };

    componentWillMount() {
        this.props.fetchData(this.state.offset, this.state.perPage)
    }

    render() {
        return (
            <div>
                {/*{this.state.postData}*/}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(this.props.count / this.state.perPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}
export default Pagination;