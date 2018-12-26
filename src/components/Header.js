import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <p>OAUTH_CLIENT_ID: {props.env.OAUTH_CLIENT_ID}</p>
            </div>
        </div>
    );
};

export default Header;