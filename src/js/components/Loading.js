import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../css/Loading.css';

function Loading(props) {
    return (
        <div className="loading">
        {
        props.isConnected ?
            <>
            <FontAwesomeIcon icon={faSpinner} spin />
            <p>Loading</p>
            </>
        :
            <p>Não foi possível se conectar, por favor verifique sua conexão.</p>
        }
        </div>
    );
}

export default Loading;