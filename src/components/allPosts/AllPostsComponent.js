import React, {Component} from 'react';
import PostsService from "../../services/PostsService";
import PostComponent from "../post/PostComponent";

class AllPostsComponent extends Component {

    postService = new PostsService();
    state = {posts: []};

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }


    render() {

        let {posts} = this.state;

        return (
            <div>
                {
                    posts.map(post => <PostComponent item={post} key={post.id}/>)
                }
            </div>
        );
    }
}

export default AllPostsComponent;