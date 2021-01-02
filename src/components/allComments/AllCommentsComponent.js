import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import CommentComponent from "../comment/CommentComponent";

class AllCommentsComponent extends Component {

    commentsService = new CommentsService();
    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentsService.getAllComments();
        this.setState({comments});
    }


    render() {

        let {comments} = this.state;

        return (
            <div>
                {
                    comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
                }
            </div>
        );
    }
}

export default AllCommentsComponent;