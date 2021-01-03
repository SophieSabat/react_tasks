import React, {Component} from 'react';
import './Post.css'

import {Link, withRouter} from "react-router-dom";


class PostComponent extends Component {
    render() {

        const {item, match: {url}} = this.props;

        return (
            <div className={'post-render'}>
                {item.id} - {item.title} - <Link to={`${url}/${item.id}`} className={'link-details'}>details</Link>
            </div>
        );
    }
}

export default withRouter(PostComponent);