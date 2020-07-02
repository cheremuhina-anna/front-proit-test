import React from "react";

import "../styles/sTree.css"

class Node extends React.Component{

    handleOpenListChild = (event) => {
        let div = document.getElementById(event.target.id);
        div.innerHTML = (div.innerHTML === '+' ? '−' : '+');
        div.className = (div.className === 'drop' ? 'drop dropM' : 'drop');
    }

    render() {
        if (this.props.item.subItems.length > 0)
            return (
                <li>
                    <div id={this.props.item.value.id} className='drop'
                         onClick={this.handleOpenListChild}>
                        +
                    </div>
                    {this.props.item.value.name}
                    <ul id={"ul-" + this.props.item.value.id}>
                        {this.props.item.subItems.map(sub=>
                            <Node item = {sub}/>
                        )}
                    </ul>
                </li>
            );
        else
            return (
                <li>{this.props.item.value.name}</li>
            );
    }
}

class TreeView extends React.Component {

    render() {
        return (
            <div className={'container'} >
                <div className={'row'}>
            <ul className="treeCSS">
                {this.props.tree.map(node =>
                    <Node item = {node}/>
                )}
            </ul>
            </div>
            </div>
        );
    }
}

export default TreeView;