import React from 'react';

function Header(props) {
    return (
        <header>
            <nav>Temp</nav>
            <div className="avatar-wrapper">
                <img alt="Default avatar"/>
                <p>{props.artistName}</p>
            </div>
            <nav>
                <ul>
                    <li>ALBUNS</li>
                    <li>ARTISTAS</li>
                    <li>PLAYLISTS</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;