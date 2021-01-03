import React, {Component} from 'react';
import PostsService from "../../services/PostsService";
import PostComponent from "../post/PostComponent";
import FullPostComponent from "../full-post/FullPostComponent";

import {Route, Switch, withRouter} from "react-router-dom";



class AllPostsComponent extends Component {

    state = {posts: []};
    postsService = new PostsService();

    async componentDidMount() {
        const posts = await this.postsService.getAllPosts();
        this.setState({posts});
    }


    render() {

        const {posts} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    posts.map(post => <PostComponent item={post} key={post.id}/>)
                }

                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <FullPostComponent postId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPostsComponent);