import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUserAlt, faCommentAlt, faBell } from '@fortawesome/free-solid-svg-icons';

class User extends Component {
    constructor(props) {
        super(props);
        this._userMenu = null;
        this._openUserMenu = this._openUserMenu.bind(this);
        this._menuOpen = false;
    }

    _openUserMenu() {
        if (this._menuOpen) {
            this._userMenu.style.display = 'none';
            this._menuOpen = false;
        } else {
            this._userMenu.style.display = 'flex';
            this._menuOpen = true;
        }
    }

    componentDidMount() {
        this._userMenu = document.getElementsByClassName('user-menu-wrapper')[0];
    }

    render() {
        return (
        <nav className="user-wrapper">
            <div className="user-menu-wrapper">
                <div className="user-menu-item">
                    <p>Amigos</p>
                    <FontAwesomeIcon icon={faUserAlt} />
                </div>
                <div className="user-menu-item">
                    <p>Mensagens</p>
                    <FontAwesomeIcon icon={faCommentAlt} />
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="avatar-wrapper" onClick={this._openUserMenu}>
                <img src={require('../../img/default.png')} alt="User avatar" className="user-avatar"/>
                <p className="user-name">UserName</p>
                <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
            </div>
        </nav>);
    }
}

export default User;