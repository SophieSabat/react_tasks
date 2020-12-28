import React, {Component} from 'react';
import './post.css'

class PostComponents extends Component {
    render() {

        let {item, oneSelectPost} = this.props;

        return (
            <div className={'post'}>
                <h4>{item.id} - {item.title}</h4>
                {item.body}
                <button onClick={() => {oneSelectPost(item.id)}}>chose</button>
            </div>
        );
    }
}

export default PostComponents;