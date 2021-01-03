import React, {Component} from 'react';
import PostsService from "../../services/PostsService";
import './FullPost.css'

class FullPostComponent extends Component {

    state = {post: null};
    postService = new PostsService();

    async componentDidMount() {
        const {postId} = this.props;
        const post = await this.postService.getPost(postId);
        this.setState({post});
    }


    render() {

        const {post} = this.state;

        return (
            <div className={'full-post-render'}>
                {
                    post && <div>{post.id} - {post.title} <hr/> {post.body}</div>
                }
            </div>
        );
    }
}

export default FullPostComponent;