import React, {Component} from 'react';
import './Comment.css'

import {withRouter, Link} from "react-router-dom";

class CommentComponent extends Component {
    render() {

        let {item, match: {url}} = this.props;

        return (
            <div className={'comment'}>
                {item.id} - {item.email}
                <hr/>
                {item.body} <Link to={`${url}/${item.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(CommentComponent);