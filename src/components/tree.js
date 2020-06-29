import React from "react";

import "../styles/sTree.css"

class TreeView extends React.Component {

function() {
        var ul = document.querySelectorAll('.treeCSS > li:not(:only-child) ul, .treeCSS ul ul');
        for (var i = 0; i < ul.length; i++) {
            var div = document.createElement('div');
            div.className = 'drop';
            div.innerHTML = '+'; // картинки лучше выравниваются, т.к. символы на одном браузере ровно выглядят, на другом — чуть съезжают
            ul[i].parentNode.insertBefore(div, ul[i].previousSibling);
            div.onclick = function() {
                this.innerHTML = (this.innerHTML == '+' ? '−' : '+');
                this.className = (this.className == 'drop' ? 'drop dropM' : 'drop');
            }
        }
    };

    render() {
        return (
            <ul className="treeCSS">
                {this.props.roots.map(item => {
                    return (
                        <li>{item.name}</li>
                    );
                })}
                <li>Блог
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </li>
                <li>Контакты</li>
            </ul>
        );
    }
}

export default TreeView;