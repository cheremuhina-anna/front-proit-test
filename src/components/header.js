import React from "react";
import {Link} from "react-router-dom"

import "../styles/sheader.css"

class Header extends React.Component {
    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/organization">Организации</Link></li>
                    <li><Link to="/employee">Сотрудники</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;