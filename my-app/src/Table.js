import React, { Component }  from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const headers = this.props.headers;
        const data = this.props.data;
        return (
            <table border="1">
                <TableHeader headers={headers} />
                <TableBody data={data} removeData = {this.props.removeData}/>
            </table>
        );
    }
}
export default Table;