import React from "react";
import {Link} from "react-router-dom"

import "../styles/sheader.css"

class Header extends React.Component {
    render(){
        return (
            // <div className="container">
            //     <div className="row justify-content-center">
            //         <div className={'col'}><Link to="/organization">Организации</Link></div>
            //         <div className={'col'}><Link to="/organization/tree">Дерево организаций</Link></div>
            //         <div className={'col'}><Link to="/employee">Сотрудники</Link></div>
            //         <div className={'col'}><Link to="/employee/tree">Дерево сотрудников</Link></div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <ul className="list-group list-group-horizontal">
                    <li className={'list-group-item'}><Link to="/organization">Организации</Link></li>
                    <li className={'list-group-item'}><Link to="/organization/tree">Дерево организаций</Link></li>
                    <li className={'list-group-item'}><Link to="/employee">Сотрудники</Link></li>
                    <li className={'list-group-item'}><Link to="/employee/tree">Дерево сотрудников</Link></li>
                </ul>
            </nav>
            //     </div>
            // </div>
        );
    }
}

export default Header;