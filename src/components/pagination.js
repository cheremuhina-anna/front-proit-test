import React from "react";
import ReactPaginate from "react-paginate";
// import Table from "./table";

class Pagination extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     offset: 0,
        //     data: [],
        //     perPage: 10,
        //     currentPage: 0
        // };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    // receivedData() {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/photos`)
    //         .then(res => {
    //
    //             const data = res.data;
    //             const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    //             const postData = slice.map(pd => <React.Fragment>
    //                 <p>{pd.title}</p>
    //                 <img src={pd.thumbnailUrl} alt=""/>
    //             </React.Fragment>)
    //
    //             this.setState({
    //                 pageCount: Math.ceil(data.length / this.state.perPage),
    //                 postData
    //             })
    //         });
    // }
    handlePageClick = (e) => {
        alert(e.toString());
        // const offset = selectedPage * this.state.perPage;
        // this.setState({
        //     currentPage: selectedPage,
        //     offset: offset
        // }, () => {
        //     this.receivedData()
        // });

    };

    // componentDidMount() {
    //     this.receivedData()
    // }

    render() {
        return (
            <div>
                {/*{this.state.postData}*/}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(this.props.countOrg / 10)}
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