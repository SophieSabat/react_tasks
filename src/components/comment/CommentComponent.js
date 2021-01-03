import React, {Component} from 'react';
import './Comment.css'

import {Link, withRouter} from "react-router-dom";


class CommentComponent extends Component {
    render() {

        const {item, match: {url}} = this.props;

        return (
            <div className={'comment-render'}>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`} className={'link-details'}>details</Link>
            </div>
        );
    }
}

export default withRouter(CommentComponent);