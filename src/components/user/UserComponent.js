import React, {Component} from 'react';
import './User.css'

import {Link, withRouter} from "react-router-dom";


class UserComponent extends Component {
    render() {

        const {item, match: {url}} = this.props;

        return (
            <div className={'user-render'}>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`} className={'link-details'}>details</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);