import React, {Component} from 'react';

import {withRouter, Link} from "react-router-dom";

class UserComponent extends Component {
    render() {

        let {item, match: {url}} = this.props;

        return (
            <div>
                {item.id} - {item.name} - {item.email} - {item.username} - <Link to={`${url}/${item.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);