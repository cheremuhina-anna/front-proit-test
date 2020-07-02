import React from "react";
import {Link} from "react-router-dom"

import "../styles/sheader.css"

class Header extends React.Component {
    render(){
        return (
            <nav className={'headerCSS'}>
                <ul>
                    <li><Link to="/organization">Организации</Link></li>
                    <li><Link to="/organization/tree">Дерево организаций</Link></li>
                    <li><Link to="/employee">Сотрудники</Link></li>
                    <li><Link to="/employee/tree">Дерево сотрудников</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;