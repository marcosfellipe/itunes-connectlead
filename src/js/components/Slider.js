import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Slider extends Component {
    constructor(props) {
        super(props);
        this._page = 0;
        this._albunsElements = document.getElementsByClassName('album-wrapper');
        this._nextSlide = this._nextSlide.bind(this);
        this._previousSlide = this._previousSlide.bind(this);
    }

    _nextSlide() {
        let albuns = this._albunsElements;
        let pos = this._page;
        if (albuns) {
            if (pos === albuns.length)
                return;
            for (const album of albuns) {
                album.style.transform = 'translate3d(' + (-album.offsetWidth * (1 + this._page)) + 'px,0,0)';
            }
            this._page += 1;
        }
    }

    _previousSlide() {
        let albuns = this._albunsElements;
        let pos = this._page;
        if (albuns) {
            if (pos === 0)
                return;
            for (const album of albuns) {
                album.style.transform = 'translate3d(' + (album.offsetWidth * (1 - this._page)) + 'px,0,0)';
            }
            this._page -= 1;
        }
    }

    render() {
        return (
            <div className="slider-wrapper">
                <button onClick={this._previousSlide} className="slider-button"><FontAwesomeIcon icon={faAngleLeft} size="2x" /></button>
                <button onClick={this._nextSlide} className="slider-button"><FontAwesomeIcon icon={faAngleRight} size="2x" /></button>
            </div>
        );
    }
}

export default Slider;