import React, { Component } from 'react';
import '../../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import User from './User';

class Header extends Component {
    constructor(props) {
        super(props);
        this._openMenu = this._openMenu.bind(this);
        this._changePage = this._changePage.bind(this);
        this._dropDownOpen = false;
    }

    _openMenu() {
        if (this._dropDownOpen) {
            document.getElementById('navMenuDropdown').classList.remove('show');
            this._dropDownOpen = false;
        } else {
            document.getElementById('navMenuDropdown').classList.add('show');
            this._dropDownOpen = true;
        }
    }

    _changePage(e) {
        console.log(e.target);
        let navItens = document.querySelectorAll('.nav-item');
        navItens.forEach(item => {
           item.classList.remove('active');
        });
        e.target.classList.add('active');
    }

    componentDidMount() {
        let navDropdownText = document.querySelector('.dropdown-text');
        let activePage = document.querySelector('.nav-item.active');
        navDropdownText.innerText = activePage.innerText;
    }

    render() {
        return (
            <header className="header">
                <User />
                <div className="artist-wrapper">
                    <img src={require('../../img/default.png')} alt="Default avatar" className="artist-avatar" />
                    <p className="artist-name">{this.props.artistName}</p>
                </div>
                <nav>
                    <div className="dropdown-wrapper" onClick={this._openMenu}>
                        <p className="dropdown-text active"></p>
                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </div>
                    <ul id="navMenuDropdown" className="nav-menu">
                        <li className="active nav-item" onClick={this._changePage}>ALBUNS</li>
                        <li className="nav-item" onClick={this._changePage}>ARTISTAS</li>
                        <li className="nav-item" onClick={this._changePage}>PLAYLISTS</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;