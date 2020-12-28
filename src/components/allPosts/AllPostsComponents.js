import React, {Component} from 'react';
import PostComponents from "../post/PostComponent";

class AllPostsComponents extends Component {

    state = {posts: [], chosenOne: null}

    oneSelectPost = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenOne: find});
    }


    render() {

        let {posts, chosenOne} = this.state;

        return (
            <div>
                {
                    posts.map(post => <PostComponents item={post} key={post.id} oneSelectPost={this.oneSelectPost}/>)
                }
                {
                    chosenOne && <h2>{chosenOne.id} - {chosenOne.title}
                    <br/>
                    {chosenOne.body}</h2>
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            })
    }

}

export default AllPostsComponents;