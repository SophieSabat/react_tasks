import React, {Component} from 'react';
import './Post.css'

import {withRouter, Link} from "react-router-dom";


class PostComponent extends Component {
    render() {

        let {item, match: {url}} = this.props;

        return (
            <div className={'post'}>
                {item.id} - {item.title}
                <hr/>
                {item.body} - <Link to={`${url}/${item.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(PostComponent);