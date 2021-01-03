import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import './FullComment.css'

class FullCommentComponet extends Component {

    state = {comment: null};
    commentService = new CommentsService();

    async componentDidMount() {
        const {commentId} = this.props;
        const comment = await this.commentService.getComment(commentId);
        this.setState({comment});
    }


    render() {

        const {comment} = this.state;

        return (
            <div className={'full-comment-render'}>
                {
                    comment && <div>{comment.id} - {comment.email} : {comment.name} <hr/> {comment.body}</div>
                }
            </div>
        );
    }
}

export default FullCommentComponet;